import type { ReactNode } from "react";

export function Timeline({ items }: { items: { id: string; title: string; description?: ReactNode; time: string; dateTime: string }[] }) {
  return <ol className="ui-timeline" aria-label="Activity timeline">{items.map((item) => <li key={item.id}>
    <span className="ui-timeline-dot" aria-hidden /><div><p className="text-xs font-medium">{item.title}</p>{item.description && <div className="mt-1 text-xs text-muted">{item.description}</div>}<time dateTime={item.dateTime} className="mt-2 block text-[11px] text-muted">{item.time}</time></div>
  </li>)}</ol>;
}
