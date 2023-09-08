// Source : https://leetcode.com/problems/majority-element/
// Author : squxq
// Date   : 2023-09-08

/** ***************************************************************************************************
 *
 * Given an array nums of size n, return the majority element.
 *
 * The majority element is the element that appears more than &lfloor;n / 2&rfloor; times. You may
 * assume that the majority element always exists in the array.
 *
 * Example 1:
 * Input: nums = [3,2,3]
 * Output: 3
 * Example 2:
 * Input: nums = [2,2,1,1,1,2,2]
 * Output: 2
 *
 * Constraints:
 *
 * 	n == nums.length
 * 	1 <= n <= 5 * 10^4
 * 	-10^9 <= nums[i] <= 10^9
 *
 * Follow-up: Could you solve the problem in linear time and in O(1) space?
 ******************************************************************************************************/

export function majorityElement(nums: number[]): number {
  // first submit

  // const countNumbers = {}
  // let maxCount = 0, majority: number
  // for (let num of nums) {
  //     if (countNumbers[num]) {
  //         countNumbers[num]++
  //     } else {
  //         countNumbers[num] = 1
  //     }
  //     if (countNumbers[num] > maxCount) {
  //         maxCount = countNumbers[num]
  //         majority = num
  //     }
  // }
  // return majority

  // second submit - Boyer–Moore majority vote algorithm
  let majority!: number;
  let counter: number = 0;
  for (const num of nums) {
    if (counter === 0) {
      majority = num;
    }

    counter += majority === num ? 1 : -1;
  }

  return majority;
}
