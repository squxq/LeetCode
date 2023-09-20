// Source : https://leetcode.com/problems/bulb-switcher/
// Author : squxq
// Date   : 2023-09-20

/*****************************************************************************************************
 *
 * There are n bulbs that are initially off. You first turn on all the bulbs, then you turn off every
 * second bulb.
 *
 * On the third round, you toggle every third bulb (turning on if it's off or turning off if it's on).
 * For the i^th round, you toggle every i bulb. For the n^th round, you only toggle the last bulb.
 *
 * Return the number of bulbs that are on after n rounds.
 *
 * Example 1:
 *
 * Input: n = 3
 * Output: 1
 * Explanation: At first, the three bulbs are [off, off, off].
 * After the first round, the three bulbs are [on, on, on].
 * After the second round, the three bulbs are [on, off, on].
 * After the third round, the three bulbs are [on, off, off].
 * So you should return 1 because there is only one bulb is on.
 *
 * Example 2:
 *
 * Input: n = 0
 * Output: 0
 *
 * Example 3:
 *
 * Input: n = 1
 * Output: 1
 *
 * Constraints:
 *
 * 	0 <= n <= 10^9
 ******************************************************************************************************/

// number -> number
// return the number of bulbs that are on (toggled even times) after n rounds

// function bulbSwitch(n: number): number {
//     let count: number = 0
//     for (let i: number = 1; i <= n; i++) {
//         let divisors: number = getNumDivisors(i)
//         console.log(divisors)
//         if (divisors % 2 === 1) count++
//     }
//     return count
// };

// function getNumDivisors(num: number): number {
//     let count: number = 0
//     for (let i: number = 1; i <= num; i++) {
//         if (num % i === 0) count++
//     }
//     return count
// }

// function bulbSwitch(n: number): number {
//     let count: number = 0
//     for (let i: number = 1; i <= n; i++) {
//         if (Number.isInteger(Math.sqrt(i))) count++
//     }
//     return count
// }

export function bulbSwitch(n: number): number {
  return Math.floor(Math.sqrt(n));
}
