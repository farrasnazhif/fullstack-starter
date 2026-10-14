"use client";

import { useId, useRef, useState } from "react";
import { Upload } from "lucide-react";
import { validateFiles, formatFileSize, type FilePolicy } from "@/lib/file-validation";
import { Button } from "./button";

export function Dropzone({ onFilesAccepted, accept, maxSize = 10 * 1024 * 1024, maxFiles = 5, disabled = false, label = "Drop files here" }: FilePolicy & {
  onFilesAccepted: (files: File[]) => void; disabled?: boolean; label?: string;
}) {
  const id = useId();
  const input = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  function receive(files: File[]) {
    if (disabled) return;
    const result = validateFiles(files, { accept, maxSize, maxFiles });
    setErrors(result.errors);
    if (result.accepted.length) onFilesAccepted(result.accepted);
  }
  return <div className="space-y-3">
    <div className="ui-dropzone" data-dragging={dragging || undefined} data-disabled={disabled || undefined}
      onDragOver={(event) => { event.preventDefault(); if (!disabled) setDragging(true); }}
      onDragLeave={(event) => { if (!(event.relatedTarget instanceof Node) || !event.currentTarget.contains(event.relatedTarget)) setDragging(false); }}
      onDrop={(event) => { event.preventDefault(); setDragging(false); receive(Array.from(event.dataTransfer.files)); }}>
      <Upload size={24} aria-hidden className="text-accent" />
      <p className="mt-3 text-sm font-medium">{label}</p>
      <p id={`${id}-hint`} className="mt-1 text-xs text-muted">{accept || "Any file type"} · Up to {maxFiles} files · {formatFileSize(maxSize)} each</p>
      <input ref={input} id={id} type="file" accept={accept} multiple={maxFiles > 1} disabled={disabled} className="sr-only" tabIndex={-1} aria-label="Choose files" aria-describedby={`${id}-hint ${id}-errors`}
        onChange={(event) => { receive(Array.from(event.target.files ?? [])); event.target.value = ""; }} />
      <Button type="button" className="mt-4" disabled={disabled} onClick={() => input.current?.click()}>Browse files</Button>
    </div>
    <div id={`${id}-errors`} role="alert" className="space-y-1 text-xs text-red">{errors.map((error, index) => <p key={index}>{error}</p>)}</div>
  </div>;
}
