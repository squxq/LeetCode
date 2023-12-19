// Source : https://leetcode.com/problems/special-positions-in-a-binary-matrix/
// Author : francisco
// Date   : 2023-12-19

/*****************************************************************************************************
 *
 * Given an m x n binary matrix mat, return the number of special positions in mat.
 *
 * A position (i, j) is called special if mat[i][j] == 1 and all other elements in row i and column j
 * are 0 (rows and columns are 0-indexed).
 *
 * Example 1:
 *
 * Input: mat = [[1,0,0],[0,0,1],[1,0,0]]
 * Output: 1
 * Explanation: (1, 2) is a special position because mat[1][2] == 1 and all other elements in row 1
 * and column 2 are 0.
 *
 * Example 2:
 *
 * Input: mat = [[1,0,0],[0,1,0],[0,0,1]]
 * Output: 3
 * Explanation: (0, 0), (1, 1) and (2, 2) are special positions.
 *
 * Constraints:
 *
 * 	m == mat.length
 * 	n == mat[i].length
 * 	1 <= m, n <= 100
 * 	mat[i][j] is either 0 or 1.
 ******************************************************************************************************/

/* eslint-disable @typescript-eslint/no-non-null-assertion */
/**
 * @param {number[][]} mat
 * @returns {number}

 * given an m * n binary matrix, mat, return the number of special positions in mat
 * NOTE: a position, (i, j), is called special if mat[i][j] === 1 and all other elements in row, i
 *       and column, j, are 0

 * Stub:
 function numSpecial(mat: number[][]): number {return 0}

 * Test:
 * I: mat = [[1,0,0],[0,0,1],[1,0,0]] -> O: 1
 * I: mat = [[1,0,0],[0,1,0],[0,0,1]] -> O: 3
 * I: mat = [[0,0,0,0,0,1,0,0],[0,0,0,0,1,0,0,1],[0,0,0,0,1,0,0,0],[1,0,0,0,1,0,0,0],[0,0,1,1,0,0,0,0]] -> O: 1
 * I: mat = [[0,0,0,0,0,0,0,0],[0,0,0,1,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0],[0,1,0,0,0,0,1,0],[0,1,0,0,0,0,0,0]] -> O: 1

 * Time Complexity: O(m * n^2), where m is mat's rows and n is mat's cols
 * Space Complexity: O(1)

 * Runtime: 59ms (85.71%)
 * Memory: 44.89MB (92.86%)
 */
export function numSpecialV1(mat: number[][]): number {
  let ans: number = 0;

  const height: number = mat.length;
  const width: number = mat[0]!.length;

  for (let row: number = 0; row < height; row++) {
    let num1Row: boolean = false;
    let added: boolean = false;

    for (let col: number = 0; col < width; col++) {
      if (mat[row]![col] === 1) {
        if (num1Row) {
          if (added) ans--;
          break;
        }

        num1Row = true;
        let isSpecial: boolean = false;

        for (let r: number = 0; r < height; r++) {
          if (r !== row && mat[r]![col] === 1) {
            isSpecial = true;
            break;
          }
        }

        if (!isSpecial) {
          ans++;
          added = true;
        }
      }
    }
  }

  return ans;
}

/**
 * @param {number[][]} mat
 * @returns {number}

 * Time Complexity: O(m * n), where m is mat's rows and n is mat's cols
 * Space Complexity: O(m + n)

 * Runtime: 48ms (100.00%)
 * Memory: 45.23MB (50.00%)
 */
export function numSpecial(mat: number[][]): number {
  let ans: number = 0;

  const height: number = mat.length;
  const width: number = mat[0]!.length;

  const rows: number[] = Array(height).fill(0);
  const cols: number[] = Array(width).fill(0);

  for (let row: number = 0; row < height; row++) {
    for (let col: number = 0; col < width; col++) {
      if (mat[row]![col] === 1) {
        rows[row]++;
        cols[col]++;
      }
    }
  }

  for (let row: number = 0; row < height; row++) {
    for (let col: number = 0; col < width; col++) {
      if (mat[row]![col] === 1 && rows[row] === 1 && cols[col] === 1) ans++;
    }
  }

  return ans;
}
