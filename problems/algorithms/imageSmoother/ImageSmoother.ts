// Source : https://leetcode.com/problems/image-smoother/
// Author : francisco
// Date   : 2023-12-19

/*****************************************************************************************************
 *
 * An image smoother is a filter of the size 3 x 3 that can be applied to each cell of an image by
 * rounding down the average of the cell and the eight surrounding cells (i.e., the average of the
 * nine cells in the blue smoother). If one or more of the surrounding cells of a cell is not present,
 * we do not consider it in the average (i.e., the average of the four cells in the red smoother).
 *
 * Given an m x n integer matrix img representing the grayscale of an image, return the image after
 * applying the smoother on each cell of it.
 *
 * Example 1:
 *
 * Input: img = [[1,1,1],[1,0,1],[1,1,1]]
 * Output: [[0,0,0],[0,0,0],[0,0,0]]
 * Explanation:
 * For the points (0,0), (0,2), (2,0), (2,2): floor(3/4) = floor(0.75) = 0
 * For the points (0,1), (1,0), (1,2), (2,1): floor(5/6) = floor(0.83333333) = 0
 * For the point (1,1): floor(8/9) = floor(0.88888889) = 0
 *
 * Example 2:
 *
 * Input: img = [[100,200,100],[200,50,200],[100,200,100]]
 * Output: [[137,141,137],[141,138,141],[137,141,137]]
 * Explanation:
 * For the points (0,0), (0,2), (2,0), (2,2): floor((100+200+200+50)/4) = floor(137.5) = 137
 * For the points (0,1), (1,0), (1,2), (2,1): floor((200+200+50+200+100+100)/6) = floor(141.666667) =
 * 141
 * For the point (1,1): floor((50+200+200+200+200+100+100+100+100)/9) = floor(138.888889) = 138
 *
 * Constraints:
 *
 * 	m == img.length
 * 	n == img[i].length
 * 	1 <= m, n <= 200
 * 	0 <= img[i][j] <= 255
 ******************************************************************************************************/

/* eslint-disable @typescript-eslint/no-non-null-assertion */
/** return a new matrix where the value of each cell of the given matrix, img,
 * is the average of itself and its neighbors (up|down|left|right|diagonals)
 * @param {number[][]} img
 * @returns {number[][]}

 * Tests:
 * I: img = [[1,1,1],[1,0,1],[1,1,1]] -> O: [[0,0,0],[0,0,0],[0,0,0]]
 * I: img = [[100,200,100],[200,50,200],[100,200,100]] -> O: [[137,141,137],[141,138,141],[137,141,137]]

 * Time Complexity: O(m * n), where m is img's length nad n is img[0]'s length
 * Space Complexity: O(m * n)

 * Runtime: 94ms (100.00%)
 * Memory: 49.42MB (100.00%)
 */
export function imageSmoother(img: number[][]): number[][] {
  const height: number = img.length;
  const width: number = img[0]!.length;

  const ans: number[][] = Array.from({ length: height }, () =>
    Array(width).fill(0),
  );

  for (let row: number = 0; row < height; row++) {
    for (let col: number = 0; col < width; col++) {
      let sum: number = 0;
      let counter: number = 0;

      for (let i: number = col - 1; i <= col + 1; i++) {
        if (img[row - 1]?.[i] !== undefined) {
          sum += img[row - 1]?.[i] as number;
          counter++;
        }
        if (img[row]?.[i] !== undefined) {
          sum += img[row]?.[i] as number;
          counter++;
        }
        if (img[row + 1]?.[i] !== undefined) {
          sum += img[row + 1]?.[i] as number;
          counter++;
        }
      }

      ans[row]![col] = Math.floor(sum / counter);
    }
  }

  return ans;
}
