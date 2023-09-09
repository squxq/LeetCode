// Source : https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
// Author : squxq
// Date   : 2023-09-09

import { maxProfit } from "./BestTimeToBuyAndSellStock";

describe("maxProfit", () => {
  it("should return 0 for an empty array", () => {
    const prices: number[] = [];
    expect(maxProfit(prices)).toBe(0);
  });

  it("should return 0 when prices are in descending order", () => {
    const prices: number[] = [7, 6, 4, 3, 1];
    expect(maxProfit(prices)).toBe(0);
  });

  it("should return the correct profit for increasing prices", () => {
    const prices: number[] = [1, 2, 3, 4, 5];
    expect(maxProfit(prices)).toBe(4);
  });

  it("should return the correct profit for decreasing prices", () => {
    const prices: number[] = [5, 4, 3, 2, 1];
    expect(maxProfit(prices)).toBe(0);
  });

  it("should return the correct profit for mixed prices", () => {
    const prices: number[] = [7, 1, 5, 3, 6, 4];
    expect(maxProfit(prices)).toBe(5);
  });

  it("should return 0 when there is no opportunity to make a profit", () => {
    const prices: number[] = [5, 5, 5, 5, 5];
    expect(maxProfit(prices)).toBe(0);
  });

  it("should handle large input sizes efficiently", () => {
    const prices: number[] = Array.from({ length: 10 ** 5 }, (_, i) => i);
    expect(maxProfit(prices)).toBe(99999);
  });

  it("should handle large price values", () => {
    const prices: number[] = [10000, 0, 5000, 10000, 20000];
    expect(maxProfit(prices)).toBe(20000);
  });

  it("should handle single-element arrays", () => {
    const prices: number[] = [5];
    expect(maxProfit(prices)).toBe(0);
  });
});
