import type { ComponentProps } from "react";

export function Separator({ orientation = "horizontal", className = "", ...props }: ComponentProps<"div"> & { orientation?: "horizontal" | "vertical" }) {
  return <div {...props} role="separator" aria-orientation={orientation} className={`ui-separator ${className}`} data-orientation={orientation} />;
}
