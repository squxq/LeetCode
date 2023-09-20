// Source : https://leetcode.com/problems/find-the-duplicate-number/
// Author : squxq
// Date   : 2023-09-20

import { findDuplicate } from "./FindTheDuplicateNumber"; // Replace with the actual path to your code file

describe("findDuplicate", () => {
  it("Test Case 1", () => {
    const nums = [1, 3, 4, 2, 2];
    expect(findDuplicate(nums)).toBe(2);
  });

  it("Test Case 2", () => {
    const nums = [3, 1, 3, 4, 2];
    expect(findDuplicate(nums)).toBe(3);
  });

  it("Test Case 3 (Minimum Input Size)", () => {
    const nums = [1];
    expect(findDuplicate(nums)).toBe(1);
  });

  it("Test Case 4 (Maximum Input Size)", () => {
    const n = 100000;
    const nums = Array.from({ length: n }, (_, i) => i + 1);
    nums.push(99999); // Add a duplicate
    expect(findDuplicate(nums)).toBe(99999);
  });

  it("Test Case 5 (Duplicate at the Beginning)", () => {
    const nums = [2, 2, 3, 4, 5];
    expect(findDuplicate(nums)).toBe(2);
  });

  it("Test Case 6 (Duplicate at the End)", () => {
    const nums = [1, 2, 3, 4, 5, 5];
    expect(findDuplicate(nums)).toBe(5);
  });

  it("Test Case 7 (Duplicate in the Middle)", () => {
    const nums = [1, 2, 3, 3, 4, 5];
    expect(findDuplicate(nums)).toBe(3);
  });

  it("Test Case 8 (Random Order)", () => {
    const nums = [5, 2, 1, 3, 4, 4];
    expect(findDuplicate(nums)).toBe(4);
  });

  it("Test Case 9 (Duplicates at Both Ends)", () => {
    const nums = [1, 2, 1, 3, 4, 5, 5];
    expect(findDuplicate(nums)).toBe(1);
  });

  it("Test Case 10 (All Elements Are the Same)", () => {
    const nums = [7, 7, 7, 7, 7];
    expect(findDuplicate(nums)).toBe(7);
  });
});
