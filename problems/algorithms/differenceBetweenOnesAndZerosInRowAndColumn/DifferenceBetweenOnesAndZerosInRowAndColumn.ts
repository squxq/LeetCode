// Source : https://leetcode.com/problems/difference-between-ones-and-zeros-in-row-and-column/
// Author : francisco
// Date   : 2023-12-19

/*****************************************************************************************************
 *
 * You are given a 0-indexed m x n binary matrix grid.
 *
 * A 0-indexed m x n difference matrix diff is created with the following procedure:
 *
 * 	Let the number of ones in the i^th row be onesRowi.
 * 	Let the number of ones in the j^th column be onesColj.
 * 	Let the number of zeros in the i^th row be zerosRowi.
 * 	Let the number of zeros in the j^th column be zerosColj.
 * 	diff[i][j] = onesRowi + onesColj - zerosRowi - zerosColj
 *
 * Return the difference matrix diff.
 *
 * Example 1:
 *
 * Input: grid = [[0,1,1],[1,0,1],[0,0,1]]
 * Output: [[0,0,4],[0,0,4],[-2,-2,2]]
 * Explanation:
 * - diff[0][0] = onesRow0 + onesCol0 - zerosRow0 - zerosCol0 = 2 + 1 - 1 - 2 = 0
 * - diff[0][1] = onesRow0 + onesCol1 - zerosRow0 - zerosCol1 = 2 + 1 - 1 - 2 = 0
 * - diff[0][2] = onesRow0 + onesCol2 - zerosRow0 - zerosCol2 = 2 + 3 - 1 - 0 = 4
 * - diff[1][0] = onesRow1 + onesCol0 - zerosRow1 - zerosCol0 = 2 + 1 - 1 - 2 = 0
 * - diff[1][1] = onesRow1 + onesCol1 - zerosRow1 - zerosCol1 = 2 + 1 - 1 - 2 = 0
 * - diff[1][2] = onesRow1 + onesCol2 - zerosRow1 - zerosCol2 = 2 + 3 - 1 - 0 = 4
 * - diff[2][0] = onesRow2 + onesCol0 - zerosRow2 - zerosCol0 = 1 + 1 - 2 - 2 = -2
 * - diff[2][1] = onesRow2 + onesCol1 - zerosRow2 - zerosCol1 = 1 + 1 - 2 - 2 = -2
 * - diff[2][2] = onesRow2 + onesCol2 - zerosRow2 - zerosCol2 = 1 + 3 - 2 - 0 = 2
 *
 * Example 2:
 *
 * Input: grid = [[1,1,1],[1,1,1]]
 * Output: [[5,5,5],[5,5,5]]
 * Explanation:
 * - diff[0][0] = onesRow0 + onesCol0 - zerosRow0 - zerosCol0 = 3 + 2 - 0 - 0 = 5
 * - diff[0][1] = onesRow0 + onesCol1 - zerosRow0 - zerosCol1 = 3 + 2 - 0 - 0 = 5
 * - diff[0][2] = onesRow0 + onesCol2 - zerosRow0 - zerosCol2 = 3 + 2 - 0 - 0 = 5
 * - diff[1][0] = onesRow1 + onesCol0 - zerosRow1 - zerosCol0 = 3 + 2 - 0 - 0 = 5
 * - diff[1][1] = onesRow1 + onesCol1 - zerosRow1 - zerosCol1 = 3 + 2 - 0 - 0 = 5
 * - diff[1][2] = onesRow1 + onesCol2 - zerosRow1 - zerosCol2 = 3 + 2 - 0 - 0 = 5
 *
 * Constraints:
 *
 * 	m == grid.length
 * 	n == grid[i].length
 * 	1 <= m, n <= 10^5
 * 	1 <= m * n <= 10^5
 * 	grid[i][j] is either 0 or 1.
 ******************************************************************************************************/

/* eslint-disable @typescript-eslint/no-non-null-assertion */
/**
 * @param {number[][]} grid
 * @returns {number[][]}

 * return the difference matrix of a given 0-indexed m * n binary matrix, grid

 * Stub:
 function onesMinusZeros(grid: number[][]): number[][] {return []}

 * Tests:
 * I: grid = [[0,1,1],[1,0,1],[0,0,1]] -> O: [[0,0,4],[0,0,4],[-2,-2,2]]
 * I: grid = [[1,1,1],[1,1,1]] -> O: [[5,5,5],[5,5,5]]

 * Time Complexity: O(m * n), where m is grid's rows nad n is grid's cols
 * Space Complexity: O(m + n)

 * Runtime: 314ms (85.71%)
 * Memory: 111.39MB (71.43%)
 */
export function onesMinusZeros(grid: number[][]): number[][] {
  const height: number = grid.length;
  const width: number = grid[0]!.length;

  const rows: number[] = [];
  const cols: number[] = Array(width).fill(0);

  for (let row: number = 0; row < height; row++) {
    let counter: number = 0;
    for (let col: number = 0; col < width; col++) {
      counter += grid[row]![col] as number;
      cols[col] += grid[row]![col] as number;
    }
    rows.push(counter);
  }

  const ans: number[][] = Array.from({ length: height }, () =>
    Array(width).fill(0),
  );

  for (let row: number = 0; row < height; row++) {
    for (let col: number = 0; col < width; col++) {
      ans[row]![col] = 2 * rows[row]! - width + (2 * cols[col]! - height);
    }
  }

  return ans;
}
