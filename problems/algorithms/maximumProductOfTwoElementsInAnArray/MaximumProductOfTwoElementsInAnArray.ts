// Source : https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/
// Author : francisco
// Date   : 2023-12-18

/*****************************************************************************************************
 *
 * Given the array of integers nums, you will choose two different indices i and j of that array.
 * Return the maximum value of (nums[i]-1)*(nums[j]-1).
 *
 * Example 1:
 *
 * Input: nums = [3,4,5,2]
 * Output: 12
 * Explanation: If you choose the indices i=1 and j=2 (indexed from 0), you will get the maximum
 * value, that is, (nums[1]-1)*(nums[2]-1) = (4-1)*(5-1) = 3*4 = 12.
 *
 * Example 2:
 *
 * Input: nums = [1,5,4,5]
 * Output: 16
 * Explanation: Choosing the indices i=1 and j=3 (indexed from 0), you will get the maximum value of
 * (5-1)*(5-1) = 16.
 *
 * Example 3:
 *
 * Input: nums = [3,7]
 * Output: 12
 *
 * Constraints:
 *
 * 	2 <= nums.length <= 500
 * 	1 <= nums[i] <= 10^3
 ******************************************************************************************************/

/**
 * @param {number[]} nums
 * @returns {number}

 * return the maximum value of the product of two elements in the given array of integers, nums

 * Stub:
 function maxProduct(nums: number[]): number {return 0}

 * Tests:
 * I: nums = [3,4,5,2] -> O: 12
 * I: nums = [1,5,4,5] -> O: 16
 * I: nums = [3,7] -> O: 12
 
 * Time Complexity: O(nlogn), where n is nums length
 * Space Complexity: O(logn)

 * Runtime: 55ms (79.70%)
 * Memory: 45.28MB (45.28%)
 */

// function maxProductV1(nums: number[]): number {
//     const sortedArr: number[] = nums.sort((a: number, b: number) => b - a)
//     return (sortedArr[0] - 1) * (sortedArr[1] - 1)
// };

/**
 * @param {number[]} nums
 * @returns {number}

 * Time Complexity: O(n), where n is nums length
 * Space Complexity: O(1)

 * Runtime: 40ms (99.49%)
 * Memory: 44.75MB (61.42%)
 */
export function maxProduct(nums: number[]): number {
  let firstB: number = 0;
  let secondB: number = 0;

  for (const num of nums) {
    if (num > firstB) {
      secondB = firstB;
      firstB = num;
    } else {
      secondB = Math.max(num, secondB);
    }
  }

  return (firstB - 1) * (secondB - 1);
}
