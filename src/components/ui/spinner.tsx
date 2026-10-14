import { LoaderCircle } from "lucide-react";

export function Spinner({ label = "Loading", size = 18 }: { label?: string; size?: number }) {
  return <span role="status" className="inline-flex items-center gap-2 text-xs text-muted">
    <LoaderCircle size={size} aria-hidden className="animate-spin motion-reduce:animate-none text-accent" /><span>{label}</span>
  </span>;
}
