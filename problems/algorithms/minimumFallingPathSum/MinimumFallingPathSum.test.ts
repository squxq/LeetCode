// Source : https://leetcode.com/problems/minimum-falling-path-sum/
// Author : francisco
// Date   : 2024-01-19

import { minFallingPathSum } from "./MinimumFallingPathSum";

describe("Minimum Falling Path Sum", () => {
  test("example 1", () => {
    const result: number = minFallingPathSum([
      [2, 1, 3],
      [6, 5, 4],
      [7, 8, 9],
    ]);

    expect(result).toBe(13);
  });

  test("example 2", () => {
    const result: number = minFallingPathSum([
      [-19, 57],
      [-40, -5],
    ]);

    expect(result).toBe(-59);
  });

  test("example 3", () => {
    const result: number = minFallingPathSum([
      [100, -42, -46, -41],
      [31, 97, 10, -10],
      [-58, -51, 82, 89],
      [51, 81, 69, -51],
    ]);

    expect(result).toBe(-36);
  });

  test("additional testcase 4", () => {
    const result: number = minFallingPathSum([[0]]);

    expect(result).toBe(0);
  });

  test("additional testcase 5", () => {
    const result: number = minFallingPathSum([[-35]]);

    expect(result).toBe(-35);
  });

  test("additional testcase 6", () => {
    const result: number = minFallingPathSum([
      [1, 0],
      [0, 0],
    ]);

    expect(result).toBe(0);
  });

  test("additional testcase 7", () => {
    const result: number = minFallingPathSum([
      [10, -42, -93, -45],
      [-39, 50, -16, -48],
      [-5, -22, -98, -95],
      [-61, 73, -83, 25],
    ]);

    expect(result).toBe(-322);
  });

  test("additional testcase 8", () => {
    const result: number = minFallingPathSum([
      [0, 0, 0, 1, 1, 0, 1, 1, 0, 1],
      [1, 0, 1, 1, 1, 1, 0, 1, 1, 1],
      [0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
      [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
      [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
      [0, 1, 1, 0, 1, 1, 1, 0, 0, 1],
      [0, 0, 0, 0, 0, 1, 0, 1, 1, 0],
      [0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
      [0, 1, 1, 0, 1, 1, 0, 0, 1, 1],
      [0, 1, 1, 1, 1, 0, 0, 1, 0, 1],
    ]);

    expect(result).toBe(0);
  });
});
