// Source : https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/
// Author : squxq
// Date   : 2023-11-04

/*****************************************************************************************************
 *
 * You are given an integer array nums and an integer x. In one operation, you can either remove the
 * leftmost or the rightmost element from the array nums and subtract its value from x. Note that this
 * modifies the array for future operations.
 *
 * Return the minimum number of operations to reduce x to exactly 0 if it is possible, otherwise,
 * return -1.
 *
 * Example 1:
 *
 * Input: nums = [1,1,4,2,3], x = 5
 * Output: 2
 * Explanation: The optimal solution is to remove the last two elements to reduce x to zero.
 *
 * Example 2:
 *
 * Input: nums = [5,6,7,8,9], x = 4
 * Output: -1
 *
 * Example 3:
 *
 * Input: nums = [3,2,20,1,1,3], x = 10
 * Output: 5
 * Explanation: The optimal solution is to remove the last three elements and the first two elements
 * (5 operations in total) to reduce x to zero.
 *
 * Constraints:
 *
 * 	1 <= nums.length <= 10^5
 * 	1 <= nums[i] <= 10^4
 * 	1 <= x <= 10^9
 ******************************************************************************************************/

export function minOperations(nums: number[], x: number): number {
  let sum: number = 0;
  for (const num of nums) {
    sum += num;
  }

  if (sum < x) {
    return -1;
  }

  const subSum: number = sum - x;
  let maxLength: number = -1;
  let currentSum: number = 0;
  let left: number = 0;

  for (let right: number = 0; right < nums.length; right++) {
    currentSum += nums[right] as number;

    while (currentSum > subSum) {
      currentSum -= nums[left] as number;
      left++;
    }

    if (currentSum === subSum) {
      maxLength = Math.max(maxLength, right - left + 1);
    }
  }

  return maxLength !== -1 ? nums.length - maxLength : -1;
}
