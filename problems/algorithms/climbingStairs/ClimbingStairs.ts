// Source : https://leetcode.com/problems/climbing-stairs/
// Author : francisco
// Date   : 2024-01-18

/*****************************************************************************************************
 *
 * You are climbing a staircase. It takes n steps to reach the top.
 *
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 *
 * Example 1:
 *
 * Input: n = 2
 * Output: 2
 * Explanation: There are two ways to climb to the top.
 * 1. 1 step + 1 step
 * 2. 2 steps
 *
 * Example 2:
 *
 * Input: n = 3
 * Output: 3
 * Explanation: There are three ways to climb to the top.
 * 1. 1 step + 1 step + 1 step
 * 2. 1 step + 2 steps
 * 3. 2 steps + 1 step
 *
 * Constraints:
 *
 * 	1 <= n <= 45
 ******************************************************************************************************/

/**
 * @param {number} n
 * @returns {number}
 * return the # of distinct ways that we can climb to the top
 * APPROACH: fibonacci

 * Tests:
 * I: n = 2 -> O: 2
 * I: n = 3 -> O: 3
 * I: n = 4 -> O: 5
 * I: n = 5 -> O: 8
 * I: n = 6 -> O: 13

 * Template: recursion + memoization
 */
export function climbStairs(n: number): number {
  const cache = new Map<number, number>([
    [1, 1],
    [2, 2],
  ]);

  function combinations(n: number): number {
    if (cache.has(n)) return cache.get(n) as number;

    const result: number = combinations(n - 2) + combinations(n - 1);
    cache.set(n, result);

    return result;
  }

  return combinations(n);
}
