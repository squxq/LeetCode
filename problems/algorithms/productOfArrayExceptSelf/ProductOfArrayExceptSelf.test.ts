// Source : https://leetcode.com/problems/product-of-array-except-self/
// Author : francisco
// Date   : 2024-01-07

import { productExceptSelf } from "./ProductOfArrayExceptSelf";

describe("product of array except self", () => {
  test("example 1", () => {
    const result: number[] = productExceptSelf([1, 2, 3, 4]);

    expect(result).toStrictEqual([24, 12, 8, 6]);
  });

  test("example 2", () => {
    const result: number[] = productExceptSelf([-1, 1, 0, -3, 3]);

    expect(result).toStrictEqual([-0, 0, 9, -0, 0]);
  });
});
