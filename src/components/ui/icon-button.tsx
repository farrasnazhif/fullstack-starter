"use client";

import type { ComponentProps } from "react";
import { Button } from "./button";

export function IconButton({ label, size = "md", className = "", ...props }: Omit<ComponentProps<typeof Button>, "aria-label"> & { label: string }) {
  return <Button size={size} className={`ui-icon-button ${className}`} {...props} aria-label={label} />;
}
