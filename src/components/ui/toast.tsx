"use client";

import { Toast } from "@base-ui/react/toast";
import type { ReactNode } from "react";
import { CircleCheck, CircleX, Info, TriangleAlert, X } from "lucide-react";
import { IconButton } from "./icon-button";

export const useToast = Toast.useToastManager;

function ToastViewport() {
  const { toasts } = useToast();
  return <Toast.Portal><Toast.Viewport className="ui-toast-viewport">
    {toasts.map((toast) => {
      const Icon = toast.type === "success" ? CircleCheck
        : toast.type === "error" ? CircleX
        : toast.type === "warning" ? TriangleAlert
        : Info;
      return <Toast.Root key={toast.id} toast={toast} className="ui-toast">
        <span aria-hidden="true" className="ui-toast-icon"><Icon size={16} /></span>
        <Toast.Content className="min-w-0 flex-1"><Toast.Title className="text-sm font-medium" /><Toast.Description className="mt-1 text-xs text-muted" /></Toast.Content>
        <Toast.Close render={<IconButton label="Dismiss notification" variant="quiet" size="xs" />}><X size={14} /></Toast.Close>
      </Toast.Root>;
    })}
  </Toast.Viewport></Toast.Portal>;
}

export function ToastProvider({ children }: { children: ReactNode }) {
  return <Toast.Provider limit={3}>{children}<ToastViewport /></Toast.Provider>;
}
