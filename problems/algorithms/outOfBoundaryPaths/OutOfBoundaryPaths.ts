// Source : https://leetcode.com/problems/out-of-boundary-paths/
// Author : francisco
// Date   : 2024-01-26

/*****************************************************************************************************
 *
 * There is an m x n grid with a ball. The ball is initially at the position [startRow, startColumn].
 * You are allowed to move the ball to one of the four adjacent cells in the grid (possibly out of the
 * grid crossing the grid boundary). You can apply at most maxMove moves to the ball.
 *
 * Given the five integers m, n, maxMove, startRow, startColumn, return the number of paths to move
 * the ball out of the grid boundary. Since the answer can be very large, return it modulo 10^9 + 7.
 *
 * Example 1:
 *
 * Input: m = 2, n = 2, maxMove = 2, startRow = 0, startColumn = 0
 * Output: 6
 *
 * Example 2:
 *
 * Input: m = 1, n = 3, maxMove = 3, startRow = 0, startColumn = 1
 * Output: 12
 *
 * Constraints:
 *
 * 	1 <= m, n <= 50
 * 	0 <= maxMove <= 50
 * 	0 <= startRow < m
 * 	0 <= startColumn < n
 ******************************************************************************************************/

/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @returns {number}
 * return the number of paths to move the ball out of the grid boundary

 * Tests:
 * I: m = 2, n = 2, maxMove = 2, startRow = 0, startColumn = 0 -> O: 6
 * I: m = 1, n = 3, maxMove = 3, startRow = 0, startColumn = 1 -> O: 12

 * Template: dp

 * Time Complexity: O(maxMove * m * n)
 * Space Complexity: O(m * n)
 */
export function findPaths(
  m: number,
  n: number,
  maxMove: number,
  startRow: number,
  startColumn: number,
): number {
  const M: number = 1000000000 + 7;

  let count: number = 0;
  let dp: number[][] = new Array(m).fill(0).map(() => new Array(n).fill(0));

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  dp[startRow]![startColumn] = 1;

  for (let moves: number = 1; moves <= maxMove; moves++) {
    const temp: number[][] = new Array(m)
      .fill(0)
      .map(() => new Array(n).fill(0));

    for (let i: number = 0; i < m; i++) {
      for (let j: number = 0; j < n; j++) {
        if (i === m - 1) count = (count + (dp[i]?.[j] as number)) % M;
        if (j === n - 1) count = (count + (dp[i]?.[j] as number)) % M;
        if (i === 0) count = (count + (dp[i]?.[j] as number)) % M;
        if (j === 0) count = (count + (dp[i]?.[j] as number)) % M;

        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        temp[i]![j] =
          ((((i > 0 ? (dp[i - 1]?.[j] as number) : 0) +
            (i < m - 1 ? (dp[i + 1]?.[j] as number) : 0)) %
            M) +
            (((j > 0 ? (dp[i]?.[j - 1] as number) : 0) +
              (j < n - 1 ? (dp[i]?.[j + 1] as number) : 0)) %
              M)) %
          M;
      }
    }

    dp = temp;
  }

  return count;
}
