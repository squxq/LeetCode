// Source : https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/
// Author : francisco
// Date   : 2023-12-18

/*****************************************************************************************************
 *
 * Given an integer array sorted in non-decreasing order, there is exactly one integer in the array
 * that occurs more than 25% of the time, return that integer.
 *
 * Example 1:
 *
 * Input: arr = [1,2,2,6,6,6,6,7,10]
 * Output: 6
 *
 * Example 2:
 *
 * Input: arr = [1,1]
 * Output: 1
 *
 * Constraints:
 *
 * 	1 <= arr.length <= 10^4
 * 	0 <= arr[i] <= 10^5
 ******************************************************************************************************/

/**
 * @param {number[]} arr
 * @returns {number}
 * given an integer array sorted in non decreasing order, arr, return the integer that occurs more than 25% of time
 * ASSUME: there is exactly one integer that occurs more than 25% of the time

 * Stub:
 function findSpecialInteger(arr: number[]): number {return 0}

 * Tests:
 * I: arr = [1,2,2,6,6,6,6,7,10] -> O: 6
 * I: arr = [1,1] -> O: 1
 * I: arr = [1] -> O: 1
 * I; arr = [1,2,3,4,5,6,7,8,9,10,11,12,12,12,12] -> O: 12

 * Time Complexity: O(n), where n is the length of arr
 * Space Complexity: O(1)

 * Runtime: 60ms (65.12%)
 * Memory: 44.59MB (97.67%)
 */
export function findSpecialIntegerV1(arr: number[]): number {
  const quarter: number = Math.floor(arr.length / 4);
  let j: number = 0;
  for (let i: number = 1; i < arr.length; i++) {
    if (arr[i] === arr[j]) {
      if (i - j >= quarter) return arr[i] as number;
    } else {
      j++;
    }
  }
  return arr[0] as number;
}

/**
 * @param {number[]} arr
 * @returns {number}

 * Time Complexity: O(n), where n is the length of arr
 * Space Complexity: O(1)

 * Runtime: 57ms (76.74%)
 * Memory: 44.60MB (97.67%)
 */
export function findSpecialIntegerV2(arr: number[]): number {
  const quarter: number = Math.floor(arr.length / 4);
  for (let i: number = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + quarter]) return arr[i] as number;
  }

  return 0;
}
