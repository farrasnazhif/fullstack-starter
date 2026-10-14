import type { ReactNode } from "react";

export function Badge({ status, children, tone, className = "" }: {
  status?: string;
  children?: ReactNode;
  tone?: "neutral" | "primary" | "success" | "warning" | "danger";
  className?: string;
}) {
  const variant = tone ?? (status === "active" ? "primary" : status === "completed" ? "success" : "neutral");
  return <span className={`badge badge-${variant} ${className}`}>{children ?? status}</span>;
}
