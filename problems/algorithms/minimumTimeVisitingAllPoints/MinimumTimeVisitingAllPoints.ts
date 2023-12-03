// Source : https://leetcode.com/problems/minimum-time-visiting-all-points/
// Author : Francisco Tomas
// Date   : 2023-12-03

/*****************************************************************************************************
 *
 * On a 2D plane, there are n points with integer coordinates points[i] = [xi, yi]. Return the minimum
 * time in seconds to visit all the points in the order given by points.
 *
 * You can move according to these rules:
 *
 * 	In 1 second, you can either:
 *
 * 		move vertically by one unit,
 * 		move horizontally by one unit, or
 * 		move diagonally sqrt(2) units (in other words, move one unit vertically then one
 * unit horizontally in 1 second).
 *
 * 	You have to visit the points in the same order as they appear in the array.
 * 	You are allowed to pass through points that appear later in the order, but these do not
 * count as visits.
 *
 * Example 1:
 *
 * Input: points = [[1,1],[3,4],[-1,0]]
 * Output: 7
 * Explanation: One optimal path is [1,1] -> [2,2] -> [3,3] -> [3,4] -> [2,3] -> [1,2] -> [0,1] ->
 * [-1,0]
 * Time from [1,1] to [3,4] = 3 seconds
 * Time from [3,4] to [-1,0] = 4 seconds
 * Total time = 7 seconds
 *
 * Example 2:
 *
 * Input: points = [[3,2],[-2,2]]
 * Output: 5
 *
 * Constraints:
 *
 * 	points.length == n
 * 	1 <= n <= 100
 * 	points[i].length == 2
 * 	-1000 <= points[i][0], points[i][1] <= 1000
 ******************************************************************************************************/

/**
 * number[][] -> number
 * return the minimum time in seconds to visit all the points (in order) in the given array points

 * Stub:
 function minTimeToVisitAllPoints(points: number[][]): number {return 0}

 * Tests:
 * I: points = [[1,1],[3,4],[-1,0]] -> O: 7
 * I: points = [[3,2],[-2,2]] -> O: 5
 */

/**
 * Time Complexity: O(n), where n is the length of points
 * Space Complexity: O(1)

 * Runtime: 63ms (44.12%)
 * Memory: 44.28MB (97.06%)
 */
export function minTimeToVisitAllPointsV1(points: number[][]): number {
  let ans: number = 0;
  for (let i: number = 1; i < points.length; i++) {
    ans += Math.max(
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      Math.abs(points[i]![0]! - points[i - 1]![0]!),
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      Math.abs(points[i]![1]! - points[i - 1]![1]!),
    );
  }
  return ans;
}

/**
 * Time Complexity: O(n), where n is the length of points
 * Space Complexity: O(1)

 * Runtime: 46ms (97.06%)
 * Memory: 44.70MB (55.88%)
 */
export function minTimeToVisitAllPoints(points: number[][]): number {
  let ans: number = 0;
  for (let i: number = 1; i < points.length; i++) {
    const point1: number[] = points[i - 1] as number[];
    const point2: number[] = points[i] as number[];
    ans += Math.max(
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      Math.abs(point2[0]! - point1[0]!),
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      Math.abs(point2[1]! - point1[1]!),
    );
  }
  return ans;
}
