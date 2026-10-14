"use client";

import { Combobox } from "@base-ui/react/combobox";
import { Search } from "lucide-react";
import { Dialog } from "./dialog";

export function CommandPalette({ open, onOpenChange, commands }: { open: boolean; onOpenChange: (open: boolean) => void; commands: { id: string; label: string; onSelect: () => void }[] }) {
  return <Dialog title="Commands" description="Search for an action. Use arrow keys and Enter to choose." open={open} onOpenChange={onOpenChange}>
    <Combobox.Root<(typeof commands)[number]> items={commands} inline open autoHighlight itemToStringLabel={(item) => item.label} onValueChange={(command) => { if (command) { command.onSelect(); onOpenChange(false); } }}>
      <div className="relative"><Search size={15} aria-hidden className="absolute left-3 top-3 text-muted" /><Combobox.Input aria-label="Search commands" placeholder="Search commands…" className="input pl-9" /></div>
      <Combobox.Empty className="p-4 text-xs text-muted">No commands found.</Combobox.Empty>
      <Combobox.List className="mt-3 max-h-72 overflow-auto">{(command: typeof commands[number]) => <Combobox.Item key={command.id} value={command} className="ui-option">{command.label}</Combobox.Item>}</Combobox.List>
    </Combobox.Root>
  </Dialog>;
}
