// Source : https://leetcode.com/problems/longest-common-prefix/
// Author : squxq
// Date   : 2023-09-09

import { longestCommonPrefix } from "./LongestCommonPrefix"; // Import your module here

describe("longestCommonPrefix", () => {
  it('should return the longest common prefix for ["flower", "flow", "flight"]', () => {
    expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl");
  });

  it('should return an empty string for ["dog", "racecar", "car"]', () => {
    expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe("");
  });

  it('should return "apple" for ["apple", "appletree", "applesauce"]', () => {
    expect(longestCommonPrefix(["apple", "appletree", "applesauce"])).toBe(
      "apple",
    );
  });

  it("should return an empty string for an empty input array", () => {
    expect(longestCommonPrefix([])).toBe("");
  });

  it("should return the input string for an array with a single element", () => {
    expect(longestCommonPrefix(["hello"])).toBe("hello");
  });

  it("should return an empty string when there is no common prefix", () => {
    expect(longestCommonPrefix(["abc", "def", "xyz"])).toBe("");
  });

  it("should handle input with the maximum allowed length", () => {
    const longString = "a".repeat(200);
    const inputArray = [longString, longString, longString];
    expect(longestCommonPrefix(inputArray)).toBe(longString);
  });

  it("should handle input with one string of maximum length and others shorter", () => {
    const longString = "a".repeat(200);
    const inputArray = ["apple", "banana", longString];
    expect(longestCommonPrefix(inputArray)).toBe("");
  });

  it("should handle input with one empty string and others with a common prefix", () => {
    const inputArray = ["", "test", "testing"];
    expect(longestCommonPrefix(inputArray)).toBe("");
  });

  it("should handle input with one empty string and others without a common prefix", () => {
    const inputArray = ["", "apple", "banana"];
    expect(longestCommonPrefix(inputArray)).toBe("");
  });

  it("should handle input with special characters and digits", () => {
    const inputArray = ["abc123", "abc@#$%", "abc5678"];
    expect(longestCommonPrefix(inputArray)).toBe("abc");
  });

  it("should handle input with a single character common prefix", () => {
    const inputArray = ["xyz", "xylem", "xenon"];
    expect(longestCommonPrefix(inputArray)).toBe("x");
  });

  it("should handle input with only one character in each string", () => {
    const inputArray = ["a", "b", "c", "d"];
    expect(longestCommonPrefix(inputArray)).toBe("");
  });

  it("should handle input with spaces in the strings", () => {
    const inputArray = ["hello world", "hello there", "hello everyone"];
    expect(longestCommonPrefix(inputArray)).toBe("hello ");
  });
});
