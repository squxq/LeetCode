// Source : https://leetcode.com/problems/determine-if-two-strings-are-close/
// Author : francisco
// Date   : 2024-01-14

import { closeStrings } from "./DetermineIfTwoStringsAreClose";

describe("determine if two strings are close", () => {
  test("example 1", () => {
    const result: boolean = closeStrings("abc", "bca");

    expect(result).toBe(true);
  });

  test("example 2", () => {
    const result: boolean = closeStrings("a", "aa");

    expect(result).toBe(false);
  });

  test("example 3", () => {
    const result: boolean = closeStrings("cabbba", "abbccc");

    expect(result).toBe(true);
  });

  test("additional testcase 4", () => {
    const result: boolean = closeStrings("sadjkfasjfkg", "sadjkfasjfk");

    expect(result).toBe(false);
  });

  test("additional testcase 5", () => {
    const result: boolean = closeStrings("abbccc", "addccc");

    expect(result).toBe(false);
  });

  test("failed submission - 117 / 153 testcases passed", () => {
    const result: boolean = closeStrings("abbbzcf", "babzzcz");

    expect(result).toBe(false);
  });

  test("failed submission - 132 / 153 testcases passed", () => {
    const result: boolean = closeStrings("abbzzca", "babzzcz");

    expect(result).toBe(false);
  });
});
