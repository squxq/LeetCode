// Source : https://leetcode.com/problems/arithmetic-slices-ii-subsequence/
// Author : francisco
// Date   : 2024-01-07

import { numberOfArithmeticSlices } from "./ArithmeticSlicesIiSubsequence";

describe("arithmetic slices II - subsequence", () => {
  test("example 1", () => {
    const result: number = numberOfArithmeticSlices([2, 4, 6, 8, 10]);

    expect(result).toBe(7);
  });

  test("example 2", () => {
    const result: number = numberOfArithmeticSlices([7, 7, 7, 7, 7]);

    expect(result).toBe(16);
  });

  test("test 1", () => {
    const result: number = numberOfArithmeticSlices([4]);

    expect(result).toBe(0);
  });

  test("test 2", () => {
    const result: number = numberOfArithmeticSlices([4, 7]);

    expect(result).toBe(0);
  });

  test("test 3", () => {
    const result: number = numberOfArithmeticSlices([4, 7, 10]);

    expect(result).toBe(1);
  });

  test("test 4", () => {
    const result: number = numberOfArithmeticSlices([4, 7, 10, 16]);

    expect(result).toBe(2);
  });

  test("test 5", () => {
    const result: number = numberOfArithmeticSlices([4, 7, 10, 16, 25]);

    expect(result).toBe(3);
  });

  test("failed submission - 69 / 101 testcases passed", () => {
    const result: number = numberOfArithmeticSlices([2, 2, 3, 4]);

    expect(result).toBe(2);
  });

  test("additional test 6", () => {
    const result: number = numberOfArithmeticSlices([-104]);

    expect(result).toBe(0);
  });

  test("additional test 7", () => {
    const result: number = numberOfArithmeticSlices([
      211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211, 211,
      211, 211, 211, 211, 211, 211, 211, 211, 211,
    ]);

    expect(result).toBe(16776915);
  });

  test("additional test 8", () => {
    const result: number = numberOfArithmeticSlices([
      -454, -908, -1362, -454, -908, -1362, -454, -908, -1362, -454, -908,
      -1362, -454, -908, -1362, -454, -908, -1362, -454, -908, -1362, -454,
      -908, -1362, -454, -908, -1362, -454, -908, -1362,
    ]);

    expect(result).toBe(3244);
  });

  test("additional test 9", () => {
    const result: number = numberOfArithmeticSlices([
      1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384,
      32768, 65536, 131072, 262144, 524288, 1048576, 2097152, 4194304, 8388608,
      16777216, 33554432, 67108864, 134217728, 268435456, 536870912, 1, 3, 9,
      27, 81, 243, 729, 2187, 6561, 19683,
    ]);

    expect(result).toBe(1);
  });

  test("additional test 10", () => {
    const result: number = numberOfArithmeticSlices([
      1073741824, 536870912, 268435456, 134217728, 67108864, 33554432, 16777216,
      8388608, 4194304, 2097152, 1048576, 524288, 262144, 131072, 65536, 32768,
      16384, 8192, 4096, 2048, 1024, 512, 256, 128, 64, 32, 16, 8, 4, 2,
      1073740824, 536870412, 268435206, 134217603, 67108801, 33554400, 16777200,
      8388600, 4194300, 2097150, 1048575, 524287, 262143, 131071, 65535, 32767,
      16383, 8191, 4095, 2047, 1023, 511, 255, 127, 63, 31, 15, 7, 3, 1,
    ]);

    expect(result).toBe(0);
  });
});
