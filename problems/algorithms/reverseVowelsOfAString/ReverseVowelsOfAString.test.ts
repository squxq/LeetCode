// Source : https://leetcode.com/problems/reverse-vowels-of-a-string/
// Author : squxq
// Date   : 2023-09-10

import { reverseVowels } from "./ReverseVowelsOfAString";

describe("reverseVowels", () => {
  it("should reverse vowels in a string with lowercase vowels", () => {
    expect(reverseVowels("hello")).toBe("holle");
    expect(reverseVowels("leetcode")).toBe("leotcede");
    expect(reverseVowels("a")).toBe("a");
    expect(reverseVowels("aeiou")).toBe("uoiea");
  });

  it("should reverse vowels in a string with uppercase vowels", () => {
    expect(reverseVowels("HELLO")).toBe("HOLLE");
    expect(reverseVowels("LEETCODE")).toBe("LEOTCEDE");
    expect(reverseVowels("A")).toBe("A");
    expect(reverseVowels("AEIOU")).toBe("UOIEA");
  });

  it("should handle strings with no vowels", () => {
    expect(reverseVowels("bcdfg")).toBe("bcdfg");
    expect(reverseVowels("XYZ")).toBe("XYZ");
    expect(reverseVowels("123")).toBe("123");
    expect(reverseVowels("")).toBe("");
  });

  it("should handle strings with only vowels", () => {
    expect(reverseVowels("aeiou")).toBe("uoiea");
    expect(reverseVowels("AEIOU")).toBe("UOIEA");
  });

  it("should handle strings with mixed characters", () => {
    expect(reverseVowels("h3ll0")).toBe("h3ll0");
    expect(reverseVowels("L33tC0d3")).toBe("L33tC0d3");
    expect(reverseVowels("vowels AEIOU here")).toBe("vowels UOIEA here");
  });

  it("should handle long strings (within constraints)", () => {
    const longString = "a".repeat(300000);
    const reversedLongString = "u".repeat(300000);
    expect(reverseVowels(longString)).toBe(reversedLongString);
  });
});
