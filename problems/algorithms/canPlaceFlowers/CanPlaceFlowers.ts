// Source : https://leetcode.com/problems/can-place-flowers/
// Author : squxq
// Date   : 2023-09-10

/*****************************************************************************************************
 *
 * You have a long flowerbed in which some of the plots are planted, and some are not. However,
 * flowers cannot be planted in adjacent plots.
 *
 * Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty,
 * and an integer n, return true if n new flowers can be planted in the flowerbed without violating
 * the no-adjacent-flowers rule and false otherwise.
 *
 * Example 1:
 * Input: flowerbed = [1,0,0,0,1], n = 1
 * Output: true
 * Example 2:
 * Input: flowerbed = [1,0,0,0,1], n = 2
 * Output: false
 *
 * Constraints:
 *
 * 	1 <= flowerbed.length <= 2 * 10^4
 * 	flowerbed[i] is 0 or 1.
 * 	There are no two adjacent flowers in flowerbed.
 * 	0 <= n <= flowerbed.length
 ******************************************************************************************************/

export function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  // first/second/third submit

  // if (flowerbed.length === 1 && !flowerbed[0]) return true
  // let counter: number = 0
  // for (let i: number = 0; i < flowerbed.length - 1; i++) {
  //     if ((i === 0 || i === flowerbed.length - 2) && !flowerbed[i] && !flowerbed[i + 1]) {
  //         console.log("here", i)
  //         counter++
  //         continue
  //     }
  //     if (!flowerbed[i] && !flowerbed[i + 1] && !flowerbed[i + 2]) {
  //         console.log("here", i)
  //         counter++
  //         i++
  //     }
  // }
  // return counter >= n

  // fourth submit - logic optimization
  let counter: number = 0;
  for (let i: number = 0; i < flowerbed.length; i++) {
    if (
      (i === 0 || flowerbed[i - 1] === 0) &&
      flowerbed[i] === 0 &&
      (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)
    ) {
      flowerbed[i] = 1;
      counter++;
    }
  }
  return counter >= n;
}
