import type { ReactNode } from "react";

export function ValuePill({
  children,
  tone,
}: {
  children: ReactNode;
  tone?: "green";
}) {
  return (
    <span
      className={`inline-flex rounded-chip px-1.5 py-0.5 font-mono text-[11px] ${tone === "green" ? "bg-green-tint text-green" : "bg-field text-ink-2"}`}
    >
      {children}
    </span>
  );
}
