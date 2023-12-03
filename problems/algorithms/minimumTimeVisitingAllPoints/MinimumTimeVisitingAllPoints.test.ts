// Source : https://leetcode.com/problems/minimum-time-visiting-all-points/
// Author : Francisco Tomas
// Date   : 2023-12-03

import { minTimeToVisitAllPoints } from "./MinimumTimeVisitingAllPoints";

describe("minimum time visiting all points", () => {
  test("example 1", () => {
    const result: number = minTimeToVisitAllPoints([
      [1, 1],
      [3, 4],
      [-1, 0],
    ]);
    expect(result).toBe(7);
  });

  test("example 2", () => {
    const result: number = minTimeToVisitAllPoints([
      [3, 2],
      [-2, 2],
    ]);
    expect(result).toBe(5);
  });
});
