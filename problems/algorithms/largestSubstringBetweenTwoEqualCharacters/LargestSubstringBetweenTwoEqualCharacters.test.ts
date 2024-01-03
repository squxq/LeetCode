// Source : https://leetcode.com/problems/largest-substring-between-two-equal-characters/
// Author : francisco
// Date   : 2024-01-03

import { maxLengthBetweenEqualCharacters } from "./LargestSubstringBetweenTwoEqualCharacters";

describe("largest substring between two equal characters", () => {
  test("example 1", () => {
    const result: number = maxLengthBetweenEqualCharacters("aa");

    expect(result).toBe(0);
  });

  test("example 2", () => {
    const result: number = maxLengthBetweenEqualCharacters("abca");

    expect(result).toBe(2);
  });

  test("example 3", () => {
    const result: number = maxLengthBetweenEqualCharacters("cbzxy");

    expect(result).toBe(-1);
  });
});
