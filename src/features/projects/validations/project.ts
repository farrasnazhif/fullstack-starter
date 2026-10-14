import { z } from "zod";

export const projectSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Give your project a name.")
    .max(100, "Use at most 100 characters."),
  description: z.string().max(2000, "Use at most 2,000 characters."),
  status: z.enum(["draft", "active", "completed"]),
});
export const projectIdSchema = z.uuid();
export type ProjectInput = z.infer<typeof projectSchema>;
export const createProjectSchema = projectSchema.extend({
  description: projectSchema.shape.description.default(""),
  status: projectSchema.shape.status.default("draft"),
});
export type CreateProjectInput = z.input<typeof createProjectSchema>;
