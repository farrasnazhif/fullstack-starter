"use client";

import { Tooltip as BaseTooltip } from "@base-ui/react/tooltip";
import type { ReactElement, ReactNode } from "react";

export function Tooltip({ children, content }: { children: ReactElement; content: ReactNode }) {
  return <BaseTooltip.Provider><BaseTooltip.Root>
    <BaseTooltip.Trigger render={children} />
    <BaseTooltip.Portal><BaseTooltip.Positioner sideOffset={8} className="ui-positioner">
      <BaseTooltip.Popup className="ui-tooltip">{content}</BaseTooltip.Popup>
    </BaseTooltip.Positioner></BaseTooltip.Portal>
  </BaseTooltip.Root></BaseTooltip.Provider>;
}
