// Source : https://leetcode.com/problems/minimum-falling-path-sum/
// Author : francisco
// Date   : 2024-01-19

/*****************************************************************************************************
 *
 * Given an n x n array of integers matrix, return the minimum sum of any falling path through matrix.
 *
 * A falling path starts at any element in the first row and chooses the element in the next row that
 * is either directly below or diagonally left/right. Specifically, the next element from position
 * (row, col) will be (row + 1, col - 1), (row + 1, col), or (row + 1, col + 1).
 *
 * Example 1:
 *
 * Input: matrix = [[2,1,3],[6,5,4],[7,8,9]]
 * Output: 13
 * Explanation: There are two falling paths with a minimum sum as shown.
 *
 * Example 2:
 *
 * Input: matrix = [[-19,57],[-40,-5]]
 * Output: -59
 * Explanation: The falling path with a minimum sum is shown.
 *
 * Constraints:
 *
 * 	n == matrix.length == matrix[i].length
 * 	1 <= n <= 100
 * 	-100 <= matrix[i][j] <= 100
 ******************************************************************************************************/

/** @typedef {{col: number, row: number}} Position */
interface Position {
  col: number;
  row: number;
}

/**
 * @param {number[][]} matrix
 * @returns {number}
 * return the minimum sum of any falling path through given matrix
 * NOTE: a falling path starts at any element in the first row and
 * chooses the element in the next row that is either directly below
 * or diagonally left or right

 * Tests:
 * I: matrix = [[2,1,3],[6,5,4],[7,8,9]] -> O: 13
 * I: matrix = [[-19,57],[-40,-5]] -> O: -59

 * Template:
 * recursion + memoization
 */
export function minFallingPathSumV1(matrix: number[][]): number {
  function dfs(possible: Position[], sum: number): number {
    if (possible.length === 0) return sum;

    const result: number[] = [];

    for (const position of possible) {
      result.push(
        dfs(
          getPossible(matrix, position),
          sum + (matrix[position.row]?.[position.col] as number),
        ),
      );
    }

    return Math.min(...result);
  }

  let ans: number = Number.MAX_SAFE_INTEGER;

  for (let col: number = 0; col < (matrix[0]?.length as number); col++) {
    ans = Math.min(
      ans,
      dfs(getPossible(matrix, { row: 0, col }), matrix[0]?.[col] as number),
    );
  }

  return ans;
}

/**
 * @param {number[][]} matrix
 * @returns {number}
 * same purpose as previous function, since it is a version of it

 * Tests: same tests as previous function
  [[100,-42,-46,-41]
 ,[ 31, 97, 10,-10]
 ,[-58,-51, 82, 89]
 ,[ 51, 81, 69,-51]]

 * Template:
 * recursion + memoization (still not added)

 * Time Complexity: O(n * m), where n = matrix.length and m = matrix[0].length
 * Space Complexity: O(n * m)
 */
export function minFallingPathSum(matrix: number[][]): number {
  const height: number = matrix.length;
  const width: number = matrix[0]?.length as number;

  const cache = Array.from({ length: height }, () => new Array(width));

  /**
   * @param {number} row
   * @param {number} col
   * @returns {number}
   */
  function dfs(row: number, col: number): number {
    if (cache[row]?.[col] !== undefined) return cache[row]?.[col];

    if (row === height - 1)
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return (cache[row]![col] = matrix[row]?.[col]) as number;

    const straight: number = dfs(row + 1, col);
    let left: number = Number.MAX_SAFE_INTEGER;
    let right: number = Number.MAX_SAFE_INTEGER;

    if (col > 0) {
      left = dfs(row + 1, col - 1);
    }

    if (col < width - 1) {
      right = dfs(row + 1, col + 1);
    }

    const result: number =
      Math.min(left, straight, right) + (matrix[row]?.[col] as number);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return (cache[row]![col] = result);
  }

  const ans: number[] = [];

  for (let col: number = 0; col < width; col++) {
    ans.push(dfs(0, col));
  }

  return Math.min(...ans);
}

/**
 * @param {number[][]} matrix
 * @param {Position} position
 * @returns {Position[]}
 * return the possible positions from the given position
 * NOTE: part of min FallingPathSum version 1 answer

 * Template: iteration through possible next elements
 * (row + 1, col - 1); (row + 1, col); (row + 1, col + 1)
 */
function getPossible(matrix: number[][], position: Position): Position[] {
  if (matrix[position.row + 1] === undefined) return [];

  const result: Position[] = [];

  for (let col: number = position.col - 1; col <= position.col + 1; col++) {
    if (matrix[position.row + 1]?.[col] !== undefined)
      result.push({ col, row: position.row + 1 });
  }

  return result;
}
