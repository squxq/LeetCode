// Source : https://leetcode.com/problems/special-positions-in-a-binary-matrix/
// Author : francisco
// Date   : 2023-12-19

import { numSpecial } from "./SpecialPositionsInABinaryMatrix";

describe("special positions in a binary matrix", () => {
  test("example 1", () => {
    const result: number = numSpecial([
      [1, 0, 0],
      [0, 0, 1],
      [1, 0, 0],
    ]);

    expect(result).toBe(1);
  });

  test("example 2", () => {
    const result: number = numSpecial([
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1],
    ]);

    expect(result).toBe(3);
  });

  test("example 3", () => {
    const result: number = numSpecial([
      [0, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 1, 0, 0, 1],
      [0, 0, 0, 0, 1, 0, 0, 0],
      [1, 0, 0, 0, 1, 0, 0, 0],
      [0, 0, 1, 1, 0, 0, 0, 0],
    ]);

    expect(result).toBe(1);
  });

  test("example 4", () => {
    const result: number = numSpecial([
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 1, 0],
      [0, 1, 0, 0, 0, 0, 1, 0],
      [0, 1, 0, 0, 0, 0, 0, 0],
    ]);

    expect(result).toBe(1);
  });
});
