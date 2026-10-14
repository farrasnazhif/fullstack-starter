"use client";

import { Radio } from "@base-ui/react/radio";
import { RadioGroup as BaseRadioGroup } from "@base-ui/react/radio-group";
import type { ComponentProps } from "react";
import type { SelectOption } from "./select";

export function RadioGroup({ options, className = "", onValueChange, ...props }: Omit<ComponentProps<typeof BaseRadioGroup>, "className" | "value" | "defaultValue" | "onValueChange"> & {
  options: SelectOption[]; className?: string; value?: string; defaultValue?: string; onValueChange?: (value: string) => void;
}) {
  return <BaseRadioGroup className={`grid gap-3 ${className}`} {...props} onValueChange={(value) => { if (typeof value === "string") onValueChange?.(value); }}>
    {options.map(({ value, label, disabled }) => <label key={value} className="ui-choice">
      <Radio.Root value={value} disabled={disabled} className="ui-radio"><Radio.Indicator className="ui-radio-dot" /></Radio.Root>
      {label}
    </label>)}
  </BaseRadioGroup>;
}
