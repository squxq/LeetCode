// Source : https://leetcode.com/problems/path-with-minimum-effort/
// Author : squxq
// Date   : 2023-09-17

import { minimumEffortPath } from "./PathWithMinimumEffort"; // Replace with your actual file name

describe("minimumEffortPath", () => {
  it("should return 0 for a 1x1 grid", () => {
    const heights = [[1]];
    expect(minimumEffortPath(heights)).toBe(0);
  });

  it("should return the correct result for a 2x2 grid", () => {
    const heights = [
      [1, 2],
      [3, 4],
    ];
    expect(minimumEffortPath(heights)).toBe(1);
  });

  it("should return the correct result for a 3x3 grid", () => {
    const heights = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    expect(minimumEffortPath(heights)).toBe(6);
  });

  it("should handle a grid with the same height values", () => {
    const heights = [
      [1, 1],
      [1, 1],
    ];
    expect(minimumEffortPath(heights)).toBe(0);
  });

  it("should return the correct result for a 3x3 grid with varying heights", () => {
    const heights = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    expect(minimumEffortPath(heights)).toBe(6);
  });

  it("should return the correct result for a 3x3 grid with increasing heights", () => {
    const heights = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    expect(minimumEffortPath(heights)).toBe(6);
  });

  it("should return the correct result for a 3x3 grid with decreasing heights", () => {
    const heights = [
      [9, 8, 7],
      [6, 5, 4],
      [3, 2, 1],
    ];
    expect(minimumEffortPath(heights)).toBe(6);
  });

  it("should handle a large grid (100x100)", () => {
    const heights = Array.from({ length: 100 }, () =>
      Array.from({ length: 100 }, () => Math.floor(Math.random() * 1000000)),
    );
    expect(minimumEffortPath(heights)).toBeDefined();
  });
});
