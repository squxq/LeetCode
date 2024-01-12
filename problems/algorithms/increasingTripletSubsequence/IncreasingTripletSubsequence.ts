// Source : https://leetcode.com/problems/increasing-triplet-subsequence/
// Author : francisco
// Date   : 2024-01-12

/*****************************************************************************************************
 *
 * Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i
 * < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.
 *
 * Example 1:
 *
 * Input: nums = [1,2,3,4,5]
 * Output: true
 * Explanation: Any triplet where i < j < k is valid.
 *
 * Example 2:
 *
 * Input: nums = [5,4,3,2,1]
 * Output: false
 * Explanation: No triplet exists.
 *
 * Example 3:
 *
 * Input: nums = [2,1,5,0,4,6]
 * Output: true
 * Explanation: The triplet (3, 4, 5) is valid because nums[3] == 0 < nums[4] == 4 < nums[5] == 6.
 *
 * Constraints:
 *
 * 	1 <= nums.length <= 5 * 10^5
 * 	-2^31 <= nums[i] <= 2^31 - 1
 *
 * Follow up: Could you implement a solution that runs in O(n) time complexity and O(1) space
 * complexity?
 ******************************************************************************************************/

/**
 * @param {number[]} nums
 * @returns {boolean}
 * return true if there is an increasing triplet; false otherwise
 
 * APPROACH:
 * if there is such triplet, the smallest number in the triplet can
 * be replaced by the smallest number in the whole array up to the
 * index of the number in the middle of the triplet

 * Template: iteration
 * function-wise: smallest number seen so far - first
 * smallest number greater than first senn so far - second
 * each iteration, index = i:
 * if nums[i] > second -> return true
 * if nums[i] > first && nums[i] < second -> second = nums[i]
 * if nums[i] < first -> second = first && first = nums[i]
 */
export function increasingTriplet(nums: number[]): boolean {
  let first: number = nums[0] as number;
  let second: number = NaN;

  for (let i: number = 1; i < nums.length; i++) {
    if (!Number.isNaN(second) && (nums[i] as number) > second) return true;
    else if ((nums[i] as number) < first) {
      first = nums[i] as number;
    } else if (
      (nums[i] as number) > first &&
      (Number.isNaN(second) || (nums[i] as number) < second)
    ) {
      second = nums[i] as number;
    }
  }

  return false;
}
