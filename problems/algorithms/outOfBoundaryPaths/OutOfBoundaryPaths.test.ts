// Source : https://leetcode.com/problems/out-of-boundary-paths/
// Author : francisco
// Date   : 2024-01-26

import { findPaths } from "./OutOfBoundaryPaths";

describe("Out of Boundary Paths", () => {
  test("example 1", () => {
    const result: number = findPaths(2, 2, 2, 0, 0);

    expect(result).toBe(6);
  });

  test("example 2", () => {
    const result: number = findPaths(1, 3, 3, 0, 1);

    expect(result).toBe(12);
  });
});
