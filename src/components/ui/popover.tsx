"use client";

import { Popover as BasePopover } from "@base-ui/react/popover";
import type { ReactElement, ReactNode } from "react";
import { X } from "lucide-react";
import { IconButton } from "./icon-button";

export function Popover({ trigger, title, children }: { trigger: ReactElement; title: string; children: ReactNode }) {
  return <BasePopover.Root><BasePopover.Trigger render={trigger} />
    <BasePopover.Portal><BasePopover.Positioner sideOffset={8} className="ui-positioner">
      <BasePopover.Popup className="ui-popup ui-popover">
        <div className="mb-4 flex items-center justify-between gap-3">
          <BasePopover.Title className="text-sm font-medium">{title}</BasePopover.Title>
          <BasePopover.Close render={<IconButton label="Close popover" size="xs" variant="quiet" />}><X size={14} /></BasePopover.Close>
        </div>{children}
      </BasePopover.Popup>
    </BasePopover.Positioner></BasePopover.Portal>
  </BasePopover.Root>;
}
