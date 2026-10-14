import assert from "node:assert/strict";
import { createClient } from "@supabase/supabase-js";

const env = process.env;
const required = [
  "NEXT_PUBLIC_SUPABASE_URL",
  "NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY",
  "RLS_TEST_USER_A_EMAIL",
  "RLS_TEST_USER_A_PASSWORD",
  "RLS_TEST_USER_B_EMAIL",
  "RLS_TEST_USER_B_PASSWORD",
];
for (const key of required)
  assert.ok(
    env[key],
    `Set ${key} in .env.local. Use two disposable confirmed users.`,
  );

const options = { auth: { persistSession: false, autoRefreshToken: false } };
const makeClient = () =>
  createClient(
    env.NEXT_PUBLIC_SUPABASE_URL,
    env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
    options,
  );
const alice = makeClient();
const bob = makeClient();
const anon = makeClient();
const ownedIds = [];

async function signIn(client, prefix) {
  const { data, error } = await client.auth.signInWithPassword({
    email: env[`RLS_TEST_USER_${prefix}_EMAIL`],
    password: env[`RLS_TEST_USER_${prefix}_PASSWORD`],
  });
  assert.ifError(error);
  assert.ok(data.user);
  return data.user.id;
}

try {
  const aliceId = await signIn(alice, "A");
  const bobId = await signIn(bob, "B");
  assert.notEqual(aliceId, bobId, "Test accounts must be different.");
  const created = await alice
    .from("projects")
    .insert({ name: `Isolation check ${Date.now()}` })
    .select()
    .single();
  assert.ifError(created.error);
  assert.ok(created.data);
  const project = created.data;
  ownedIds.push(project.id);
  assert.equal(project.user_id, aliceId);
  const own = await alice
    .from("projects")
    .select()
    .eq("id", project.id)
    .single();
  assert.ifError(own.error);

  const read = await bob.from("projects").select().eq("id", project.id);
  assert.ifError(read.error);
  assert.deepEqual(read.data, []);
  const write = await bob
    .from("projects")
    .update({ name: "Stolen" })
    .eq("id", project.id)
    .select();
  assert.ifError(write.error);
  assert.deepEqual(write.data, []);
  const remove = await bob
    .from("projects")
    .delete()
    .eq("id", project.id)
    .select();
  assert.ifError(remove.error);
  assert.deepEqual(remove.data, []);
  const spoofId = crypto.randomUUID();
  ownedIds.push(spoofId);
  const spoof = await bob
    .from("projects")
    .insert({ id: spoofId, name: "Spoofed owner", user_id: aliceId });
  assert.ok(spoof.error, "A user must not create projects for another owner.");
  const transfer = await alice
    .from("projects")
    .update({ user_id: bobId })
    .eq("id", project.id);
  assert.ok(transfer.error, "Ownership cannot be transferred.");
  const anonymous = await anon.from("projects").select().eq("id", project.id);
  assert.ok(
    anonymous.error || anonymous.data.length === 0,
    "Anonymous access must expose no projects.",
  );

  for (const invalid of [
    { name: " " },
    { name: "\t" },
    { name: "x".repeat(101) },
    { name: "Valid", description: "x".repeat(2001) },
    { name: "Valid", status: "admin" },
  ]) {
    const invalidId = crypto.randomUUID();
    ownedIds.push(invalidId);
    const result = await alice
      .from("projects")
      .insert({ id: invalidId, ...invalid });
    assert.ok(
      result.error,
      "Database constraints must reject invalid direct SDK input.",
    );
  }
  const edited = await alice
    .from("projects")
    .update({ name: "Owner edit", updated_at: "2000-01-01T00:00:00Z" })
    .eq("id", project.id)
    .select()
    .single();
  assert.ifError(edited.error);
  assert.equal(edited.data.name, "Owner edit");
  assert.ok(
    new Date(edited.data.updated_at).getTime() >
      new Date("2000-01-01").getTime(),
  );
  const deleted = await alice
    .from("projects")
    .delete()
    .eq("id", project.id)
    .select("id")
    .single();
  assert.ifError(deleted.error);
  assert.equal(deleted.data.id, project.id);

  console.log(
    "Passed: private reads, writes, deletes, ownership, constraints, and owner CRUD.",
  );
} finally {
  for (const id of ownedIds) {
    const results = await Promise.all(
      [alice, bob].map((client) =>
        client.from("projects").delete().eq("id", id),
      ),
    );
    if (results.some(({ error }) => error))
      console.error(`Check isolation-test project ${id} for cleanup manually.`);
  }
  await Promise.all([alice.auth.signOut(), bob.auth.signOut()]);
}
