// Source : https://leetcode.com/problems/reverse-words-in-a-string/
// Author : francisco
// Date   : 2023-12-19

import { reverseWords } from "./ReverseWordsInAString";

describe("reverse words in a string", () => {
  test("example 1", () => {
    const result: string = reverseWords("the sky is blue");

    expect(result).toBe("blue is sky the");
  });

  test("example 2", () => {
    const result: string = reverseWords("  hello world  ");

    expect(result).toBe("world hello");
  });

  test("example 3", () => {
    const result: string = reverseWords("a good   example");

    expect(result).toBe("example good a");
  });
});
