// Source : https://leetcode.com/problems/determine-if-string-halves-are-alike/
// Author : francisco
// Date   : 2024-01-12

import { halvesAreAlike } from "./DetermineIfStringHalvesAreAlike";

describe("determine if string halves are alike", () => {
  test("example 1", () => {
    const result: boolean = halvesAreAlike("book");

    expect(result).toBe(true);
  });
});
