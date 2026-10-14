"use client";

import { Checkbox as BaseCheckbox } from "@base-ui/react/checkbox";
import { Check, Minus } from "lucide-react";
import type { ComponentProps } from "react";

export function Checkbox({ className = "", ...props }: Omit<ComponentProps<typeof BaseCheckbox.Root>, "className"> & { className?: string }) {
  return <BaseCheckbox.Root className={`ui-checkbox ${className}`} {...props}>
    <BaseCheckbox.Indicator>{props.indeterminate ? <Minus size={12} /> : <Check size={12} />}</BaseCheckbox.Indicator>
  </BaseCheckbox.Root>;
}
