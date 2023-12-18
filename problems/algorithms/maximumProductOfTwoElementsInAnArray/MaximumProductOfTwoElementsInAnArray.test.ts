// Source : https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/
// Author : francisco
// Date   : 2023-12-18

import { maxProduct } from "./MaximumProductOfTwoElementsInAnArray";

describe("maximum product of two elements in an array", () => {
  test("example 1", () => {
    const result: number = maxProduct([3, 4, 5, 2]);

    expect(result).toBe(12);
  });

  test("example 2", () => {
    const result: number = maxProduct([1, 5, 4, 5]);

    expect(result).toBe(16);
  });

  test("example 3", () => {
    const result: number = maxProduct([3, 7]);

    expect(result).toBe(12);
  });
});
