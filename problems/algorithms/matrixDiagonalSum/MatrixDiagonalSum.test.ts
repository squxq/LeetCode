// Source : https://leetcode.com/problems/matrix-diagonal-sum/
// Author : squxq
// Date   : 2023-10-24

import { diagonalSum } from "./MatrixDiagonalSum";

describe("diagonalSum", () => {
  it("should return the sum of the primary diagonal for a 1x1 matrix", () => {
    const mat = [[5]];
    expect(diagonalSum(mat)).toBe(5);
  });

  it("should return the sum of the primary diagonal for a 3x3 matrix", () => {
    const mat = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    expect(diagonalSum(mat)).toBe(15);
  });

  it("should return the sum of the primary diagonal for a 4x4 matrix", () => {
    const mat = [
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
    ];
    expect(diagonalSum(mat)).toBe(4);
  });

  it("should return the sum of the primary diagonal for a 100x100 matrix filled with 1s", () => {
    const mat = Array.from({ length: 100 }, () => Array(100).fill(1));
    expect(diagonalSum(mat)).toBe(100);
  });

  it("should return the sum of the primary and secondary diagonals for a 3x3 matrix", () => {
    const mat = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    expect(diagonalSum(mat)).toBe(25);
  });

  it("should return the sum of the primary and secondary diagonals for a 5x5 matrix", () => {
    const mat = [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25],
    ];
    expect(diagonalSum(mat)).toBe(101);
  });

  it("should handle maximum input size (100x100) efficiently", () => {
    const mat = Array.from({ length: 100 }, (_, i) => Array(100).fill(i + 1));
    expect(diagonalSum(mat)).toBe(5050);
  });

  it("should return 0 for an empty 0x0 matrix", () => {
    const mat: number[][] = [];
    expect(diagonalSum(mat)).toBe(0);
  });

  it("should handle negative numbers and secondary diagonal", () => {
    const mat = [
      [-1, 2, 3, 4],
      [5, -6, 7, 8],
      [9, 10, -11, 12],
      [13, 14, 15, -16],
    ];
    expect(diagonalSum(mat)).toBe(-11);
  });
});
