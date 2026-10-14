"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
import {
  LayoutDashboard,
  Folder,
  FlaskConical,
  LogOut,
  ArrowUpRight,
} from "lucide-react";
import { useAuth } from "@/providers/auth-provider";
import { logout } from "@/features/auth/api/auth";
import { Button } from "@/components/ui/button";
import { Notice } from "@/components/ui/notice";

export function AppShell({ children }: { children: ReactNode }) {
  const user = useAuth();
  const pathname = usePathname();
  const queryClient = useQueryClient();
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(false);
  return (
    <div className="app-layout">
      <aside className="sidebar">
        <div className="workspace-label">
          <span className="size-2 rounded-full bg-accent" />
          Personal workspace
        </div>
        <nav aria-label="Main navigation" className="nav-links">
          {[
            { href: "/dashboard", label: "Overview", Icon: LayoutDashboard },
            { href: "/projects", label: "Projects", Icon: Folder },
            { href: "/sandbox", label: "UI sandbox", Icon: FlaskConical },
          ].map(({ href, label, Icon }) => (
            <Link
              key={href}
              href={href}
              className={`nav-link ${pathname.startsWith(href) ? "nav-active" : ""}`}
              aria-current={pathname.startsWith(href) ? "page" : undefined}
            >
              <Icon size={18} />
              {label}
              {href === "/sandbox" && (
                <ArrowUpRight size={14} className="ml-auto" />
              )}
            </Link>
          ))}
        </nav>
        <div className="sidebar-note">
          <p className="eyebrow">Built to be replaced</p>
          <p className="text-xs text-muted leading-relaxed mt-2">
            The foundation is ready. Make the next great thing yours.
          </p>
        </div>
        <div className="sidebar-account">
          <div className="flex items-center gap-3 min-w-0">
            <span className="avatar">
              {user?.email?.[0]?.toUpperCase() ?? "U"}
            </span>
            <div className="min-w-0">
              <p className="text-sm font-medium truncate">{user?.email}</p>
              <p className="text-xs text-muted mt-0.5">Private workspace</p>
            </div>
          </div>
          <Button
            className="mt-4 w-full"
            variant="ghost"
            loading={busy}
            onClick={async () => {
              setBusy(true);
              setError(false);
              try {
                await logout();
                queryClient.clear();
                router.replace("/login");
                router.refresh();
              } catch {
                setError(true);
                setBusy(false);
              }
            }}
          >
            <LogOut size={15} />
            {busy ? "Signing out…" : "Sign out"}
          </Button>
          {error && <Notice>Sign out failed. Please try again.</Notice>}
        </div>
      </aside>
      <main id="main-content" className="app-main">
        <div className="app-content">{children}</div>
      </main>
    </div>
  );
}
