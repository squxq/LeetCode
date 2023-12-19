// Source : https://leetcode.com/problems/valid-anagram/
// Author : francisco
// Date   : 2023-12-19

import { isAnagram } from "./ValidAnagram";

describe("valid anagram", () => {
  test("example 1", () => {
    const result: boolean = isAnagram("anagram", "nagaram");

    expect(result).toBe(true);
  });

  test("example 2", () => {
    const result: boolean = isAnagram("rat", "car");

    expect(result).toBe(false);
  });

  test("example 3", () => {
    const result: boolean = isAnagram("dhsfg", "sfgh");

    expect(result).toBe(false);
  });

  test("example 4", () => {
    const result: boolean = isAnagram("sgfh", "dsgfh");

    expect(result).toBe(false);
  });
});
