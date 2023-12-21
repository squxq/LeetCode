// Source : https://leetcode.com/problems/widest-vertical-area-between-two-points-containing-no-points/
// Author : francisco
// Date   : 2023-12-21

/*****************************************************************************************************
 *
 * Given n points on a 2D plane where points[i] = [xi, yi], Return the widest vertical area between
 * two points such that no points are inside the area.
 *
 * A vertical area is an area of fixed-width extending infinitely along the y-axis (i.e., infinite
 * height). The widest vertical area is the one with the maximum width.
 *
 * Note that points on the edge of a vertical area are not considered included in the area.
 *
 * Example 1:
 *
 * Input: points = [[8,7],[9,9],[7,4],[9,7]]
 * Output: 1
 * Explanation: Both the red and the blue area are optimal.
 *
 * Example 2:
 *
 * Input: points = [[3,1],[9,0],[1,0],[1,4],[5,3],[8,8]]
 * Output: 3
 *
 * Constraints:
 *
 * 	n == points.length
 * 	2 <= n <= 10^5
 * 	points[i].length == 2
 * 	0 <= xi, yi <= 10^9
 ******************************************************************************************************/

/** return the maximum distance between two point's x coordinates
 * @param {number[][]} points
 * @returns {number}

 * Tests:
 * I: points = [[8,7],[9,9],[7,4],[9,7]] -> O: 1
 * I: points = [[3,1],[9,0],[1,0],[1,4],[5,3],[8,8]] -> O: 3
 * I: points = [[2,4],[10,10],[6,8],[6,8],[6,10],[8,6],[5,3]] -> O: 3

 * Time Complexity: O(n * logn), where n is points.length
 * Space Complexity: O(logn)

 * Runtime: 144ms (88.89%)
 * Memory: 70.43MB (72.22%)
 */
export function maxWidthOfVerticalArea(points: number[][]): number {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  points.sort(([a]: number[], [b]: number[]) => a! - b!);

  let ans: number = Number.MIN_SAFE_INTEGER;
  for (let i: number = 1; i < points.length; i++) {
    const diff: number =
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      (points[i]![0] as number) - (points[i - 1]![0] as number);
    if (diff > ans) ans = diff;
  }

  return ans;
}
