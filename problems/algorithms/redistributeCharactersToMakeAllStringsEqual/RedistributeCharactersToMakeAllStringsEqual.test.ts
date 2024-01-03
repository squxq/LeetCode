// Source : https://leetcode.com/problems/redistribute-characters-to-make-all-strings-equal/
// Author : francisco
// Date   : 2024-01-03

import { makeEqual } from "./RedistributeCharactersToMakeAllStringsEqual";

describe("redistribute characters to make all strings equal", () => {
  test("example 1", () => {
    const result: boolean = makeEqual(["abc", "aabc", "bc"]);

    expect(result).toBe(true);
  });

  test("example 2", () => {
    const result: boolean = makeEqual(["ab", "a"]);

    expect(result).toBe(false);
  });

  test("example 3", () => {
    const result: boolean = makeEqual(["a", "b"]);

    expect(result).toBe(false);
  });

  test("example 4", () => {
    const result: boolean = makeEqual(["a", "a"]);

    expect(result).toBe(true);
  });

  test("example 5", () => {
    const result: boolean = makeEqual(["a"]);

    expect(result).toBe(true);
  });

  test("example 6", () => {
    const result: boolean = makeEqual(["abbab"]);

    expect(result).toBe(true);
  });

  test("example 7", () => {
    const result: boolean = makeEqual([
      "caaaaa",
      "aaaaaaaaa",
      "a",
      "bbb",
      "bbbbbbbbb",
      "bbb",
      "cc",
      "cccccccccccc",
      "ccccccc",
      "ccccccc",
      "cc",
      "cccc",
      "c",
      "cccccccc",
      "c",
    ]);

    expect(result).toBe(true);
  });
});
