// Source : https://leetcode.com/problems/product-of-array-except-self/
// Author : francisco
// Date   : 2024-01-07

/*****************************************************************************************************
 *
 * Given an integer array nums, return an array answer such that answer[i] is equal to the product of
 * all the elements of nums except nums[i].
 *
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 *
 * You must write an algorithm that runs in O(n) time and without using the division operation.
 *
 * Example 1:
 * Input: nums = [1,2,3,4]
 * Output: [24,12,8,6]
 * Example 2:
 * Input: nums = [-1,1,0,-3,3]
 * Output: [0,0,9,0,0]
 *
 * Constraints:
 *
 * 	2 <= nums.length <= 10^5
 * 	-30 <= nums[i] <= 30
 * 	The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 *
 * Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not
 * count as extra space for space complexity analysis.)
 ******************************************************************************************************/

/**
 * @param {number[]} nums
 * @returns {number[]}
 * given an integer array, nums, return an array, answer, such that answer[i]
 * is the product of all the lements of nums except nums[i]

 * Stub:
 function productExceptSelf(nums: number[]): number[] {return []}

 * Tests:
 * I: nums = [1,2,3,4] -> O: [24,12,8,6]
 * I: nums = [-1,1,0,-3,3] -> O: [0,0,9,0,0]

 * Template: iteration
 * for loop over nums - each iteration left-product * right-product
 * left-product is the product of all the elements in the left of the current element
 * right-product is the product of all the elements in the right of the current element
 * left-product starts off at being 1 while

 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
export function productExceptSelf(nums: number[]): number[] {
  const n: number = nums.length;
  const ans: number[] = new Array(n).fill(1);
  let left: number = 1;

  for (let i: number = n - 2; i >= 0; i--) {
    ans[i] *= (nums[i + 1] as number) * (ans[i + 1] as number);
  }

  for (let i: number = 0; i < n; i++) {
    ans[i] = left * (ans[i] as number);
    left *= nums[i] as number;
  }

  return ans;
}
