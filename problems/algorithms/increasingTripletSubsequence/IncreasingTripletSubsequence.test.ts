// Source : https://leetcode.com/problems/increasing-triplet-subsequence/
// Author : francisco
// Date   : 2024-01-12

import { increasingTriplet } from "./IncreasingTripletSubsequence";

describe("increasing triplet subsequence", () => {
  test("example 1", () => {
    const result: boolean = increasingTriplet([1, 2, 3, 4, 5]);

    expect(result).toBe(true);
  });

  test("example 2", () => {
    const result: boolean = increasingTriplet([5, 4, 3, 2, 1]);

    expect(result).toBe(false);
  });

  test("example 3", () => {
    const result: boolean = increasingTriplet([2, 1, 5, 0, 4, 6]);

    expect(result).toBe(true);
  });

  test("failed submission - 64 / 83 testcases passed", () => {
    const result: boolean = increasingTriplet([1, 2, 1, 3]);

    expect(result).toBe(true);
  });

  test("failed submission - 67 / 83 testcases passed", () => {
    const result: boolean = increasingTriplet([20, 100, 10, 12, 5, 13]);

    expect(result).toBe(true);
  });

  test("failed submission - 76 / 83 testcases passed", () => {
    const result: boolean = increasingTriplet([6, 7, 1, 2]);

    expect(result).toBe(false);
  });

  test("failed submission - 76 / 83 testcases passed", () => {
    const result: boolean = increasingTriplet([5, 1, 6]);

    expect(result).toBe(false);
  });
});
