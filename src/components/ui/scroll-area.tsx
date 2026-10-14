"use client";

import { ScrollArea as BaseScrollArea } from "@base-ui/react/scroll-area";
import type { ReactNode } from "react";

export function ScrollArea({ children, label, className = "h-56" }: { children: ReactNode; label: string; className?: string }) {
  return <BaseScrollArea.Root className={`ui-scroll-area ${className}`}>
    <BaseScrollArea.Viewport tabIndex={0} aria-label={label} className="size-full rounded-[inherit]"><BaseScrollArea.Content>{children}</BaseScrollArea.Content></BaseScrollArea.Viewport>
    <BaseScrollArea.Scrollbar className="ui-scrollbar"><BaseScrollArea.Thumb className="ui-scroll-thumb" /></BaseScrollArea.Scrollbar>
    <BaseScrollArea.Scrollbar orientation="horizontal" className="ui-scrollbar"><BaseScrollArea.Thumb className="ui-scroll-thumb" /></BaseScrollArea.Scrollbar>
    <BaseScrollArea.Corner />
  </BaseScrollArea.Root>;
}
