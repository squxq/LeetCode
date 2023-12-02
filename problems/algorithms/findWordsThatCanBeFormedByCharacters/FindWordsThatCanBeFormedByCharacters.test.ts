// Source : https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/
// Author : Francisco Tomas
// Date   : 2023-12-02

import { countCharacters } from "./FindWordsThatCanBeFormedByCharacters";

describe("find words tha can be formed by characters", () => {
  test("example 1", () => {
    const result: number = countCharacters(
      ["cat", "bt", "hat", "tree"],
      "atach",
    );
    expect(result).toBe(6);
  });

  test("example 2", () => {
    const result: number = countCharacters(
      ["hello", "world", "leetcode"],
      "welldonehoneyr",
    );
    expect(result).toBe(10);
  });
});
