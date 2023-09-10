// Source : https://leetcode.com/problems/merge-strings-alternately/
// Author : squxq
// Date   : 2023-09-10

import { mergeAlternately } from "./MergeStringsAlternately"; // Import the mergeAlternately function from your file

describe("mergeAlternately", () => {
  it("should merge two equal-length strings alternately", () => {
    expect(mergeAlternately("abc", "pqr")).toBe("apbqcr");
  });

  it("should merge two strings when the first is shorter", () => {
    expect(mergeAlternately("ab", "pqrs")).toBe("apbqrs");
  });

  it("should merge two strings when the second is shorter", () => {
    expect(mergeAlternately("abcd", "pq")).toBe("apbqcd");
  });

  it("should merge two empty strings", () => {
    expect(mergeAlternately("", "")).toBe("");
  });

  it("should merge when the first string is empty", () => {
    expect(mergeAlternately("", "xyz")).toBe("xyz");
  });

  it("should merge when the second string is empty", () => {
    expect(mergeAlternately("abc", "")).toBe("abc");
  });

  it("should merge two long strings with different characters", () => {
    expect(mergeAlternately("abcdefghi", "123456789")).toBe(
      "a1b2c3d4e5f6g7h8i9",
    );
  });

  it("should merge two long strings with one longer than the other", () => {
    expect(mergeAlternately("abcdefghi", "123")).toBe("a1b2c3defghi");
  });

  it("should merge two strings with the same character", () => {
    expect(mergeAlternately("aaa", "bbb")).toBe("ababab");
  });

  it("should merge two strings with special characters", () => {
    expect(mergeAlternately("@#", "123")).toBe("@1#23");
  });

  it("should merge two strings with spaces", () => {
    expect(mergeAlternately("hello", " world")).toBe("h e l l o world");
  });

  it("should merge very long strings", () => {
    const word1 = "a".repeat(100);
    const word2 = "b".repeat(100);
    const expected = "ab".repeat(100);
    expect(mergeAlternately(word1, word2)).toBe(expected);
  });
});
