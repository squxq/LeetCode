// Source : https://leetcode.com/problems/decode-ways/
// Author : francisco
// Date   : 2024-01-02

import { numDecodings } from "./DecodeWays";

describe("decode ways", () => {
  test("example 1", () => {
    const result: number = numDecodings("12");

    expect(result).toBe(2);
  });

  test("example 2", () => {
    const result: number = numDecodings("226");

    expect(result).toBe(3);
  });

  test("example 3", () => {
    const result: number = numDecodings("06");

    expect(result).toBe(0);
  });

  test("example 4", () => {
    const result: number = numDecodings("12121");

    expect(result).toBe(8);
  });

  test("example 5", () => {
    const result: number = numDecodings("20419");

    expect(result).toBe(2);
  });

  test("example 5", () => {
    const result: number = numDecodings("9012");

    expect(result).toBe(0);
  });
});
