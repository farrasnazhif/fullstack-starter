"use client";

import type { ComponentProps } from "react";
import { Input } from "./input";

export function OtpInput({ length = 6, className = "", ...props }: Omit<ComponentProps<typeof Input>, "type"> & { length?: number }) {
  return <Input inputMode="numeric" autoComplete="one-time-code" pattern={`[0-9]{${length}}`} maxLength={length} className={`ui-otp ${className}`} {...props} type="text" />;
}
