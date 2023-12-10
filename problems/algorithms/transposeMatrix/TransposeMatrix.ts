// Source : https://leetcode.com/problems/transpose-matrix/
// Author : francisco
// Date   : 2023-12-10

/*****************************************************************************************************
 *
 * Given a 2D integer array matrix, return the transpose of matrix.
 *
 * The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row
 * and column indices.
 *
 * Example 1:
 *
 * Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
 * Output: [[1,4,7],[2,5,8],[3,6,9]]
 *
 * Example 2:
 *
 * Input: matrix = [[1,2,3],[4,5,6]]
 * Output: [[1,4],[2,5],[3,6]]
 *
 * Constraints:
 *
 * 	m == matrix.length
 * 	n == matrix[i].length
 * 	1 <= m, n <= 1000
 * 	1 <= m * n <= 10^5
 * 	-10^9 <= matrix[i][j] <= 10^9
 ******************************************************************************************************/

/**
 * @param {number[][]} matrix
 * @returns {number[][]}
 * given a 2D integer array, matrix, return the transpose of matrix
 * NOTE: The transpose of a matrix is the matrix flipped over its main diagonal
 *       switchin the matrix's row and column indices

 * Stub:
 function transpose(matrix: number[][]): number[][] {return []}

 * Tests:
 * I: matrix = [[1,2,3],[4,5,6],[7,8,9]] -> O: [[1,4,7],[2,5,8],[3,6,9]]
 * I: matrix = [[1,2,3],[4,5,6]] -> O: [[1,4],[2,5],[3,6]]

 * Time Complexity: O(R * C), where R and C are the number of rows and columns in the given matrix, matrix
 * Space Complexity: O(R * C)

 * Runtime: 55ms (93.59%)
 * Memory: 44.86MB (80.77%)
 */
export function transposeV1(matrix: number[][]): number[][] {
  const height: number = matrix.length;
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const width: number = matrix[0]!.length;
  const ans: number[][] = Array.from({ length: width }, () =>
    Array(height).fill(0),
  );

  for (let row: number = 0; row < height; row++) {
    for (let col: number = 0; col < width; col++) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      ans[col]![row] = matrix[row]![col]!;
    }
  }

  return ans;
}

/**
 * @param {number[][]} matrix
 * @returns {number[][]}

 * Time Complexity: O(m * n), where m and n are the number of rows and columns in the given matrix, matrix
 * Space Complexity: O(m * n)
 */
export function transpose(matrix: number[][]): number[][] {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return Array.from({ length: matrix[0]!.length }, (arr, index) =>
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    matrix.map((row) => row[index]!),
  );
}
