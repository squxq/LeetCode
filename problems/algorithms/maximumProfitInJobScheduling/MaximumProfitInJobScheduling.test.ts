// Source : https://leetcode.com/problems/maximum-profit-in-job-scheduling/
// Author : francisco
// Date   : 2024-01-06

import { jobScheduling } from "./MaximumProfitInJobScheduling";

describe("maximum profit in job scheduling", () => {
  test("example 1", () => {
    const result: number = jobScheduling(
      [1, 2, 3, 3],
      [3, 4, 5, 6],
      [50, 10, 40, 70],
    );

    expect(result).toBe(120);
  });

  test("example 2", () => {
    const result: number = jobScheduling(
      [1, 2, 3, 4, 6],
      [3, 5, 10, 6, 9],
      [20, 20, 100, 70, 60],
    );

    expect(result).toBe(150);
  });

  test("example 3", () => {
    const result: number = jobScheduling([1, 1, 1], [2, 3, 4], [5, 6, 4]);

    expect(result).toBe(6);
  });

  test("failing submission - 7 / 31 testcases", () => {
    const result: number = jobScheduling(
      [4, 2, 4, 8, 2],
      [5, 5, 5, 10, 8],
      [1, 2, 8, 10, 4],
    );

    expect(result).toBe(18);
  });
});
