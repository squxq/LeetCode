// Source : https://leetcode.com/problems/difference-between-ones-and-zeros-in-row-and-column/
// Author : francisco
// Date   : 2023-12-19

import { onesMinusZeros } from "./DifferenceBetweenOnesAndZerosInRowAndColumn";

describe("difference between ones and zeros in row and column", () => {
  test("example 1", () => {
    const result: number[][] = onesMinusZeros([
      [0, 1, 1],
      [1, 0, 1],
      [0, 0, 1],
    ]);

    expect(result).toStrictEqual([
      [0, 0, 4],
      [0, 0, 4],
      [-2, -2, 2],
    ]);
  });

  test("example 2", () => {
    const result: number[][] = onesMinusZeros([
      [1, 1, 1],
      [1, 1, 1],
    ]);

    expect(result).toStrictEqual([
      [5, 5, 5],
      [5, 5, 5],
    ]);
  });
});
