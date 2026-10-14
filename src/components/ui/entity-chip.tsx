import { Building2 } from "lucide-react";

export function EntityChip({ name }: { name: string }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-chip bg-field px-1.5 py-0.5 text-[12px] font-medium text-ink shadow-hairline">
      <Building2 size={12} aria-hidden />
      {name}
    </span>
  );
}
