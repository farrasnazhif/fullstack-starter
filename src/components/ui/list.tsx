import type { ReactNode } from "react";

export function List({ items, label }: { items: { id: string; title: ReactNode; description?: string; leading?: ReactNode; trailing?: ReactNode }[]; label: string }) {
  return <ul className="ui-list" aria-label={label}>{items.map((item) => <li key={item.id} className="ui-list-row">
    {item.leading}<div className="min-w-0 flex-1"><div className="text-xs font-medium">{item.title}</div>{item.description && <p className="mt-1 text-xs text-muted">{item.description}</p>}</div>{item.trailing}
  </li>)}</ul>;
}
