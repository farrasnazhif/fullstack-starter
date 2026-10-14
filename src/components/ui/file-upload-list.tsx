"use client";

import { FileText, X } from "lucide-react";
import { formatFileSize } from "@/lib/file-validation";
import { IconButton } from "./icon-button";
import { ProgressBar } from "./progress-bar";

export type UploadFile = { id: string; name: string; size: number; progress?: number; error?: string };

export function FileUploadList({ files, onRemove, disabled }: { files: UploadFile[]; onRemove: (id: string) => void; disabled?: boolean }) {
  return <ul className="ui-list" aria-label="Selected files">{files.map((file) => <li key={file.id} className="ui-file-row">
    <FileText size={18} aria-hidden className="shrink-0 text-muted" />
    <div className="min-w-0 flex-1"><p className="truncate text-xs font-medium">{file.name}</p><p className="mt-1 text-[11px] text-muted">{formatFileSize(file.size)}</p>
      {file.progress !== undefined && <div className="mt-2"><ProgressBar label={`Uploading ${file.name}`} value={file.progress} /></div>}
      {file.error && <p role="alert" className="mt-1 text-xs text-red">{file.error}</p>}
    </div>
    <IconButton label={`Remove ${file.name}`} disabled={disabled} variant="quiet" size="sm" onClick={() => onRemove(file.id)}><X size={14} /></IconButton>
  </li>)}</ul>;
}
