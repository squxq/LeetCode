// Source : https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
// Author : squxq
// Date   : 2023-09-09

/** ***************************************************************************************************
 *
 * You are given an array prices where prices[i] is the price of a given stock on the i^th day.
 *
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a different
 * day in the future to sell that stock.
 *
 * Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit,
 * return 0.
 *
 * Example 1:
 *
 * Input: prices = [7,1,5,3,6,4]
 * Output: 5
 * Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
 * Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
 *
 * Example 2:
 *
 * Input: prices = [7,6,4,3,1]
 * Output: 0
 * Explanation: In this case, no transactions are done and the max profit = 0.
 *
 * Constraints:
 *
 * 	1 <= prices.length <= 10^5
 * 	0 <= prices[i] <= 10^4
 ******************************************************************************************************/

/* eslint-disable @typescript-eslint/no-non-null-assertion */
export function maxProfit(prices: number[]): number {
  let max: number = prices[1]! - prices[0]!;
  let minElement: number = prices[0] as number;

  for (let i: number = 1; i < prices.length; i++) {
    if (prices[i]! - minElement > max) {
      max = prices[i]! - minElement;
    }
    if (prices[i]! < minElement) {
      minElement = prices[i] as number;
    }
  }

  return max >= 0 ? max : 0;
}
