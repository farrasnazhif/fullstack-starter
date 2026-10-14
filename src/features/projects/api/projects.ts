import { createClient } from "@/lib/supabase/client";
import {
  createProjectSchema,
  projectIdSchema,
  projectSchema,
  type ProjectInput,
  type CreateProjectInput,
} from "../validations/project";

export async function getProjects() {
  // shortcut: the Supabase row limit caps this list, add pagination when the demo grows beyond it.
  const { data, error } = await createClient()
    .from("projects")
    .select("*")
    .order("updated_at", { ascending: false });
  if (error) throw error;
  return data;
}

export async function getProject(id: string) {
  const { data, error } = await createClient()
    .from("projects")
    .select("*")
    .eq("id", projectIdSchema.parse(id))
    .maybeSingle();
  if (error) throw error;
  if (!data) throw new Error("This project is unavailable.");
  return data;
}

export async function createProject(input: CreateProjectInput) {
  const { data, error } = await createClient()
    .from("projects")
    .insert(createProjectSchema.parse(input))
    .select()
    .single();
  if (error) throw error;
  return data;
}

export async function updateProject(id: string, input: ProjectInput) {
  const { data, error } = await createClient()
    .from("projects")
    .update(projectSchema.parse(input))
    .eq("id", projectIdSchema.parse(id))
    .select()
    .maybeSingle();
  if (error) throw error;
  if (!data)
    throw new Error(
      "This project is unavailable. Your changes were not saved.",
    );
  return data;
}

export async function deleteProject(id: string) {
  const { data, error } = await createClient()
    .from("projects")
    .delete()
    .eq("id", projectIdSchema.parse(id))
    .select("id")
    .maybeSingle();
  if (error) throw error;
  if (!data)
    throw new Error("This project is unavailable. No project was deleted.");
  return data.id;
}
