// Source : https://leetcode.com/problems/greatest-common-divisor-of-strings/
// Author : squxq
// Date   : 2023-09-10

import { gcdOfStrings } from "./GreatestCommonDivisorOfStrings"; // Import the gcdOfStrings function from your file

describe("gcdOfStrings", () => {
  it("should return the largest common divisor for valid inputs", () => {
    expect(gcdOfStrings("ABCABC", "ABC")).toBe("ABC");
    expect(gcdOfStrings("ABABAB", "ABAB")).toBe("AB");
    expect(gcdOfStrings("LEET", "CODE")).toBe("");
  });

  it("should return an empty string for strings with no common divisor", () => {
    expect(gcdOfStrings("ABC", "DEF")).toBe("");
  });

  it("should return the input string if one string is a multiple of the other", () => {
    expect(gcdOfStrings("ABCABCABC", "ABC")).toBe("ABC");
    expect(gcdOfStrings("ABABABAB", "AB")).toBe("AB");
    expect(gcdOfStrings("LEETLEET", "CODE")).toBe("LEET");
  });

  it("should handle empty strings", () => {
    expect(gcdOfStrings("", "ABC")).toBe("");
    expect(gcdOfStrings("ABC", "")).toBe("");
    expect(gcdOfStrings("", "")).toBe("");
  });

  it("should handle strings with spaces", () => {
    expect(gcdOfStrings("A B C A B C", "A B C")).toBe("A B C");
  });

  it("should handle very long strings", () => {
    const str1 = "A".repeat(1000);
    const str2 = "A".repeat(500) + "B".repeat(500);
    expect(gcdOfStrings(str1, str2)).toBe("A".repeat(500));
  });

  it("should return the correct result for multiple common divisors", () => {
    expect(gcdOfStrings("ABCABCABC", "AB")).toBe("AB");
    expect(gcdOfStrings("ABCABCABC", "ABCABC")).toBe("ABCABC");
    expect(gcdOfStrings("XYZXYZXYZ", "XYZ")).toBe("XYZ");
  });

  it("should handle uppercase letters", () => {
    expect(gcdOfStrings("ABCDEF", "DEF")).toBe("DEF");
  });

  // Add more test cases as needed, covering edge cases and different scenarios.
});
