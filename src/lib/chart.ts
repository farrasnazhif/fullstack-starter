export type ChartPoint = { time: number; value: number };
export type ChartSeries = { id: string; data: ChartPoint[]; color: string };

// A shared range keeps comparisons honest and also handles a constant series.
export function chartLines(series: ChartSeries[]) {
  const values = series.flatMap((line) =>
    line.data.map((point) => point.value),
  );
  const min = Math.min(...values);
  const max = Math.max(...values);
  return series.map((line) => ({
    id: line.id,
    color: line.color,
    points: line.data
      .map((point, index) => {
        const x =
          line.data.length === 1 ? 150 : (index / (line.data.length - 1)) * 300;
        const y =
          max === min ? 83 : 144 - ((point.value - min) / (max - min)) * 104;
        return `${x},${y}`;
      })
      .join(" "),
  }));
}
