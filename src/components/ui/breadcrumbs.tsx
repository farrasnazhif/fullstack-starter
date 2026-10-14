import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return <nav aria-label="Breadcrumb"><ol className="flex flex-wrap items-center gap-2 text-xs text-muted">
    {items.map((item, index) => <li key={index} className="flex items-center gap-2">
      {index > 0 && <ChevronRight size={12} aria-hidden />}
      {index === items.length - 1 ? <span aria-current="page" className="text-ink">{item.label}</span> : item.href ? <Link className="hover:text-accent" href={item.href}>{item.label}</Link> : <span>{item.label}</span>}
    </li>)}
  </ol></nav>;
}
