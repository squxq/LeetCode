// Source : https://leetcode.com/problems/minimum-time-to-make-rope-colorful/
// Author : francisco
// Date   : 2024-01-02

/*****************************************************************************************************
 *
 * Alice has n balloons arranged on a rope. You are given a 0-indexed string colors where colors[i] is
 * the color of the i^th balloon.
 *
 * Alice wants the rope to be colorful. She does not want two consecutive balloons to be of the same
 * color, so she asks Bob for help. Bob can remove some balloons from the rope to make it colorful.
 * You are given a 0-indexed integer array neededTime where neededTime[i] is the time (in seconds)
 * that Bob needs to remove the i^th balloon from the rope.
 *
 * Return the minimum time Bob needs to make the rope colorful.
 *
 * Example 1:
 *
 * Input: colors = "abaac", neededTime = [1,2,3,4,5]
 * Output: 3
 * Explanation: In the above image, 'a' is blue, 'b' is red, and 'c' is green.
 * Bob can remove the blue balloon at index 2. This takes 3 seconds.
 * There are no longer two consecutive balloons of the same color. Total time = 3.
 *
 * Example 2:
 *
 * Input: colors = "abc", neededTime = [1,2,3]
 * Output: 0
 * Explanation: The rope is already colorful. Bob does not need to remove any balloons from the rope.
 *
 * Example 3:
 *
 * Input: colors = "aabaa", neededTime = [1,2,3,4,1]
 * Output: 2
 * Explanation: Bob will remove the balloons at indices 0 and 4. Each balloons takes 1 second to
 * remove.
 * There are no longer two consecutive balloons of the same color. Total time = 1 + 1 = 2.
 *
 * Constraints:
 *
 * 	n == colors.length == neededTime.length
 * 	1 <= n <= 10^5
 * 	1 <= neededTime[i] <= 10^4
 * 	colors contains only lowercase English letters.
 ******************************************************************************************************/

/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @returns {number}
 * return the minimum time to remove all consecutive ballons of the same color

 * Tests:
 * I: colors = "abaac", neededTime = [1,2,3,4,5] -> O: 3
 * I: colors = "abc", neededTime = [1,2,3] -> O: 0
 * I: colors = "aabaa", neededTime = [1,2,3,4,1] -> O: 2
 * I: colors = "bbbaaa", neededTime = [4,9,3,8,8,9] -> O: 23

 * Template: 
 function minCost(colors: string, neededTime: number[]): number {
   return 0
 }

 * Time Complexity: O(n * logn)
 * Space Complexity: O(n)
 */
export function minCostV1(colors: string, neededTime: number[]): number {
  let ans: number = 0;
  let j: number = 0;
  let repeating: number = 0;

  for (let i: number = 1; i <= colors.length; i++) {
    if (colors[j] === colors[i]) {
      repeating++;
    } else {
      if (repeating !== 0) {
        const sorted: number[] = neededTime
          .slice(j, i)
          .sort((a: number, b: number) => a - b);
        ans += sorted
          .slice(0, -1)
          .reduce((sum: number, num: number) => sum + num, 0);
        j = i;
        repeating = 0;
      } else j++;
    }
  }

  return ans;
}

/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @returns {number}
 * same purpose as previous function, since this is a version of it

 * Tests:
 * I: colors = "aaabbbabbbb", neededTime = [3,5,10,7,5,3,5,5,4,8,1] -> O: 26

 * Template: <two pointers ("l" && "r") + accumulator "time">
 function minCost(colors: string, neededTime: number[]): number {
   let time: number = 0
   let l: number = 0

   for (let r: number = 1; r < colors.length; r++) {
     (... colors[l] colors[r])
   }

   return time
 }

 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
export function minCost(colors: string, neededTime: number[]): number {
  let time: number = 0;
  let l: number = 0;

  for (let r: number = 1; r < colors.length; r++) {
    if (colors[l] === colors[r]) {
      if ((neededTime[r] as number) < (neededTime[l] as number)) {
        time += neededTime[r] as number;
        continue;
      }

      time += neededTime[l] as number;
    }

    l = r;
  }

  return time;
}
