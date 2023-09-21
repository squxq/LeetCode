// Source : https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/
// Author : squxq
// Date   : 2023-09-21

import { kWeakestRows } from "./TheKWeakestRowsInAMatrix"; // Replace with your actual code file path

describe("kWeakestRows", () => {
  it("should return the k weakest rows in the matrix ordered from weakest to strongest", () => {
    // Example 1
    expect(
      kWeakestRows(
        [
          [1, 1, 0, 0, 0],
          [1, 1, 1, 1, 0],
          [1, 0, 0, 0, 0],
          [1, 1, 0, 0, 0],
          [1, 1, 1, 1, 1],
        ],
        3,
      ),
    ).toEqual([2, 0, 3]);

    // Example 2
    expect(
      kWeakestRows(
        [
          [1, 0, 0, 0],
          [1, 1, 1, 1],
          [1, 0, 0, 0],
          [1, 0, 0, 0],
        ],
        2,
      ),
    ).toEqual([0, 2]);
  });

  it("should handle empty matrix", () => {
    expect(kWeakestRows([], 3)).toEqual([]);
  });

  it("should handle empty rows", () => {
    expect(kWeakestRows([[], [], [], []], 2)).toEqual([0, 1]);
  });

  it("should handle a single row with k = 1", () => {
    expect(kWeakestRows([[1, 1, 1]], 1)).toEqual([0]);
  });

  it("should handle a single row with k > 1", () => {
    expect(kWeakestRows([[1, 1, 1]], 2)).toEqual([0]);
  });

  it("should handle a single row with all zeros", () => {
    expect(kWeakestRows([[0, 0, 0]], 1)).toEqual([0]);
  });

  it("should handle a matrix with all zeros", () => {
    expect(
      kWeakestRows(
        [
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
        ],
        2,
      ),
    ).toEqual([0, 1]);
  });

  it("should handle a matrix with all ones", () => {
    expect(
      kWeakestRows(
        [
          [1, 1, 1],
          [1, 1, 1],
          [1, 1, 1],
        ],
        3,
      ),
    ).toEqual([0, 1, 2]);
  });

  it("should handle a matrix with one row of alternating 1s and 0s", () => {
    expect(kWeakestRows([[1, 0, 1, 0, 1]], 1)).toEqual([1]);
  });

  it("should handle a matrix with one row of alternating 1s and 0s with k > 1", () => {
    expect(kWeakestRows([[1, 0, 1, 0, 1]], 3)).toEqual([1]);
  });

  it("should handle a matrix with one row of all 1s with k > 1", () => {
    expect(kWeakestRows([[1, 1, 1, 1, 1]], 3)).toEqual([0]);
  });

  it("should handle a matrix with one row of all 0s", () => {
    expect(kWeakestRows([[0, 0, 0, 0, 0]], 1)).toEqual([0]);
  });

  it("should handle a matrix with one row of all 0s with k > 1", () => {
    expect(kWeakestRows([[0, 0, 0, 0, 0]], 3)).toEqual([0]);
  });

  it("should handle a matrix with one row of all 1s", () => {
    expect(kWeakestRows([[1, 1, 1, 1, 1]], 1)).toEqual([0]);
  });

  it("should handle a matrix with one row of all 0s and another with all 1s", () => {
    expect(
      kWeakestRows(
        [
          [1, 1, 1, 1, 1],
          [0, 0, 0, 0, 0],
        ],
        2,
      ),
    ).toEqual([1, 0]);
  });

  it("should handle a matrix with multiple rows of alternating 1s and 0s", () => {
    expect(
      kWeakestRows(
        [
          [1, 0, 1, 0, 1],
          [0, 1, 0, 1, 0],
          [1, 0, 1, 0, 1],
        ],
        2,
      ),
    ).toEqual([1, 0]);
  });
});
