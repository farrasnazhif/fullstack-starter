"use client";

import { AlertDialog as BaseAlertDialog } from "@base-ui/react/alert-dialog";
import type { ReactNode } from "react";
import { Button } from "./button";

export function AlertDialog({ open, onOpenChange, title, description, children, busy = false }: {
  open: boolean; onOpenChange: (open: boolean) => void; title: string; description: string; children: ReactNode; busy?: boolean;
}) {
  return <BaseAlertDialog.Root open={open} onOpenChange={(next) => { if (!busy) onOpenChange(next); }}>
    <BaseAlertDialog.Portal><BaseAlertDialog.Backdrop className="dialog-backdrop" />
      <BaseAlertDialog.Popup className="dialog-popup">
        <BaseAlertDialog.Title className="text-lg font-semibold">{title}</BaseAlertDialog.Title>
        <BaseAlertDialog.Description className="mt-2 text-sm text-muted">{description}</BaseAlertDialog.Description>
        <div className="mt-6 flex flex-wrap justify-end gap-2">
          <BaseAlertDialog.Close disabled={busy} render={<Button variant="secondary" />}>Cancel</BaseAlertDialog.Close>{children}
        </div>
      </BaseAlertDialog.Popup>
    </BaseAlertDialog.Portal>
  </BaseAlertDialog.Root>;
}
