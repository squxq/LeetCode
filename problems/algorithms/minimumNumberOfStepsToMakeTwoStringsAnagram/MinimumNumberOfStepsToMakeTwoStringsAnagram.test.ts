// Source : https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/
// Author : francisco
// Date   : 2024-01-13

import { minSteps } from "./MinimumNumberOfStepsToMakeTwoStringsAnagram";

describe("minimum number of steps to make two strings anagram", () => {
  test("example 1", () => {
    const result: number = minSteps("bab", "aba");

    expect(result).toBe(1);
  });

  test("example 2", () => {
    const result: number = minSteps("leetcode", "practice");

    expect(result).toBe(5);
  });

  test("example 3", () => {
    const result: number = minSteps("anagram", "mangaar");

    expect(result).toBe(0);
  });
});
