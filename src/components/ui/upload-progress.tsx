"use client";

import { ProgressBar } from "./progress-bar";
import { Button } from "./button";

export function UploadProgress({ filename, value, onCancel, error }: { filename: string; value: number | null; onCancel?: () => void; error?: string }) {
  return <div className="ui-card space-y-3"><ProgressBar label={filename} value={value} />
    {error ? <p role="alert" className="text-xs text-red">{error}</p> : <p role="status" className="text-xs text-muted">{value === null ? "Preparing upload…" : value >= 100 ? "Upload complete" : "Uploading…"}</p>}
    {onCancel && (value === null || value < 100) && <Button size="sm" onClick={onCancel}>Cancel upload</Button>}
  </div>;
}
