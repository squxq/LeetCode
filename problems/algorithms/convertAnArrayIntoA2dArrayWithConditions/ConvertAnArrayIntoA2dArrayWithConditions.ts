// Source : https://leetcode.com/problems/convert-an-array-into-a-2d-array-with-conditions/
// Author : francisco
// Date   : 2024-01-03

/*****************************************************************************************************
 *
 * You are given an integer array nums. You need to create a 2D array from nums satisfying the
 * following conditions:
 *
 * 	The 2D array should contain only the elements of the array nums.
 * 	Each row in the 2D array contains distinct integers.
 * 	The number of rows in the 2D array should be minimal.
 *
 * Return the resulting array. If there are multiple answers, return any of them.
 *
 * Note that the 2D array can have a different number of elements on each row.
 *
 * Example 1:
 *
 * Input: nums = [1,3,4,1,2,3,1]
 * Output: [[1,3,4,2],[1,3],[1]]
 * Explanation: We can create a 2D array that contains the following rows:
 * - 1,3,4,2
 * - 1,3
 * - 1
 * All elements of nums were used, and each row of the 2D array contains distinct integers, so it is a
 * valid answer.
 * It can be shown that we cannot have less than 3 rows in a valid array.
 *
 * Example 2:
 *
 * Input: nums = [1,2,3,4]
 * Output: [[4,3,2,1]]
 * Explanation: All elements of the array are distinct, so we can keep all of them in the first row of
 * the 2D array.
 *
 * Constraints:
 *
 * 	1 <= nums.length <= 200
 * 	1 <= nums[i] <= nums.length
 ******************************************************************************************************/

/**
 * @param {number[]} nums
 * @returns {number[][]}
 * given an integer array, nums, return a 2D array from nums satisfying the following conditions:
 * - the 2D array should contain only the elements of the array nums
 * - each row in the 2D array contains distinct integers
 * - the number of rows in the 2D array should be minimal
 * NOTE: the 2D array can have a different number of elements on each row

 * Tests:
 * I: nums = [1,3,4,1,2,3,1] -> O: [[1,3,4,2],[1,3],[1]]
 * I: nums = [1,2,3,4] -> O: [[4,3,2,1]]

 * Template:
 function findMatrix(nums: number[]): number[][] {
   const ans: number[][] = []
   
   for (const num of nums) {
     // go through ans, if the first row contains num then go to the second row
     // if the second row doesnt contain num then add it
     // if the second row contains num and there are no more rows create row with num
   }

   return ans
 }

 * CONTRAINTS:
 * - 1 <= nums.length <= 200
 * - 1 <= nums[i] <= nums.length

 * Time Complexity: O(n^2), where n is nums.length
 * Space Complexity: O(n)
 */
export function findMatrixV1(nums: number[]): number[][] {
  const ans: number[][] = [];

  for (const num of nums) {
    let added: boolean = false;

    for (const row of ans) {
      if (!row.includes(num)) {
        row.push(num);
        added = true;
        break;
      }
    }

    if (!added) ans.push([num]);
  }

  return ans;
}

/**
 * @param {number[]} nums
 * @returns {number[][]}

 * Time Complexity: O(n), where n is nums.length
 * Space Complexity: O(n)
 */
export function findMatrix(nums: number[]): number[][] {
  const frequencies: number[] = Array(nums.length + 1).fill(0);
  const ans: number[][] = [];

  for (const num of nums) {
    const frequency: number = frequencies[num]++;

    if (frequency >= ans.length) {
      ans.push([]);
    }

    ans[frequency]?.push(num);
  }

  return ans;
}
