// Source : https://leetcode.com/problems/longest-increasing-subsequence/
// Author : francisco
// Date   : 2024-01-05

/*****************************************************************************************************
 *
 * Given an integer array nums, return the length of the longest strictly increasing subsequence.
 *
 * Example 1:
 *
 * Input: nums = [10,9,2,5,3,7,101,18]
 * Output: 4
 * Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
 *
 * Example 2:
 *
 * Input: nums = [0,1,0,3,2,3]
 * Output: 4
 *
 * Example 3:
 *
 * Input: nums = [7,7,7,7,7,7,7]
 * Output: 1
 *
 * Constraints:
 *
 * 	1 <= nums.length <= 2500
 * 	-10^4 <= nums[i] <= 10^4
 *
 * Follow up: Can you come up with an algorithm that runs in O(n log(n)) time complexity?
 ******************************************************************************************************/

/**
 * @param {number[]} nums
 * @returns {number}
 * given an integer array nums, return the length of the longest strictly increasing subsequence

 * Tests:
 * I: nums = [10,9,2,5,3,7,101,18] -> O: 4
 * I: nums = nums = [0,1,0,3,2,3] -> O: 4
 * I: nums = [7,7,7,7,7,7,7] -> O: 1

 * Time Complexity: O(n^2)
 * Space Complexity: O(n)
 */
export function lengthOfLISV1(nums: number[]): number {
  const LIS: number[] = new Array(nums.length).fill(1);
  let ans: number = 1;

  for (let i: number = nums.length - 1; i >= 0; i--) {
    const subproblems: number[] = [];

    for (let k: number = i + 1; k < nums.length; k++) {
      if ((nums[k] as number) > (nums[i] as number))
        subproblems.push((LIS[k] as number) + 1);
    }

    const LIS_I: number = Math.max(1, ...subproblems);
    LIS[i] = LIS_I;
    ans = Math.max(ans, LIS_I);
  }

  return ans;
}

/**
 * @param {number[]} nums
 * @returns {number}

 * Time Complexity: O(n^2)
 * Space Complexity: O(n)
 */
export function lengthOfLIS(nums: number[]): number {
  const LIS: number[] = new Array(nums.length).fill(1);
  let ans: number = 1; // nums.length >= 1; therefore ans >= 1

  for (let i: number = 0; i < nums.length; i++) {
    const subproblems: number[] = [];

    for (let k: number = 0; k < i; k++) {
      if ((nums[k] as number) < (nums[i] as number))
        subproblems.push((LIS[k] as number) + 1);
    }

    const LIS_I: number = Math.max(1, ...subproblems);
    LIS[i] = LIS_I;
    ans = Math.max(ans, LIS_I); // we use Math.max() because we want the longest substring
  }

  return ans;
}
