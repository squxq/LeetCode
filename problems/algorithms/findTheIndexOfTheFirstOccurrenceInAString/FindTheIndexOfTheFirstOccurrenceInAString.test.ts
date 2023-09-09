// Source : https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/
// Author : squxq
// Date   : 2023-09-09

import { strStr } from "./FindTheIndexOfTheFirstOccurrenceInAString"; // Update with your actual file name

describe("strStr", () => {
  it("should return 0 when needle is an empty string", () => {
    expect(strStr("abc", "")).toBe(0);
  });

  it("should return -1 when haystack is an empty string and needle is not empty", () => {
    expect(strStr("", "xyz")).toBe(-1);
  });

  it("should return -1 when needle is longer than haystack", () => {
    expect(strStr("abc", "abcdef")).toBe(-1);
  });

  it("should return 0 when haystack and needle are the same", () => {
    expect(strStr("hello", "hello")).toBe(0);
  });

  it("should return -1 when needle is not found in haystack", () => {
    expect(strStr("abcdef", "xyz")).toBe(-1);
  });

  it("should return the correct index when needle is at the beginning of haystack", () => {
    expect(strStr("abcdef", "abc")).toBe(0);
  });

  it("should return the correct index when needle is at the end of haystack", () => {
    expect(strStr("abcdef", "def")).toBe(3);
  });

  it("should return the correct index when needle appears multiple times in haystack", () => {
    expect(strStr("ababcabc", "abc")).toBe(2);
  });

  it("should handle large input strings efficiently", () => {
    const haystack = "a".repeat(10000);
    const needle = "a".repeat(5000);
    expect(strStr(haystack, needle)).toBe(0);
  });
});
