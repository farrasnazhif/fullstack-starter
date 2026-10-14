"use client";

import { useEffect, useRef } from "react";
import { ImageIcon } from "lucide-react";

export function ImagePreview({ file, alt = file?.name ?? "Image preview" }: { file?: File; alt?: string }) {
  const image = useRef<HTMLImageElement>(null);
  const supported = !!file && /^image\/(png|jpeg|webp|gif|avif)$/.test(file.type);
  useEffect(() => {
    if (!file || !supported || !image.current) return;
    const url = URL.createObjectURL(file);
    image.current.src = url;
    return () => URL.revokeObjectURL(url);
  }, [file, supported]);
  return <figure className="ui-image-preview">{supported ?
    // Local file object URLs cannot use Next image optimization.
    // eslint-disable-next-line @next/next/no-img-element
    <img ref={image} alt={alt} className="max-h-64 w-full object-contain" /> :
    <div className="flex min-h-36 flex-col items-center justify-center gap-3 text-xs text-muted"><ImageIcon size={24} aria-hidden />Choose a PNG, JPEG, WebP, GIF, or AVIF image.</div>}
    {file && <figcaption className="truncate border-t border-line p-3 text-xs text-muted">{file.name}</figcaption>}
  </figure>;
}
