import type { ComponentProps } from "react";

export function ButtonGroup({ label, className = "", ...props }: ComponentProps<"div"> & { label: string }) {
  return <div {...props} role="group" aria-label={label} className={`ui-button-group ${className}`} />;
}
