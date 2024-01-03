// Source : https://leetcode.com/problems/convert-an-array-into-a-2d-array-with-conditions/
// Author : francisco
// Date   : 2024-01-03

import { findMatrix } from "./ConvertAnArrayIntoA2dArrayWithConditions";

describe("convert an array into a 2D array with conditions", () => {
  test("example 1", () => {
    const result: number[][] = findMatrix([1, 3, 4, 1, 2, 3, 1]);

    expect(result).toStrictEqual([[1, 3, 4, 2], [1, 3], [1]]);
  });

  test("example 2", () => {
    const result: number[][] = findMatrix([1, 2, 3, 4]);

    expect(result).toStrictEqual([[1, 2, 3, 4]]);
  });

  test("example 3", () => {
    const result: number[][] = findMatrix([2, 1, 1]);

    expect(result).toStrictEqual([[2, 1], [1]]);
  });
});
