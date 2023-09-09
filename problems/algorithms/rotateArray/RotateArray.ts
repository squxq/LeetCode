// Source : https://leetcode.com/problems/rotate-array/
// Author : squxq
// Date   : 2023-09-09

/** ***************************************************************************************************
 *
 * Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
 *
 * Example 1:
 *
 * Input: nums = [1,2,3,4,5,6,7], k = 3
 * Output: [5,6,7,1,2,3,4]
 * Explanation:
 * rotate 1 steps to the right: [7,1,2,3,4,5,6]
 * rotate 2 steps to the right: [6,7,1,2,3,4,5]
 * rotate 3 steps to the right: [5,6,7,1,2,3,4]
 *
 * Example 2:
 *
 * Input: nums = [-1,-100,3,99], k = 2
 * Output: [3,99,-1,-100]
 * Explanation:
 * rotate 1 steps to the right: [99,-1,-100,3]
 * rotate 2 steps to the right: [3,99,-1,-100]
 *
 * Constraints:
 *
 * 	1 <= nums.length <= 10^5
 * 	-2^31 <= nums[i] <= 2^31 - 1
 * 	0 <= k <= 10^5
 *
 * Follow up:
 *
 * 	Try to come up with as many solutions as you can. There are at least three different ways
 * to solve this problem.
 * 	Could you do it in-place with O(1) extra space?
 ******************************************************************************************************/

export /**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  // first submit

  // let temp: number;
  // for (let i: number = 0; i < k; i++) {
  //     temp = nums[nums.length - 1]
  //     for (let j: number = nums.length - 1; j > 0; j--) {
  //         nums[j] = nums[j - 1]
  //     }
  //     nums[0] = temp
  // }

  // second submit
  // while (k--) {
  //     nums.unshift(nums.pop())
  // }

  // third submit
  k = k % nums.length;
  nums = reverseArr(nums, 0, nums.length - 1);
  nums = reverseArr(nums, 0, k - 1);
  nums = reverseArr(nums, k, nums.length - 1);
}

function reverseArr(nums: number[], l: number, r: number): number[] {
  while (l < r) {
    const temp = nums[l];
    nums[l] = nums[r] as number;
    nums[r] = temp as number;
    l++;
    r--;
  }

  return nums;
}
