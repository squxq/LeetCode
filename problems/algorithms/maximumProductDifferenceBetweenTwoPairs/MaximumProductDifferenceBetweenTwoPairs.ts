// Source : https://leetcode.com/problems/maximum-product-difference-between-two-pairs/
// Author : francisco
// Date   : 2023-12-19

/*****************************************************************************************************
 *
 * The product difference between two pairs (a, b) and (c, d) is defined as (a * b) - (c * d).
 *
 * 	For example, the product difference between (5, 6) and (2, 7) is (5 * 6) - (2 * 7) = 16.
 *
 * Given an integer array nums, choose four distinct indices w, x, y, and z such that the product
 * difference between pairs (nums[w], nums[x]) and (nums[y], nums[z]) is maximized.
 *
 * Return the maximum such product difference.
 *
 * Example 1:
 *
 * Input: nums = [5,6,2,7,4]
 * Output: 34
 * Explanation: We can choose indices 1 and 3 for the first pair (6, 7) and indices 2 and 4 for the
 * second pair (2, 4).
 * The product difference is (6 * 7) - (2 * 4) = 34.
 *
 * Example 2:
 *
 * Input: nums = [4,2,5,9,7,4,8]
 * Output: 64
 * Explanation: We can choose indices 3 and 6 for the first pair (9, 8) and indices 1 and 5 for the
 * second pair (2, 4).
 * The product difference is (9 * 8) - (2 * 4) = 64.
 *
 * Constraints:
 *
 * 	4 <= nums.length <= 10^4
 * 	1 <= nums[i] <= 10^4
 ******************************************************************************************************/

/* eslint-disable @typescript-eslint/no-non-null-assertion */
/**
 * @param {number[]} nums
 * @returns {number}
 * return the maximum product difference between two pairs of integers in given an integer array, nums

 * Stub:
 function maxProductDifference(nums: number[]): number {(...) return 0}

 * Tests:
 * I: nums = [5,6,2,7,4] -> O: 34
 * I: nums = [4,2,5,9,7,4,8] -> O: 64

 * Time Complexity: O(nlogn)
 * Space Complexity: O(n)

 * Runtime: 84ms (27.12%)
 * Memory: 46.33MB (30.51%)
 */
export function maxProductDifferenceV1(nums: number[]): number {
  const sortedArr: number[] = nums.sort((a: number, b: number) => b - a);
  return (
    sortedArr[0]! * sortedArr[1]! -
    sortedArr[nums.length - 2]! * sortedArr[nums.length - 1]!
  );
}

/**
 * @param {number[]} nums
 * @returns {number}

 * Time Complexity: O(n)
 * Space Complexity: O(1)

 * Runtime: 53ms (98.31%)
 * Memory: 45.65MB (79.66%)
 */
export function maxProductDifference(nums: number[]): number {
  const numbers: { a: number; b: number; c: number; d: number } = {
    a: Number.MIN_SAFE_INTEGER,
    b: Number.MIN_SAFE_INTEGER,
    c: Number.MAX_SAFE_INTEGER,
    d: Number.MAX_SAFE_INTEGER,
  };

  for (let index: number = 0; index < nums.length; index++) {
    if (nums[index]! > numbers.a) {
      numbers.b = numbers.a;
      numbers.a = nums[index] as number;
    } else if (nums[index]! > numbers.b) {
      numbers.b = nums[index] as number;
    }

    if (nums[index]! < numbers.c) {
      numbers.d = numbers.c;
      numbers.c = nums[index] as number;
    } else if (nums[index]! < numbers.d) {
      numbers.d = nums[index] as number;
    }
  }

  return numbers.a * numbers.b - numbers.c * numbers.d;
}
