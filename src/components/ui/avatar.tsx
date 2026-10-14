"use client";

import { Avatar as BaseAvatar } from "@base-ui/react/avatar";

export function Avatar({ name, src, size = "md" }: { name: string; src?: string; size?: "sm" | "md" | "lg" }) {
  return <BaseAvatar.Root className={`ui-avatar ui-avatar-${size}`}>
    {src && <BaseAvatar.Image src={src} alt={name} className="size-full object-cover" />}
    <BaseAvatar.Fallback aria-label={name} className="flex size-full items-center justify-center">{name.trim().split(/\s+/).slice(0, 2).map((word) => word[0]).join("").toUpperCase() || "?"}</BaseAvatar.Fallback>
  </BaseAvatar.Root>;
}
