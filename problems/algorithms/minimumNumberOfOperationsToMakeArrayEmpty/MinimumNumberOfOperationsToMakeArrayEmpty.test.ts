// Source : https://leetcode.com/problems/minimum-number-of-operations-to-make-array-empty/
// Author : francisco
// Date   : 2024-01-04

import { minOperations } from "./MinimumNumberOfOperationsToMakeArrayEmpty";

describe("minimum number of operations to make array empty", () => {
  test("example 1", () => {
    const result: number = minOperations([2, 3, 3, 2, 2, 4, 2, 3, 4]);

    expect(result).toBe(4);
  });

  test("example 2", () => {
    const result: number = minOperations([2, 1, 2, 2, 3, 3]);

    expect(result).toBe(-1);
  });
});
