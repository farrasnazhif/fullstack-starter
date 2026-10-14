export function getMonthDays(month: string) {
  const [year, index] = month.split("-").map(Number);
  const first = new Date(Date.UTC(year, index - 1, 1));
  const count = new Date(Date.UTC(year, index, 0)).getUTCDate();
  return { offset: first.getUTCDay(), days: Array.from({ length: count }, (_, day) => `${month}-${String(day + 1).padStart(2, "0")}`) };
}

export function shiftMonth(month: string, delta: number) {
  const [year, index] = month.split("-").map(Number);
  return new Date(Date.UTC(year, index - 1 + delta, 1)).toISOString().slice(0, 7);
}

export function shiftDay(date: string, delta: number) {
  const day = new Date(`${date}T00:00:00Z`);
  day.setUTCDate(day.getUTCDate() + delta);
  return day.toISOString().slice(0, 10);
}
