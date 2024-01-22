// Source : https://leetcode.com/problems/set-mismatch/
// Author : francisco
// Date   : 2024-01-22

/*****************************************************************************************************
 *
 * You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately,
 * due to some error, one of the numbers in s got duplicated to another number in the set, which
 * results in repetition of one number and loss of another number.
 *
 * You are given an integer array nums representing the data status of this set after the error.
 *
 * Find the number that occurs twice and the number that is missing and return them in the form of an
 * array.
 *
 * Example 1:
 * Input: nums = [1,2,2,4]
 * Output: [2,3]
 * Example 2:
 * Input: nums = [1,1]
 * Output: [1,2]
 *
 * Constraints:
 *
 * 	2 <= nums.length <= 10^4
 * 	1 <= nums[i] <= 10^4
 ******************************************************************************************************/

/**
 * @param {number[]} nums
 * @returns {number[]}
 * find the number that occurs twice and the number that is missing and return them in the form of an array

 * Tests:
 * I: nums = [1,2,2,4] -> O: [2,3]
 * I: nums = [1,1] -> O: [1,2]

 * Template:
 * set for numbers seen so far, seen
 * iteration nums - keep a sum accumulator, sum to count the sum of all unique numbers
 * sum of an arithmetic progression is: S = n/2 * (a1 + an), where a1 is the first term and an is the last
 * by replacing a1 with 1 and an with the length of the array, n, we get: S = (n * (1 + n))/2

 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
export function findErrorNums(nums: number[]): number[] {
  const result: number[] = [0, 0];

  const seen = new Set<number>();
  let sum: number = 0;

  for (const n of nums) {
    if (seen.has(n)) result[0] = n;
    else {
      seen.add(n);
      sum += n;
    }
  }

  result[1] = (nums.length * (1 + nums.length)) / 2 - sum;

  return result;
}
