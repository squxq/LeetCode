// Source : https://leetcode.com/problems/determine-if-string-halves-are-alike/
// Author : francisco
// Date   : 2024-01-12

import { halvesAreAlike } from "./DetermineIfStringHalvesAreAlike";

describe("determine if string halves are alike", () => {
  test("example 1", () => {
    const result: boolean = halvesAreAlike("book");

    expect(result).toBe(true);
  });

  test("example 2", () => {
    const result: boolean = halvesAreAlike("textbook");

    expect(result).toBe(false);
  });

  test("failed submission - 58 / 113 testcases passed", () => {
    const result: boolean = halvesAreAlike("AbCdEfGh");

    expect(result).toBe(true);
  });
});
