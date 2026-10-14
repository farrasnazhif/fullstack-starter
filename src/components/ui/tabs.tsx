"use client";

import { Tabs as BaseTabs } from "@base-ui/react/tabs";
import type { ComponentProps, ReactNode } from "react";

export function Tabs({ items, label, ...props }: ComponentProps<typeof BaseTabs.Root> & { label: string; items: { value: string; label: string; content: ReactNode; disabled?: boolean }[] }) {
  return <BaseTabs.Root {...props}>
    <BaseTabs.List className="tabs-list" aria-label={label}>{items.map((item) => <BaseTabs.Tab key={item.value} value={item.value} disabled={item.disabled} className="tab">{item.label}</BaseTabs.Tab>)}</BaseTabs.List>
    {items.map((item) => <BaseTabs.Panel key={item.value} value={item.value} className="pt-5 text-sm text-muted">{item.content}</BaseTabs.Panel>)}
  </BaseTabs.Root>;
}
