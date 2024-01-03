// Source : https://leetcode.com/problems/number-of-laser-beams-in-a-bank/
// Author : francisco
// Date   : 2024-01-03

/*****************************************************************************************************
 *
 * Anti-theft security devices are activated inside a bank. You are given a 0-indexed binary string
 * array bank representing the floor plan of the bank, which is an m x n 2D matrix. bank[i] represents
 * the i^th row, consisting of '0's and '1's. '0' means the cell is empty, while'1' means the cell has
 * a security device.
 *
 * There is one laser beam between any two security devices if both conditions are met:
 *
 * 	The two devices are located on two different rows: r1 and r2, where r1 < r2.
 * 	For each row i where r1 < i < r2, there are no security devices in the i^th row.
 *
 * Laser beams are independent, i.e., one beam does not interfere nor join with another.
 *
 * Return the total number of laser beams in the bank.
 *
 * Example 1:
 *
 * Input: bank = ["011001","000000","010100","001000"]
 * Output: 8
 * Explanation: Between each of the following device pairs, there is one beam. In total, there are 8
 * beams:
 *  * bank[0][1] -- bank[2][1]
 *  * bank[0][1] -- bank[2][3]
 *  * bank[0][2] -- bank[2][1]
 *  * bank[0][2] -- bank[2][3]
 *  * bank[0][5] -- bank[2][1]
 *  * bank[0][5] -- bank[2][3]
 *  * bank[2][1] -- bank[3][2]
 *  * bank[2][3] -- bank[3][2]
 * Note that there is no beam between any device on the 0^th row with any on the 3^rd row.
 * This is because the 2^nd row contains security devices, which breaks the second condition.
 *
 * Example 2:
 *
 * Input: bank = ["000","111","000"]
 * Output: 0
 * Explanation: There does not exist two devices located on two different rows.
 *
 * Constraints:
 *
 * 	m == bank.length
 * 	n == bank[i].length
 * 	1 <= m, n <= 500
 * 	bank[i][j] is either '0' or '1'.
 ******************************************************************************************************/

/**
 * @param {string[]} bank
 * @returns {number}
 * return the total number of laser beams in the bank
 * Lazer Beams: there is one laser beam between any two security devices if:
 * - the two devices are located on two different rows: r1 and r2, where r1 < r2
 * - for each row i where r1 < i < r2, there are no security devices in the ith row

 * Tests:
 * I: bank = ["011001","000000","010100","001000"] -> O: 8
 * I: bank = ["000","111","000"] -> O: 0

 * Template: <tail recursion, closure, rsf acc, cp acc, for loop, and constants>

 * Time Complexity: O(n * m), where n is bank.length and m is bank[0].length
 * Space Complexity: O(1)
 */
export function numberOfBeamsV1(bank: string[]): number {
  const height: number = bank.length;

  function closure(i: number, previousCount: number, total: number): number {
    if (i === height) return total;

    let count: number = 0;
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const cell of bank[i]!) {
      if (cell === "1") count++;
    }

    if (count !== 0)
      return closure(i + 1, count, total + previousCount * count);

    return closure(i + 1, previousCount, total);
  }

  return closure(0, 0, 0);
}

/**
 * @param {string[]} bank
 * @returns {number}
 * same purpose as previous function, since this is a version of it

 * Template: <nested for loop, rsf acc, cp acc>

 * Time Complexity: O(n * m), where n is bank.length and m is bank[0].length
 * Space Complexity: O(1)
 */
export function numberOfBeams(bank: string[]): number {
  let total: number = 0; // rsf acc
  let previousCount: number = 0; // cp acc

  for (const row of bank) {
    let count: number = 0;
    for (const cell of row) {
      if (cell === "1") count++;
    }

    if (count !== 0) {
      total += previousCount * count;
      previousCount = count;
    }
  }

  return total;
}
