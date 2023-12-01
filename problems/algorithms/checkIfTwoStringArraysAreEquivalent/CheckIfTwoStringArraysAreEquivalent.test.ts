// Source : https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/
// Author : Francisco Tomas
// Date   : 2023-12-01

import { arrayStringsAreEqual } from "./CheckIfTwoStringArraysAreEquivalent";

describe("check if two string arrays are equivalent", () => {
  test("basic example", () => {
    const result: boolean = arrayStringsAreEqual(["ab", "c"], ["a", "bc"]);
    expect(result).toBe(true);
  });

  test("failing basic example", () => {
    const result: boolean = arrayStringsAreEqual(["a", "cb"], ["ab", "c"]);
    expect(result).toBe(false);
  });

  test("more complex example", () => {
    const result: boolean = arrayStringsAreEqual(
      ["abc", "d", "defg"],
      ["abcddefg"],
    );
    expect(result).toBe(true);
  });

  test("failing more complex example", () => {
    const result: boolean = arrayStringsAreEqual(
      ["abc", "d", "defg"],
      ["abcddef"],
    );
    expect(result).toBe(false);
  });
});
