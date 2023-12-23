// Source : https://leetcode.com/problems/path-crossing/
// Author : francisco
// Date   : 2023-12-23

import { isPathCrossing } from "./PathCrossing";

describe("path crossing", () => {
  test("example 1", () => {
    const result: boolean = isPathCrossing("NES");

    expect(result).toBe(false);
  });

  test("example 2", () => {
    const result: boolean = isPathCrossing("NESWW");

    expect(result).toBe(true);
  });

  test("example 3", () => {
    const result: boolean = isPathCrossing("NENESSWN");

    expect(result).toBe(true);
  });
});
