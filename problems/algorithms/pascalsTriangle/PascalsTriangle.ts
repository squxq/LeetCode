// Source : https://leetcode.com/problems/pascals-triangle/
// Author : squxq
// Date   : 2023-11-05

/*****************************************************************************************************
 *
 * Given an integer numRows, return the first numRows of Pascal's triangle.
 *
 * In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
 *
 * Example 1:
 * Input: numRows = 5
 * Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
 * Example 2:
 * Input: numRows = 1
 * Output: [[1]]
 *
 * Constraints:
 *
 * 	1 <= numRows <= 30
 ******************************************************************************************************/

export function generate(numRows: number): number[][] {
  const result: number[][] = [[1]];

  for (let i: number = 1; i < numRows; i++) {
    const row: number[] = new Array(i + 1);
    row[0] = 1;
    row[i] = 1;

    for (let j: number = 1; j < i; j++) {
      row[j] = (row[j - 1] as number) * ((i + 1 - j) / j);
    }
    result.push(row);
  }

  return result;
}
