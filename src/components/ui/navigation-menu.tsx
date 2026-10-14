import Link from "next/link";

export function NavigationMenu({ items, label = "Main navigation" }: { label?: string; items: { label: string; href: string; active?: boolean }[] }) {
  return <nav aria-label={label}><ul className="ui-navigation-menu">{items.map((item) => <li key={item.href}>
    <Link href={item.href} className="ui-navigation-link" aria-current={item.active ? "page" : undefined}>{item.label}</Link>
  </li>)}</ul></nav>;
}
