import assert from "node:assert/strict";
import test from "node:test";
import { chartLines } from "../src/lib/chart.ts";

test("charts share a value range across series and position endpoints", () => {
  const lines = chartLines([
    {
      id: "one",
      color: "blue",
      data: [
        { time: 0, value: -10 },
        { time: 1, value: 10 },
      ],
    },
    {
      id: "two",
      color: "red",
      data: [
        { time: 0, value: 0 },
        { time: 1, value: 0 },
      ],
    },
  ]);
  assert.equal(lines[0].points, "0,144 300,40");
  assert.equal(lines[1].points, "0,92 300,92");
});

test("empty, singleton, and constant charts never produce invalid coordinates", () => {
  assert.deepEqual(chartLines([]), []);
  assert.equal(
    chartLines([{ id: "empty", color: "blue", data: [] }])[0].points,
    "",
  );
  assert.equal(
    chartLines([
      { id: "single", color: "blue", data: [{ time: 0, value: 7 }] },
    ])[0].points,
    "150,83",
  );
  assert.equal(
    chartLines([
      {
        id: "flat",
        color: "blue",
        data: [
          { time: 0, value: 7 },
          { time: 1, value: 7 },
        ],
      },
    ])[0].points,
    "0,83 300,83",
  );
});
