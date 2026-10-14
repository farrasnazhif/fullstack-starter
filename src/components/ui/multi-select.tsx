"use client";

import { Combobox, type ComboboxProps } from "./combobox";

export function MultiSelect(props: Omit<ComboboxProps<true>, "multiple">) {
  return <Combobox {...props} multiple />;
}
