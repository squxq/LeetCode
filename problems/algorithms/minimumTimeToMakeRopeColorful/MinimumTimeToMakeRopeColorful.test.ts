// Source : https://leetcode.com/problems/minimum-time-to-make-rope-colorful/
// Author : francisco
// Date   : 2024-01-02

import { minCost } from "./MinimumTimeToMakeRopeColorful";

describe("minimum time to make rope colorful", () => {
  test("example 1", () => {
    const result: number = minCost("abaac", [1, 2, 3, 4, 5]);

    expect(result).toBe(3);
  });

  test("example 2", () => {
    const result: number = minCost("abc", [1, 2, 3]);

    expect(result).toBe(0);
  });

  test("example 3", () => {
    const result: number = minCost("aabaa", [1, 2, 3, 4, 1]);

    expect(result).toBe(2);
  });

  test("example 4", () => {
    const result: number = minCost("bbbaaa", [4, 9, 3, 8, 8, 9]);

    expect(result).toBe(23);
  });

  test("example 5", () => {
    const result: number = minCost(
      "aaabbbabbbb",
      [3, 5, 10, 7, 5, 3, 5, 5, 4, 8, 1],
    );

    expect(result).toBe(26);
  });
});
