"use client";

import { Dialog as BaseDialog } from "@base-ui/react/dialog";
import type { ReactNode, ReactElement } from "react";
import { X } from "lucide-react";
import { IconButton } from "./icon-button";

export function Drawer({ title, description, children, trigger, open, onOpenChange }: {
  title: string; description: string; children: ReactNode; trigger?: ReactElement; open?: boolean; onOpenChange?: (open: boolean) => void;
}) {
  return <BaseDialog.Root open={open} onOpenChange={onOpenChange}>
    {trigger && <BaseDialog.Trigger render={trigger} />}
    <BaseDialog.Portal><BaseDialog.Backdrop className="dialog-backdrop" />
      <BaseDialog.Popup className="ui-drawer">
        <BaseDialog.Title className="text-lg font-semibold pr-8">{title}</BaseDialog.Title>
        <BaseDialog.Description className="mt-2 text-sm text-muted">{description}</BaseDialog.Description>
        <BaseDialog.Close render={<IconButton label="Close drawer" variant="quiet" className="absolute right-4 top-4" />}><X size={16} /></BaseDialog.Close>
        <div className="mt-6">{children}</div>
      </BaseDialog.Popup>
    </BaseDialog.Portal>
  </BaseDialog.Root>;
}
