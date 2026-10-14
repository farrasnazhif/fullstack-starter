import type { ComponentProps } from "react";
import { Input } from "./input";

export function TimePicker(props: Omit<ComponentProps<typeof Input>, "type">) {
  return <Input {...props} type="time" />;
}
