import type { ComponentProps } from "react";

export function Textarea({ className = "", ...props }: ComponentProps<"textarea">) {
  return <textarea className={`input min-h-28 resize-y ${className}`} {...props} />;
}
