"use client";

import { useId } from "react";
import { DatePicker } from "./date-picker";

export function DateRangePicker({ value, onValueChange, disabled, min, max }: {
  value: { start: string; end: string };
  onValueChange: (value: { start: string; end: string }) => void;
  disabled?: boolean;
  min?: string;
  max?: string;
}) {
  const id = useId();
  return <fieldset disabled={disabled} className="grid gap-3 sm:grid-cols-2">
    <div className="field"><label htmlFor={`${id}-start`}>Start date</label>
      <DatePicker id={`${id}-start`} value={value.start} min={min} max={value.end || max} onChange={(event) => onValueChange({ ...value, start: event.target.value })} />
    </div>
    <div className="field"><label htmlFor={`${id}-end`}>End date</label>
      <DatePicker id={`${id}-end`} value={value.end} min={value.start || min} max={max} onChange={(event) => onValueChange({ ...value, end: event.target.value })} />
    </div>
  </fieldset>;
}
