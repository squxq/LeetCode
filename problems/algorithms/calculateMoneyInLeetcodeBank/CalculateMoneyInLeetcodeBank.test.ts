// Source : https://leetcode.com/problems/calculate-money-in-leetcode-bank/
// Author : Francisco Tomas
// Date   : 2023-12-06

import { totalMoney } from "./CalculateMoneyInLeetcodeBank";

describe("calculate money in leetcode bank", () => {
  test("example 1", () => {
    const result: number = totalMoney(4);
    expect(result).toBe(10);
  });

  test("example 2", () => {
    const result: number = totalMoney(7);
    expect(result).toBe(28);
  });

  test("example 3", () => {
    const result: number = totalMoney(10);
    expect(result).toBe(37);
  });

  test("example 4", () => {
    const result: number = totalMoney(20);
    expect(result).toBe(96);
  });
});
