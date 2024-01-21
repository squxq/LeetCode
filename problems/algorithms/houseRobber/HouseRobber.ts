// Source : https://leetcode.com/problems/house-robber/
// Author : francisco
// Date   : 2024-01-21

/*****************************************************************************************************
 *
 * You are a professional robber planning to rob houses along a street. Each house has a certain
 * amount of money stashed, the only constraint stopping you from robbing each of them is that
 * adjacent houses have security systems connected and it will automatically contact the police if two
 * adjacent houses were broken into on the same night.
 *
 * Given an integer array nums representing the amount of money of each house, return the maximum
 * amount of money you can rob tonight without alerting the police.
 *
 * Example 1:
 *
 * Input: nums = [1,2,3,1]
 * Output: 4
 * Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
 * Total amount you can rob = 1 + 3 = 4.
 *
 * Example 2:
 *
 * Input: nums = [2,7,9,3,1]
 * Output: 12
 * Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
 * Total amount you can rob = 2 + 9 + 1 = 12.
 *
 * Constraints:
 *
 * 	1 <= nums.length <= 100
 * 	0 <= nums[i] <= 400
 ******************************************************************************************************/

/**
 * @param {number[]} nums
 * @returns {number}
 * return the maximum amount of money possible to rob without alerting the police
 * NOTE: it will contact the police if two adjacent houses were borken into on the same night

 * Tests:
 * I: nums = [1,2,3,1] -> O: 4
 * I: nums = [2,7,9,3,1] -> O: 12
  position:
                  1
          2               3
      3       1       1       {}
    1   {}  {} {}   {} {}
  {} {}    

  sum:
                  0
          0               1
      0       2       1       4
    0   3   2   3   1   2
  0   1
  sum-values (leafs) = [0, 1, 3, 2, 3, 1, 2, 4] => O: 4   

 * Template:
 * resursion, dfs - index: number
 * memoization, cache: number[] -> nums.length unique values

 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
export function rob(nums: number[]): number {
  const cache: number[] = new Array(nums.length);

  /**
   * @param {number} index
   * @returns {number}
   */
  function dfs(index: number): number {
    if (index >= nums.length) return 0;
    if (cache[index] !== undefined) return cache[index] as number;

    return (cache[index] = Math.max(
      dfs(index + 1),
      (nums[index] as number) + dfs(index + 2),
    ));
  }

  return dfs(0);
}
