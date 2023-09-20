// Source : https://leetcode.com/problems/find-the-duplicate-number/
// Author : squxq
// Date   : 2023-09-20

/*****************************************************************************************************
 *
 * Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n]
 * inclusive.
 *
 * There is only one repeated number in nums, return this repeated number.
 *
 * You must solve the problem without modifying the array nums and uses only constant extra space.
 *
 * Example 1:
 *
 * Input: nums = [1,3,4,2,2]
 * Output: 2
 *
 * Example 2:
 *
 * Input: nums = [3,1,3,4,2]
 * Output: 3
 *
 * Constraints:
 *
 * 	1 <= n <= 10^5
 * 	nums.length == n + 1
 * 	1 <= nums[i] <= n
 * 	All the integers in nums appear only once except for precisely one integer which appears
 * two or more times.
 *
 * Follow up:
 *
 * 	How can we prove that at least one duplicate number must exist in nums?
 * 	Can you solve the problem in linear runtime complexity?
 ******************************************************************************************************/

// number[] -> number
// return the repeated number in the given an array of integers n + 1 integers where each integer is in the range [1, n]

/** Stub:
function findDuplicate(nums: number[]): number { return 0 }
*/

/** Wrong Implementation of Floyd's Tortoise and Hare Algorithm
function findDuplicate(nums: number[]): number {
    if (nums.length < 3) return nums[0]
    let d: number = 1, h: number = 2

    while(nums[d] !== nums[h]) {
        if (d === nums.length - 1) d = 0
        else if (h + 2 > nums.length - 1) h = nums.length - h - 2
        d++
        h += 2
    }

    return nums[d]
};
*/

export function findDuplicate(nums: number[]): number {
  let slow: number = nums[0] as number;
  let fast: number = nums[0] as number;

  do {
    slow = nums[slow] as number;
    fast = nums[nums[fast] as number] as number;
  } while (slow !== fast);

  let ptr1: number = nums[0] as number;
  let ptr2: number = slow;
  while (ptr1 !== ptr2) {
    ptr1 = nums[ptr1] as number;
    ptr2 = nums[ptr2] as number;
  }

  return ptr1;
}
