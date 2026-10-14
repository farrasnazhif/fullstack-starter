import { chartLines, type ChartSeries } from "@/lib/chart";

// shortcut: SVG snapshot charts replace Liveline, use Liveline for live financial feeds.
export function SnapshotChart({
  series,
  grid = false,
}: {
  series: ChartSeries[];
  grid?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 300 166"
      preserveAspectRatio="none"
      className="h-full w-full"
      role="img"
      aria-label={`Trend snapshot: ${series.map((line) => line.id).join(", ")}`}
    >
      {grid &&
        [40, 83, 144].map((y) => (
          <line
            key={y}
            x1="0"
            x2="300"
            y1={y}
            y2={y}
            stroke="var(--line)"
            strokeDasharray="3 4"
          />
        ))}
      {chartLines(series).map((line) => (
        <polyline
          key={line.id}
          points={line.points}
          fill="none"
          stroke={line.color}
          strokeWidth="2.25"
          vectorEffect="non-scaling-stroke"
        />
      ))}
    </svg>
  );
}
