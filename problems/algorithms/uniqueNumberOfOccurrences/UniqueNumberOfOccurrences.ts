// Source : https://leetcode.com/problems/unique-number-of-occurrences/
// Author : francisco
// Date   : 2024-01-17

/*****************************************************************************************************
 *
 * Given an array of integers arr, return true if the number of occurrences of each value in the array
 * is unique or false otherwise.
 *
 * Example 1:
 *
 * Input: arr = [1,2,2,1,1,3]
 * Output: true
 * Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number
 * of occurrences.
 *
 * Example 2:
 *
 * Input: arr = [1,2]
 * Output: false
 *
 * Example 3:
 *
 * Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
 * Output: true
 *
 * Constraints:
 *
 * 	1 <= arr.length <= 1000
 * 	-1000 <= arr[i] <= 1000
 ******************************************************************************************************/

/**
 * @param {number[]} arr
 * @returns {boolean}
 * return true if the number of occurrences of each value in the array is unique; false otherwise

 * Tests:
 * I: arr = [1,2,2,1,1,3] -> O: true
 * I: arr = [1,2] -> O: false
 * I: arr = [-3,0,1,-3,1,1,1,-3,10,0] -> O: false

 * Template: 
 * hash -> occurrences + iteration arr
 * occurrences array iteration
 * to check for unique values - iterate through occurrences array and verify

 * Time Complexity: O(n), where n is arr.length
 * Space Complexity: O(n)
 */
export function uniqueOccurrencesV1(arr: number[]): boolean {
  const occurrencesHash: Record<number, number> = {};

  for (const num of arr) {
    occurrencesHash[num] = (occurrencesHash[num] ?? 0) + 1;
  }

  const occurrencesArr: number[] = Object.values(occurrencesHash);

  for (let index: number = 0; index < occurrencesArr.length; index++) {
    if (index !== occurrencesArr.lastIndexOf(occurrencesArr[index] as number))
      return false;
  }

  return true;
}

// or for a better runtime

/**
 * @param {number[]} arr
 * @returns {boolean}
 * same purpose as previous function

 * Template:
 * map for occurrences iterating through arr
 * set for unique occurrences of map
 * different way of checking for unique values (difference between map and set size)

 * Time Complexity: O(n), where n is arr.length
 * Space Complexity: O(n)
 */
export function uniqueOccurrences(arr: number[]): boolean {
  const occurrences = new Map<number, number>();

  for (const num of arr) occurrences.set(num, (occurrences.get(num) ?? 0) + 1);

  const uniqueOccurrences = new Set<number>(occurrences.values());

  return occurrences.size === uniqueOccurrences.size;
}
