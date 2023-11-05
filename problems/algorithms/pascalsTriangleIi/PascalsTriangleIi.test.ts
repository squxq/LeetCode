// Source : https://leetcode.com/problems/pascals-triangle-ii/
// Author : squxq
// Date   : 2023-11-05

import { getRow } from "./PascalsTriangleIi"; // Replace with the actual path to your implementation

describe("getRow", () => {
  it("should return the correct row for rowIndex 0", () => {
    expect(getRow(0)).toEqual([1]);
  });

  it("should return the correct row for rowIndex 1", () => {
    expect(getRow(1)).toEqual([1, 1]);
  });

  it("should return the correct row for rowIndex 3", () => {
    expect(getRow(3)).toEqual([1, 3, 3, 1]);
  });

  it("should return the correct row for rowIndex 5", () => {
    expect(getRow(5)).toEqual([1, 5, 10, 10, 5, 1]);
  });

  it("should return the correct row for rowIndex 10", () => {
    expect(getRow(10)).toEqual([1, 10, 45, 120, 210, 252, 210, 120, 45, 10, 1]);
  });

  it("should return the correct row for rowIndex 33", () => {
    const expected = [
      1, 33, 528, 5456, 40920, 237336, 1107568, 4272048, 13884156, 38567100,
      92561040, 193536720, 354817320, 573166440, 818809200, 1015059590,
      1094533440, 1015059590, 818809200, 573166440, 354817320, 193536720,
      92561040, 38567100, 13884156, 4272048, 1107568, 237336, 40920, 5456, 528,
      33, 1,
    ];
    expect(getRow(33)).toEqual(expected);
  });

  // Additional test cases for edge cases
  it("should return an empty array for rowIndex less than 0", () => {
    expect(getRow(-1)).toEqual([]);
  });

  it("should return [1, 1] for rowIndex 2", () => {
    expect(getRow(2)).toEqual([1, 2, 1]);
  });
});
