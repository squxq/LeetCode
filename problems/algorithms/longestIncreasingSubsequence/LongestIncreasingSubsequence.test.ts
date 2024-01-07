// Source : https://leetcode.com/problems/longest-increasing-subsequence/
// Author : francisco
// Date   : 2024-01-05

import { lengthOfLIS } from "./LongestIncreasingSubsequence";

describe("longest increasing subsequence", () => {
  test("example 1", () => {
    const result: number = lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]);

    expect(result).toBe(4);
  });

  test("example 2", () => {
    const result: number = lengthOfLIS([0, 1, 0, 3, 2, 3]);

    expect(result).toBe(4);
  });

  test("example 3", () => {
    const result: number = lengthOfLIS([7, 7, 7, 7, 7, 7, 7]);

    expect(result).toBe(1);
  });

  test("discussion testcase 1", () => {
    const result: number = lengthOfLIS([-86, -60]);

    expect(result).toBe(2);
  });

  test("discussion testcase 2", () => {
    const result: number = lengthOfLIS([
      -35, 27, -71, -24, -13, -13, 15, 10, 45, -75, -53, -75, 29, -39, -56, 44,
      5, -39, -16, -18, 35, 5, -34, 47, -62, -56, -59, -72, -40, -70, -68, -25,
      -9, -11, 37, -46, -35, -18, 9, -54, 3, 0, 25, -34, -21, -73, -46, -26,
      -43, -18,
    ]);

    expect(result).toBe(9);
  });

  test("discussion testcase 3", () => {
    const result: number = lengthOfLIS([
      98, 42, 61, 11, -24, -47, 83, -9, 85, 60, -45, -25, 14, 75, 73, -16, -22,
      -27, -7, -17, 16, 54, 37, 81, 87, 38, 18, -17, 100, -42, 86, 45, -40, 60,
      92, 39, 83, 0, 65, 96, 85, -21, 97, 23, -20, -34, 75, 53, 30, 37, -4, 6,
      29, -39, 37, -42, -18, 69, 8, -33, -25, 10, -20, 74, -47, 95, 66, -32, 84,
      -3, 25, 12, -25, 60, 51, 93, 81, -10, -28, -34, -22, 64, -45, -18, -31,
      91, 39, -10, 59, -31, 52, 12, -39, 58, -22, 81, 69, 88, 0, 95,
    ]);

    expect(result).toBe(17);
  });

  test("discussion testcase 4", () => {
    const result: number = lengthOfLIS([
      73, 102, 67, 137, 136, 199, 190, 115, 108, 147, 195, 119, 107, 71, 41, 94,
      190, 198, 80, 87, 70, 180, 139, 83, 137, 188, 74, 115, 9, 183, 39, 13, 68,
      136, 132, 71, 196, 100, 27, 0, 90, 94, 170, 198, 190, 199, 116, 84, 189,
      112, 140, 170, 5, 115, 29, 94, 109, 23, 89, 153, 168, 48, 122, 40, 11,
      123, 173, 49, 10, 113, 114, 19, 127, 125, 61, 28, 141, 134, 82, 65, 196,
      152, 156, 50, 74, 91, 28, 117, 126, 3, 63, 84, 106, 144, 125, 179, 121,
      28, 127, 187, 96, 68, 176, 116, 121, 59, 156, 131, 109, 193, 12, 75, 79,
      2, 160, 164, 82, 105, 65, 169, 165, 142, 27, 121, 75, 80, 199, 35, 78, 23,
      86, 118, 124, 162, 159, 98, 65, 162, 149, 197, 162, 196, 145, 96, 200, 82,
      19, 74, 55, 24, 181, 122, 167, 165, 9, 113, 176, 90, 40, 88, 64, 85, 175,
      2, 24, 105, 35, 37, 159, 127, 26, 3, 144, 51, 18, 187, 170, 107, 188, 4,
      84, 198, 144, 80, 172, 2, 23, 18, 3, 37, 7, 124, 118, 184, 62, 41, 113,
      156, 194, 149,
    ]);

    expect(result).toBe(22);
  });
});