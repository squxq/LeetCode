// Source : https://leetcode.com/problems/calculate-money-in-leetcode-bank/
// Author : Francisco Tomas
// Date   : 2023-12-06

/*****************************************************************************************************
 *
 * Hercy wants to save money for his first car. He puts money in the Leetcode bank every day.
 *
 * He starts by putting in $1 on Monday, the first day. Every day from Tuesday to Sunday, he will put
 * in $1 more than the day before. On every subsequent Monday, he will put in $1 more than the
 * previous Monday.
 *
 * Given n, return the total amount of money he will have in the Leetcode bank at the end of the n^th
 * day.
 *
 * Example 1:
 *
 * Input: n = 4
 * Output: 10
 * Explanation: After the 4^th day, the total is 1 + 2 + 3 + 4 = 10.
 *
 * Example 2:
 *
 * Input: n = 10
 * Output: 37
 * Explanation: After the 10^th day, the total is (1 + 2 + 3 + 4 + 5 + 6 + 7) + (2 + 3 + 4) = 37.
 * Notice that on the 2^nd Monday, Hercy only puts in $2.
 *
 * Example 3:
 *
 * Input: n = 20
 * Output: 96
 * Explanation: After the 20^th day, the total is (1 + 2 + 3 + 4 + 5 + 6 + 7) + (2 + 3 + 4 + 5 + 6 + 7
 * + 8) + (3 + 4 + 5 + 6 + 7 + 8) = 96.
 *
 * Constraints:
 *
 * 	1 <= n <= 1000
 ******************************************************************************************************/

/**
 * number -> number
 * given the number of days, n, return the total amount of money at the end of the nth day

 * Stub:
 function totalMoney(n: number): number {return 0}

 * Tests:
 * I: n = 4 -> O: 10 [1 + 2 + 3 + 4 = 10]
 * I: n = 7 -> O: 28
 * I: n = 10 -> O: 37 [(1 + 2 + 3 + 4 + 5 + 6 + 7) + (2 + 3 + 4) = 37]
 * I: n = 20 -> O: 96 [(1 + 2 + 3 + 4 + 5 + 6 + 7) + (2 + 3 + 4 + 5 + 6 + 7 + 8) + (3 + 4 + 5 + 6 + 7 + 8) = 96]
 */

/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)

 * Runtime: 72ms (8.33%)
 * Memory: 43.14MB (37.50%)
 */
export function totalMoneyV1(n: number): number {
  let ans: number = 0;
  let money: number = 0;
  for (let i: number = 1; i <= n; i++) {
    if (i % 7 === 0) {
      ans += 7 + money++;
    } else {
      ans += (i % 7) + money;
    }
  }
  return ans;
}

/**
 * Time Complexity: O(1)
 * Space Complexity: O(1)

 * Runtime: 44ms (100.00%)
 * Memory: 42.14MB (95.83%)
 */
export function totalMoney(n: number): number {
  const weeks: number = Math.floor(n / 7);
  const days: number = n % 7;
  return (
    (7 * weeks ** 2 + 49 * weeks + 2 * weeks * days + days ** 2 + days) / 2
  );
}
