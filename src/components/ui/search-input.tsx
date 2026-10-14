"use client";

import { Search, X } from "lucide-react";
import type { ComponentProps } from "react";
import { Input } from "./input";
import { IconButton } from "./icon-button";

export function SearchInput({ label, onClear, className = "", ...props }: ComponentProps<typeof Input> & { label: string; onClear?: () => void }) {
  return <div className="relative"><Search size={15} aria-hidden className="absolute left-3 top-3 text-muted" />
    <Input type="search" aria-label={label} className={`pl-9 ${onClear ? "pr-10" : ""} ${className}`} {...props} />
    {onClear && props.value && <IconButton label="Clear search" variant="quiet" size="sm" className="absolute right-1 top-1" disabled={props.disabled} onClick={onClear}><X size={13} /></IconButton>}
  </div>;
}
