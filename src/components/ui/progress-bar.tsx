"use client";

import { Progress } from "@base-ui/react/progress";
import type { ComponentProps } from "react";

export function ProgressBar({ label, ...props }: ComponentProps<typeof Progress.Root> & { label: string }) {
  return <Progress.Root {...props}>
    <div className="mb-2 flex justify-between text-xs"><Progress.Label>{label}</Progress.Label><Progress.Value /></div>
    <Progress.Track className="ui-progress-track"><Progress.Indicator className="ui-progress-fill" /></Progress.Track>
  </Progress.Root>;
}
