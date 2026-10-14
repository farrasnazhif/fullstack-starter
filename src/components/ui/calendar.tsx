"use client";

import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getMonthDays, shiftDay, shiftMonth } from "@/lib/calendar";
import { Button } from "./button";

export function Calendar({ value, onValueChange, initialMonth, min, max, disabled = false }: {
  value?: string; onValueChange: (date: string) => void; initialMonth?: string; min?: string; max?: string; disabled?: boolean;
}) {
  const [month, setMonth] = useState(() => value?.slice(0, 7) || initialMonth || new Date().toISOString().slice(0, 7));
  const root = useRef<HTMLDivElement>(null);
  const pendingFocus = useRef<string | null>(null);
  const { offset, days } = getMonthDays(month);
  useEffect(() => {
    if (pendingFocus.current) root.current?.querySelector<HTMLButtonElement>(`[data-date="${pendingFocus.current}"]`)?.focus();
    pendingFocus.current = null;
  }, [month]);
  function move(date: string, delta: number) {
    const next = shiftDay(date, delta);
    if ((min && next < min) || (max && next > max)) return;
    if (next.slice(0, 7) !== month) { pendingFocus.current = next; setMonth(next.slice(0, 7)); }
    else root.current?.querySelector<HTMLButtonElement>(`[data-date="${next}"]`)?.focus();
  }
  const previous = shiftMonth(month, -1), next = shiftMonth(month, 1);
  return <div ref={root} className="ui-calendar" role="group" aria-label="Choose a date">
    <div className="mb-4 flex items-center justify-between">
      <Button size="sm" variant="quiet" aria-label="Previous month" disabled={disabled || !!(min && previous < min.slice(0, 7))} onClick={() => setMonth(previous)}><ChevronLeft size={14} /></Button>
      <p aria-live="polite" className="text-sm font-medium">{new Date(`${month}-01T00:00:00Z`).toLocaleDateString("en-US", { month: "long", year: "numeric", timeZone: "UTC" })}</p>
      <Button size="sm" variant="quiet" aria-label="Next month" disabled={disabled || !!(max && next > max.slice(0, 7))} onClick={() => setMonth(next)}><ChevronRight size={14} /></Button>
    </div>
    <div className="ui-calendar-grid">
      {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => <span key={day} aria-hidden className="py-2 text-center text-[11px] text-muted">{day}</span>)}
      {Array.from({ length: offset }, (_, index) => <span key={`blank-${index}`} />)}
      {days.map((date) => <Button key={date} data-date={date} size="sm" className="!px-0" variant={date === value ? "primary" : "quiet"}
        aria-label={new Date(`${date}T00:00:00Z`).toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric", timeZone: "UTC" })}
        aria-pressed={date === value} disabled={disabled || !!(min && date < min) || !!(max && date > max)} onClick={() => onValueChange(date)}
        onKeyDown={(event) => {
          const delta = { ArrowLeft: -1, ArrowRight: 1, ArrowUp: -7, ArrowDown: 7 }[event.key];
          if (delta !== undefined) { event.preventDefault(); move(date, delta); }
        }}>{Number(date.slice(-2))}</Button>)}
    </div>
  </div>;
}
