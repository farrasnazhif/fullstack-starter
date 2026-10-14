"use client";

import { Switch as BaseSwitch } from "@base-ui/react/switch";
import type { ComponentProps } from "react";

export function Switch({ className = "", ...props }: Omit<ComponentProps<typeof BaseSwitch.Root>, "className"> & { className?: string }) {
  return <BaseSwitch.Root className={`switch ${className}`} {...props}><BaseSwitch.Thumb className="switch-thumb" /></BaseSwitch.Root>;
}
