// Source : https://leetcode.com/problems/arithmetic-slices-ii-subsequence/
// Author : francisco
// Date   : 2024-01-07

/*****************************************************************************************************
 *
 * Given an integer array nums, return the number of all the arithmetic subsequences of nums.
 *
 * A sequence of numbers is called arithmetic if it consists of at least three elements and if the
 * difference between any two consecutive elements is the same.
 *
 * 	For example, [1, 3, 5, 7, 9], [7, 7, 7, 7], and [3, -1, -5, -9] are arithmetic sequences.
 * 	For example, [1, 1, 2, 5, 7] is not an arithmetic sequence.
 *
 * A subsequence of an array is a sequence that can be formed by removing some elements (possibly
 * none) of the array.
 *
 * 	For example, [2,5,10] is a subsequence of [1,2,1,2,4,1,5,10].
 *
 * The test cases are generated so that the answer fits in 32-bit integer.
 *
 * Example 1:
 *
 * Input: nums = [2,4,6,8,10]
 * Output: 7
 * Explanation: All arithmetic subsequence slices are:
 * [2,4,6]
 * [4,6,8]
 * [6,8,10]
 * [2,4,6,8]
 * [4,6,8,10]
 * [2,4,6,8,10]
 * [2,6,10]
 *
 * Example 2:
 *
 * Input: nums = [7,7,7,7,7]
 * Output: 16
 * Explanation: Any subsequence of this array is arithmetic.
 *
 * Constraints:
 *
 * 	1  <= nums.length <= 1000
 * 	-2^31 <= nums[i] <= 2^31 - 1
 ******************************************************************************************************/

/* eslint-disable @typescript-eslint/no-non-null-assertion */

/**
 * @param {number[]} nums
 * @returns {number}
 * given an integer array nums, return the number of all the arithmetic subsequences of nums
 * NOTE: - a sequence of numbers is called arithmetic if it consists of at least three elements 
 *       and if the difference between any two consecutive elements is the same
 *       - a subsequence of an array is a sequence that can be formed by removing elements
 *       (possibly none) of the array

 * Tests:
 * I: nums = [4] -> O: 0
 * I: nums = [4, 7] -> O: 0
 * I: nums = [4, 7, 10] -> O: 1
 * I: nums = [4, 7, 10, 16] -> O: 2
 * I: nums = [4, 7, 10, 16, 25] -> O: 3
 * I: nums = [2,2,3,4] -> O: 2

 * Template: dynamic programming
 * - dp is array of hashtables -> all the differences of an index in nums and their respective count
 * - for loop over the nums array [0, nums.length] - for each iteration: iterate over all previous
 * elements of current element -> [element index, index, 0 <= previous element index, previous < index]
 * - diff between nums[index] and nums[previous] -> nums[index] - nums[previous]
 * - dp[index][diff] += 1 + dp[previous][diff] - number of subsequences with length >= 2
 * - total += dp[previous][diff] - we want the subsequences with length >= 3, so add only the previous
 * count, because the previous count was for length >= 2 and now we found another element, so length++
 */
export function numberOfArithmeticSlicesV1(nums: number[]): number {
  const dp: Array<Record<number, number>> = [];
  let total: number = 0;

  for (let index: number = 0; index < nums.length; index++) {
    dp.push({});

    for (let previous: number = 0; previous < index; previous++) {
      const diff: number = (nums[index] as number) - (nums[previous] as number);

      if (dp[previous]![diff] !== undefined) {
        if (dp[index]![diff] !== undefined)
          dp[index]![diff] += 1 + (dp[previous]![diff] as number);
        else dp[index]![diff] = 1 + (dp[previous]![diff] as number);

        total += dp[previous]![diff] as number;
      } else {
        if (dp[index]![diff] !== undefined) dp[index]![diff]++;
        else dp[index]![diff] = 1;
      }
    }
  }

  return total;
}

/**
 * @param {number[]} nums
 * @returns {number}
 * better version of previous function

 * Time Complexity: O(n^2)
 * Space Complexity: O(n^2)

 * Runtime: 306ms (100.00%)
 */
export function numberOfArithmeticSlices(nums: number[]): number {
  const n: number = nums.length;
  const dp = Array.from({ length: n }, () => new Map<number, number>());

  let total: number = 0;

  for (let index: number = 0; index < n; index++) {
    dp.push(new Map<number, number>());

    for (let previous: number = 0; previous < index; previous++) {
      const diff: number = (nums[index] as number) - (nums[previous] as number);
      const previousCount: number = dp[previous]!.get(diff) ?? 0;

      dp[index]!.set(diff, (dp[index]!.get(diff) ?? 0) + 1 + previousCount);
      total += previousCount;
    }
  }

  return total;
}
