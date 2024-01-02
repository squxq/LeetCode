// Source : https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/
// Author : francisco
// Date   : 2024-01-02

import { numRollsToTarget } from "./NumberOfDiceRollsWithTargetSum";

describe("number of dice rolls with target sum", () => {
  test("example 1", () => {
    const result: number = numRollsToTarget(1, 6, 3);

    expect(result).toBe(1);
  });

  test("example 2", () => {
    const result: number = numRollsToTarget(2, 6, 7);

    expect(result).toBe(6);
  });

  test("example 3", () => {
    const result: number = numRollsToTarget(30, 30, 500);

    expect(result).toBe(222616187);
  });
});
