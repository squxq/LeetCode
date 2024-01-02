// Source : https://leetcode.com/problems/string-compression-ii/
// Author : francisco
// Date   : 2024-01-02

import { getLengthOfOptimalCompression } from "./StringCompressionIi";

describe("string compression II", () => {
  test("example 1", () => {
    const result: number = getLengthOfOptimalCompression("aaabcccd", 2);

    expect(result).toBe(4);
  });

  test("example 2", () => {
    const result: number = getLengthOfOptimalCompression("aabbaa", 2);

    expect(result).toBe(2);
  });

  test("example 3", () => {
    const result: number = getLengthOfOptimalCompression("aaaaaaaaaaa", 0);

    expect(result).toBe(3);
  });

  test("example 4", () => {
    const result: number = getLengthOfOptimalCompression(
      "abcdefghijklmnopqrstuvwxyz",
      16,
    );

    expect(result).toBe(10);
  });

  test("example 5", () => {
    const result: number = getLengthOfOptimalCompression("aabaabbcbbbaccc", 6);

    expect(result).toBe(4);
  });

  test("example 6", () => {
    const result: number = getLengthOfOptimalCompression(
      "ddaacaaaadcabcbdddadccacddcadbdaddcdddcccabbcababadddcaaacabcacabbcadaccdbdadbbabdacaababdccaadb",
      42,
    );

    expect(result).toBe(22);
  });

  test("example 7", () => {
    const result: number = getLengthOfOptimalCompression(
      "aaabaaabaababbaaaabbbabaaabbabbaabaaabbabbbaaaaaaababaabbbbbbbaabbbbbabaaabaaabbbababba",
      31,
    );

    expect(result).toBe(8);
  });
});
