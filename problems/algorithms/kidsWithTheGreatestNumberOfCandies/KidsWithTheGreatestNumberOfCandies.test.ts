// Source : https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/
// Author : squxq
// Date   : 2023-09-10

import { kidsWithCandies } from "./KidsWithTheGreatestNumberOfCandies"; // Import the kidsWithCandies function from your file

describe("kidsWithCandies", () => {
  it("should return an array of booleans for valid inputs", () => {
    expect(kidsWithCandies([2, 3, 5, 1, 3], 3)).toEqual([
      true,
      true,
      true,
      false,
      true,
    ]);
    expect(kidsWithCandies([4, 2, 1, 1, 2], 1)).toEqual([
      true,
      false,
      false,
      false,
      false,
    ]);
    expect(kidsWithCandies([12, 1, 12], 10)).toEqual([true, false, true]);
  });

  it("should return an array of booleans for a single kid", () => {
    expect(kidsWithCandies([1], 1)).toEqual([true]);
    expect(kidsWithCandies([100], 0)).toEqual([true]);
    expect(kidsWithCandies([10], 100)).toEqual([true]);
  });

  it("should return an array of booleans for two kids", () => {
    expect(kidsWithCandies([2, 2], 1)).toEqual([true, true]);
    expect(kidsWithCandies([5, 2], 3)).toEqual([true, false]);
    expect(kidsWithCandies([1, 10], 2)).toEqual([false, true]);
  });

  it("should handle zero extra candies", () => {
    expect(kidsWithCandies([2, 3, 5, 1, 3], 0)).toEqual([
      false,
      false,
      true,
      false,
      false,
    ]);
    expect(kidsWithCandies([4, 2, 1, 1, 2], 0)).toEqual([
      false,
      false,
      false,
      false,
      false,
    ]);
  });

  it("should handle maximum constraints", () => {
    const candies = new Array(100).fill(100);
    expect(kidsWithCandies(candies, 50)).toEqual(new Array(100).fill(true));
  });

  it("should handle the edge case with the maximum number of candies", () => {
    const candies = new Array(100).fill(100);
    expect(kidsWithCandies(candies, 101)).toEqual(new Array(100).fill(true));
    expect(kidsWithCandies(candies, 100)).toEqual(new Array(100).fill(false));
  });

  it("should handle a large number of kids with different candy counts", () => {
    const candies = Array.from({ length: 100 }, (_, i) => i + 1);
    expect(kidsWithCandies(candies, 100)).toEqual(new Array(100).fill(false));
  });
});
