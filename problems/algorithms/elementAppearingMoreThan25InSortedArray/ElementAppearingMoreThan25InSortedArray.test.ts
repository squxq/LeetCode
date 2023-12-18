// Source : https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/
// Author : francisco
// Date   : 2023-12-18

import { findSpecialIntegerV2 } from "./ElementAppearingMoreThan25InSortedArray";

describe("element appearing more than 25% in sorted array", () => {
  test("example 1", () => {
    const result: number = findSpecialIntegerV2([1, 2, 2, 6, 6, 6, 6, 7, 10]);

    expect(result).toBe(6);
  });

  test("example 2", () => {
    const result: number = findSpecialIntegerV2([1, 1]);

    expect(result).toBe(1);
  });

  test("example 3", () => {
    const result: number = findSpecialIntegerV2([1]);

    expect(result).toBe(1);
  });

  test("example 4", () => {
    const result: number = findSpecialIntegerV2([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 12, 12,
    ]);

    expect(result).toBe(12);
  });
});
