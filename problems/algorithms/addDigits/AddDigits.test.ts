// Source : https://leetcode.com/problems/add-digits/
// Author : squxq
// Date   : 2023-09-21

import { addDigits } from "./AddDigits"; // Replace with your actual code file path

describe("addDigits", () => {
  it("should return the correct result for valid inputs", () => {
    // Example 1
    expect(addDigits(38)).toEqual(2);

    // Example 2
    expect(addDigits(0)).toEqual(0);

    // Additional test cases
    expect(addDigits(12345)).toEqual(6);
    expect(addDigits(987654321)).toEqual(9);
    expect(addDigits(123456789)).toEqual(9);
    expect(addDigits(9)).toEqual(9);
    expect(addDigits(10)).toEqual(1);
    expect(addDigits(99)).toEqual(9);
  });

  it("should handle edge cases", () => {
    // Edge case: Minimum valid input
    expect(addDigits(0)).toEqual(0);

    // Edge case: Maximum valid input
    expect(addDigits(2147483647)).toEqual(2);

    // Edge case: Single-digit input
    expect(addDigits(5)).toEqual(5);
  });

  it("should handle large input values", () => {
    // Large input: 10^18 + 1
    // eslint-disable-next-line @typescript-eslint/no-loss-of-precision
    expect(addDigits(1000000000000000001)).toEqual(2);

    // Large input: 10^100 + 1
    const bigNum = BigInt("1" + "0".repeat(100));
    expect(addDigits(Number(bigNum + 1n))).toEqual(1);
  });

  it("should handle negative input values", () => {
    // Negative input: -12345
    expect(addDigits(-12345)).toEqual(9);

    // Negative input: -987654321
    expect(addDigits(-987654321)).toEqual(0);
  });
});
