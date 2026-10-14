"use client";

import { ChevronDown } from "lucide-react";
import type { ComponentProps } from "react";
import { Button } from "./button";
import { ButtonGroup } from "./button-group";
import { DropdownMenu, type MenuAction } from "./dropdown-menu";

export function SplitButton({ items, children, disabled, loading, ...props }: ComponentProps<typeof Button> & { items: MenuAction[] }) {
  return <ButtonGroup label="Action options">
    <Button disabled={disabled} loading={loading} {...props}>{children}</Button>
    <DropdownMenu trigger={<Button disabled={disabled || loading} variant={props.variant} size={props.size} aria-label="More action options" className="!px-2"><ChevronDown size={14} /></Button>} items={items} />
  </ButtonGroup>;
}
