// Source : https://leetcode.com/problems/sum-of-subarray-minimums/
// Author : francisco
// Date   : 2024-01-21

import { sumSubarrayMins } from "./SumOfSubarrayMinimums";

describe("Sum of Subarray Minimums", () => {
  test("example 1", () => {
    const result: number = sumSubarrayMins([3, 1, 2, 4]);

    expect(result).toBe(17);
  });

  test("example 2", () => {
    const result: number = sumSubarrayMins([11, 81, 94, 43, 3]);

    expect(result).toBe(444);
  });

  test("additional testcase 3", () => {
    const result: number = sumSubarrayMins([2, 2]);

    expect(result).toBe(6);
  });

  test("additional testcase 4", () => {
    const result: number = sumSubarrayMins([14562]);

    expect(result).toBe(14562);
  });

  test("additional testcase 5", () => {
    const result: number = sumSubarrayMins([4, 4, 1, 4]);

    expect(result).toBe(22);
  });

  test("additional testcase 6", () => {
    const result: number = sumSubarrayMins([
      26049, 310, 10590, 6216, 24822, 28592, 24237, 18585, 2618, 10439, 29613,
      28128, 20724, 17501, 21698, 23017, 28303, 16166, 21606, 27237, 25353,
      11279, 27156, 17228, 28969, 25955, 25937, 13804, 11843, 10629, 9827,
      26306, 2314, 28336, 589, 6500, 4134, 28566, 10672, 27662, 29112, 27608,
      25731, 4637, 16136, 24325, 375, 17579, 3313, 17261, 175, 14704, 15468,
      29846, 25019, 5194, 27292, 26605, 19787, 19123, 3436, 21348, 3701, 7509,
      22290, 4092, 24269, 13918, 6168, 5890, 25605, 19749, 10211, 12775, 21316,
      24924, 19419, 9913, 20213, 7104, 18139, 29881, 41, 15194, 15039, 21770,
      10167, 12311, 16100, 8884, 11870, 16576, 17366, 3866, 16114, 29742, 18270,
      2861, 8939, 8842,
    ]);

    expect(result).toBe(9968250);
  });

  test("failed submission - 44 / 87 testcases passed", () => {
    const result: number = sumSubarrayMins([60, 39, 58, 30]);

    expect(result).toBe(394);
  });
});
