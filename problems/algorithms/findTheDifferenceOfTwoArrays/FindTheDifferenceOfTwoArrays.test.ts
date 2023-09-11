// Source : https://leetcode.com/problems/find-the-difference-of-two-arrays/
// Author : squxq
// Date   : 2023-09-11

import { findDifference } from "./FindTheDifferenceOfTwoArrays"; // Import your code implementation

describe("findDifference", () => {
  it("should return the difference of two empty arrays as two empty arrays", () => {
    expect(findDifference([], [])).toEqual([[], []]);
  });

  it("should return the difference when nums1 is empty and nums2 is not", () => {
    expect(findDifference([], [1, 2, 3])).toEqual([[], [1, 2, 3]]);
  });

  it("should return the difference when nums2 is empty and nums1 is not", () => {
    expect(findDifference([1, 2, 3], [])).toEqual([[1, 2, 3], []]);
  });

  it("should return the difference of two arrays with no common elements", () => {
    expect(findDifference([1, 2, 3], [4, 5, 6])).toEqual([
      [1, 2, 3],
      [4, 5, 6],
    ]);
  });

  it("should return the difference of two arrays with some common elements", () => {
    expect(findDifference([1, 2, 3, 4], [3, 4, 5, 6])).toEqual([
      [1, 2],
      [5, 6],
    ]);
  });

  it("should return the difference with duplicate elements in nums1", () => {
    expect(findDifference([1, 2, 2, 3, 3, 4], [3, 4, 5, 6])).toEqual([
      [1, 2],
      [5, 6],
    ]);
  });

  it("should return the difference with duplicate elements in nums2", () => {
    expect(findDifference([1, 2, 3], [2, 2, 3, 3, 4])).toEqual([[1], [4]]);
  });

  it("should return the difference with negative numbers", () => {
    expect(findDifference([-1, -2, -3], [-2, -3, -4])).toEqual([[-1], [-4]]);
  });

  it("should handle large input arrays", () => {
    const nums1 = Array.from({ length: 1000 }, (_, i) => i);
    const nums2 = Array.from({ length: 1000 }, (_, i) => i + 500);
    expect(findDifference(nums1, nums2)).toEqual([
      Array.from({ length: 500 }, (_, i) => i),
      Array.from({ length: 500 }, (_, i) => i + 1000),
    ]);
  });
});
