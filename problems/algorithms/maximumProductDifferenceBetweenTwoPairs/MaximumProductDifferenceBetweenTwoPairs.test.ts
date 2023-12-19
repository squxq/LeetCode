// Source : https://leetcode.com/problems/maximum-product-difference-between-two-pairs/
// Author : francisco
// Date   : 2023-12-19

import { maxProductDifference } from "./MaximumProductDifferenceBetweenTwoPairs";

describe("maximum product difference between two pairs", () => {
  test("example 1", () => {
    const result: number = maxProductDifference([5, 6, 2, 7, 4]);

    expect(result).toBe(34);
  });

  test("example 2", () => {
    const result: number = maxProductDifference([4, 2, 5, 9, 7, 4, 8]);

    expect(result).toBe(64);
  });
});
