"use client";

import { SearchInput } from "./search-input";
import { Select, type SelectOption } from "./select";
import { Button } from "./button";

export function FilterBar({ query, onQueryChange, value, onValueChange, options, label }: { query: string; onQueryChange: (value: string) => void; value: string; onValueChange: (value: string) => void; options: SelectOption[]; label: string }) {
  return <div className="flex flex-wrap items-center gap-2">
    <div className="min-w-36 flex-1"><SearchInput label="Search items" value={query} onChange={(event) => onQueryChange(event.target.value)} onClear={() => onQueryChange("")} /></div>
    <div className="w-40 max-w-full"><Select options={options} value={value} onValueChange={(next) => { if (next !== null) onValueChange(next); }} triggerProps={{ "aria-label": label }} /></div>
    <Button onClick={() => { onQueryChange(""); onValueChange(options[0]?.value ?? ""); }}>Reset</Button>
  </div>;
}
