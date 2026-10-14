import { SANDBOX_COMPONENTS } from "../constants/catalog.ts";

export function getSandboxComponentId(value: unknown): string {
  return typeof value === "string" && SANDBOX_COMPONENTS.some((entry) => entry.id === value)
    ? value
    : "buttons";
}
