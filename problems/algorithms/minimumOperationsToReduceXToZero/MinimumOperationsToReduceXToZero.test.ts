// Source : https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/
// Author : squxq
// Date   : 2023-11-04

import { minOperations } from "./MinimumOperationsToReduceXToZero";

describe("minOperations", () => {
  it("should return 2 for [1, 1, 4, 2, 3] and x = 5", () => {
    expect(minOperations([1, 1, 4, 2, 3], 5)).toBe(2);
  });

  it("should return -1 for [5, 6, 7, 8, 9] and x = 4", () => {
    expect(minOperations([5, 6, 7, 8, 9], 4)).toBe(-1);
  });

  it("should return 5 for [3, 2, 20, 1, 1, 3] and x = 10", () => {
    expect(minOperations([3, 2, 20, 1, 1, 3], 10)).toBe(5);
  });

  it("should return 0 for [1] and x = 1", () => {
    expect(minOperations([1], 1)).toBe(0);
  });

  it("should return -1 for [2] and x = 3", () => {
    expect(minOperations([2], 3)).toBe(-1);
  });

  it("should return 1 for [1, 1] and x = 2", () => {
    expect(minOperations([1, 1], 2)).toBe(1);
  });

  it("should return 1 for [1, 2, 3] and x = 6", () => {
    expect(minOperations([1, 2, 3], 6)).toBe(1);
  });

  it("should return -1 for [] and x = 5", () => {
    expect(minOperations([], 5)).toBe(-1);
  });

  it("should return -1 for [1, 2, 3] and x = 7", () => {
    expect(minOperations([1, 2, 3], 7)).toBe(-1);
  });

  it("should return -1 for [1, 2, 3] and x = 100", () => {
    expect(minOperations([1, 2, 3], 100)).toBe(-1);
  });
});
