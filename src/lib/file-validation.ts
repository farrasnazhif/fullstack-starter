export type FilePolicy = { accept?: string; maxSize?: number; maxFiles?: number };

export function validateFiles(files: File[], { accept = "", maxSize = Infinity, maxFiles = Infinity }: FilePolicy = {}) {
  const accepted: File[] = [];
  const errors: string[] = [];
  const types = accept.split(",").map((type) => type.trim().toLowerCase()).filter(Boolean);
  for (const file of files) {
    const validType = !types.length || types.some((type) => type.startsWith(".")
      ? file.name.toLowerCase().endsWith(type)
      : type.endsWith("/*") ? file.type.toLowerCase().startsWith(type.slice(0, -1)) : file.type.toLowerCase() === type);
    if (!validType) errors.push(`${file.name}: unsupported file type.`);
    else if (file.size > maxSize) errors.push(`${file.name}: exceeds the ${formatFileSize(maxSize)} limit.`);
    else if (accepted.length >= maxFiles) errors.push(`${file.name}: file limit reached.`);
    else accepted.push(file);
  }
  return { accepted, errors };
}

export function formatFileSize(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
