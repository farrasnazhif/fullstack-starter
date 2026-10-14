export function getTableRows<T>(rows: T[], columns: { id: string; value: (row: T) => string | number }[], query: string, sort: { id: string; direction: "asc" | "desc" } | null) {
  const search = query.trim().toLowerCase();
  const filtered = rows.filter((row) => !search || columns.some((column) => String(column.value(row)).toLowerCase().includes(search)));
  const column = columns.find((entry) => entry.id === sort?.id);
  if (column && sort) filtered.sort((a, b) => {
    const first = column.value(a), second = column.value(b);
    const result = typeof first === "number" && typeof second === "number" ? first - second : String(first).localeCompare(String(second));
    return sort.direction === "asc" ? result : -result;
  });
  return filtered;
}
