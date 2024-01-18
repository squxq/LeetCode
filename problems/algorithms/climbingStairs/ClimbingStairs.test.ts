// Source : https://leetcode.com/problems/climbing-stairs/
// Author : francisco
// Date   : 2024-01-18

import { climbStairs } from "./ClimbingStairs";

describe("Climbing Stairs", () => {
  test("example 1", () => {
    const result: number = climbStairs(2);

    expect(result).toBe(2);
  });

  test("example 2", () => {
    const result: number = climbStairs(3);

    expect(result).toBe(3);
  });

  test("additional testcase 3", () => {
    const result: number = climbStairs(4);

    expect(result).toBe(5);
  });

  test("additional testcase 4", () => {
    const result: number = climbStairs(5);

    expect(result).toBe(8);
  });

  test("additional testcase 5", () => {
    const result: number = climbStairs(6);

    expect(result).toBe(13);
  });
});
