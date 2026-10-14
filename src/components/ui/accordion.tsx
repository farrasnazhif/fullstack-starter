"use client";

import { Accordion as BaseAccordion } from "@base-ui/react/accordion";
import { ChevronDown } from "lucide-react";
import type { ReactNode, ComponentProps } from "react";

export function Accordion({ items, className = "", ...props }: Omit<ComponentProps<typeof BaseAccordion.Root>, "className"> & { items: { id: string; title: string; content: ReactNode; disabled?: boolean }[]; className?: string }) {
  return <BaseAccordion.Root className={`ui-accordion ${className}`} {...props}>
    {items.map((item) => <BaseAccordion.Item key={item.id} value={item.id} disabled={item.disabled} className="ui-accordion-item">
      <BaseAccordion.Header><BaseAccordion.Trigger className="ui-accordion-trigger">{item.title}<ChevronDown size={14} className="ui-disclosure-icon" /></BaseAccordion.Trigger></BaseAccordion.Header>
      <BaseAccordion.Panel className="ui-disclosure-panel"><div className="px-4 pb-4 text-xs leading-relaxed text-muted">{item.content}</div></BaseAccordion.Panel>
    </BaseAccordion.Item>)}
  </BaseAccordion.Root>;
}
