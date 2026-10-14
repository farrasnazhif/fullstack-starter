import { z } from "zod";

const publicEnvSchema = z.object({
  url: z.url(),
  key: z.string().min(1),
});

export function getPublicEnv() {
  const result = publicEnvSchema.safeParse({
    url: process.env.NEXT_PUBLIC_SUPABASE_URL,
    key: process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
  });
  if (!result.success)
    throw new Error(
      "Configure the Supabase URL and publishable key in .env.local first.",
    );
  return result.data;
}

export function isSupabaseConfigured() {
  return publicEnvSchema.safeParse({
    url: process.env.NEXT_PUBLIC_SUPABASE_URL,
    key: process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
  }).success;
}
