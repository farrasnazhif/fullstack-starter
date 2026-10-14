import type { ReactNode } from "react";

export function DescriptionList({ items }: { items: { label: string; value: ReactNode }[] }) {
  return <dl className="ui-description-list">{items.map((item) => <div key={item.label}><dt>{item.label}</dt><dd>{item.value}</dd></div>)}</dl>;
}
