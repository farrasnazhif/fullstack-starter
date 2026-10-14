"use client";

import { Input as BaseInput } from "@base-ui/react/input";
import type { ComponentProps } from "react";

export function Input({
  className = "",
  ...props
}: Omit<ComponentProps<typeof BaseInput>, "className"> & {
  className?: string;
}) {
  return <BaseInput className={`input ${className}`} {...props} />;
}
