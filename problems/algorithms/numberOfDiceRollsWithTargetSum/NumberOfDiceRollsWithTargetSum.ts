// Source : https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/
// Author : francisco
// Date   : 2024-01-02

/*****************************************************************************************************
 *
 * You have n dice, and each dice has k faces numbered from 1 to k.
 *
 * Given three integers n, k, and target, return the number of possible ways (out of the k^n total
 * ways) to roll the dice, so the sum of the face-up numbers equals target. Since the answer may be
 * too large, return it modulo 10^9 + 7.
 *
 * Example 1:
 *
 * Input: n = 1, k = 6, target = 3
 * Output: 1
 * Explanation: You throw one die with 6 faces.
 * There is only one way to get a sum of 3.
 *
 * Example 2:
 *
 * Input: n = 2, k = 6, target = 7
 * Output: 6
 * Explanation: You throw two dice, each with 6 faces.
 * There are 6 ways to get a sum of 7: 1+6, 2+5, 3+4, 4+3, 5+2, 6+1.
 *
 * Example 3:
 *
 * Input: n = 30, k = 30, target = 500
 * Output: 222616187
 * Explanation: The answer must be returned modulo 10^9 + 7.
 *
 * Constraints:
 *
 * 	1 <= n, k <= 30
 * 	1 <= target <= 1000
 ******************************************************************************************************/

/** @typedef {Object} CacheObj */
type CacheObj = Record<number, Record<number, number>>;

/** given three integers, n, k and target, return the number of possible ways to roll the dice
 * so the sum of the face-up numbers equals target.
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @returns {number}
 * NOTE: - return it modulo 10^9 + 7
 *       - there are k^n total ways to roll the dice
 *       - each dice has k faces numbered from 1 to k
 * CONSTRAINTS: - 1 <= n, k <= 30
 *            : - 1 <= target <= 1000

 * Tests:
 * I: n = 1, k = 6, target = 3 -> O: 1
 * I: n = 2, k = 6, target = 7 -> O: 7
 * I: n = 30, k = 30, target = 500 -> O: 222616187

 * Template:
 function numRollsToTarget(n: number, k: number, target: number): number {
   return 0
 }

 * Time Complexity: O(n * k * target)
 * Space Complexity: O(n * target)

 * Runtime: 81ms (78.35%)
 * Memory: 43.98MB (98.70%)
 */
export function numRollsToTargetV1(
  n: number,
  k: number,
  target: number,
): number {
  /** @type {CacheObj} */
  const cache: CacheObj = {};
  const mod: number = 10 ** 9 + 7;

  /**
   * @param {CacheObj} cache
   * @param {number} remaining
   * @param {number} sum
   * @returns {number}
   * helper function that calculates the number of ways of getting to target from current dice
   */
  function calculateDice(
    cache: CacheObj,
    remaining: number,
    sum: number,
  ): number {
    if (remaining === 0 && sum === target) return 1;
    else if (remaining === 0 || sum >= target) return 0;
    else if (cache[remaining]?.[sum] !== undefined)
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return (cache[remaining]![sum] as number) % mod;
    else {
      let ans: number = 0;

      for (let i: number = 1; i <= k; i++) {
        ans = (ans + calculateDice(cache, remaining - 1, sum + i)) % mod;
      }

      if (cache[remaining] === undefined) cache[remaining] = {};
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      cache[remaining]![sum] = ans;

      return ans;
    }
  }

  return calculateDice(cache, n, 0);
}

/**
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @returns {number}

 * Time Complexity: O(n * k * target)
 * Space Complexity: O(target)
 */
export function numRollsToTarget(n: number, k: number, target: number): number {
  // dp[i] === the number of ways to roll the value i
  const mod: number = 10 ** 9 + 7;
  let dp: number[] = new Array(target + 1).fill(0);
  dp[0] = 1;

  for (let dice: number = 0; dice < n; dice++) {
    const nextDp: number[] = new Array(target + 1).fill(0);

    for (let value: number = 1; value <= k; value++) {
      for (let total: number = value; total <= target; total++) {
        nextDp[total] =
          ((nextDp[total] as number) + (dp[total - value] as number)) % mod;
      }
    }

    dp = nextDp;
  }

  return dp[target] as number;
}
