// Source : https://leetcode.com/problems/transpose-matrix/
// Author : francisco
// Date   : 2023-12-10

import { transpose } from "./TransposeMatrix";

describe("transpose matrix", () => {
  test("square matrix", () => {
    const result: number[][] = transpose([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]);

    expect(result).toStrictEqual([
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
    ]);
  });

  test("vertical matrix", () => {
    const result: number[][] = transpose([
      [1, 2, 3],
      [4, 5, 6],
    ]);

    expect(result).toStrictEqual([
      [1, 4],
      [2, 5],
      [3, 6],
    ]);
  });
});
