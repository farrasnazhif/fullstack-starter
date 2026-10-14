"use client";

import { Collapsible as BaseCollapsible } from "@base-ui/react/collapsible";
import { ChevronDown } from "lucide-react";
import type { ReactNode, ComponentProps } from "react";
import { Button } from "./button";

export function Collapsible({ label, children, ...props }: ComponentProps<typeof BaseCollapsible.Root> & { label: string; children: ReactNode }) {
  return <BaseCollapsible.Root {...props}>
    <BaseCollapsible.Trigger render={<Button variant="quiet" />}><ChevronDown size={14} className="ui-disclosure-icon" />{label}</BaseCollapsible.Trigger>
    <BaseCollapsible.Panel className="ui-disclosure-panel"><div className="pt-3">{children}</div></BaseCollapsible.Panel>
  </BaseCollapsible.Root>;
}
