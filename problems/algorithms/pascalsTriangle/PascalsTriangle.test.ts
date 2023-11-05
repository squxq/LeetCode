// Source : https://leetcode.com/problems/pascals-triangle/
// Author : squxq
// Date   : 2023-11-05

import { generate } from "./PascalsTriangle";

describe("generate", () => {
  it("should return an empty array for numRows = 0", () => {
    expect(generate(0)).toEqual([]);
  });

  it("should return [[1]] for numRows = 1", () => {
    expect(generate(1)).toEqual([[1]]);
  });

  it("should return [[1],[1,1]] for numRows = 2", () => {
    expect(generate(2)).toEqual([[1], [1, 1]]);
  });

  it("should return Pascal's triangle for numRows = 5", () => {
    const expected = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]];
    expect(generate(5)).toEqual(expected);
  });

  it("should return Pascal's triangle for numRows = 10", () => {
    const expected = [
      [1],
      [1, 1],
      [1, 2, 1],
      [1, 3, 3, 1],
      [1, 4, 6, 4, 1],
      [1, 5, 10, 10, 5, 1],
      [1, 6, 15, 20, 15, 6, 1],
      [1, 7, 21, 36, 36, 21, 7, 1],
      [1, 8, 28, 56, 70, 56, 28, 8, 1],
      [1, 9, 36, 84, 126, 126, 84, 36, 9, 1],
    ];
    expect(generate(10)).toEqual(expected);
  });

  it("should return Pascal's triangle for numRows = 30", () => {
    // Generating the expected result for numRows = 30 is not practical, so we'll check the structure only
    const result = generate(30);
    expect(result.length).toBe(30);
    result.forEach((row, i) => {
      expect(row.length).toBe(i + 1);
    });
  });

  it("should throw an error for numRows > 30", () => {
    expect(() => generate(31)).toThrow(
      "Input numRows exceeds the maximum allowed value (30).",
    );
  });
});
