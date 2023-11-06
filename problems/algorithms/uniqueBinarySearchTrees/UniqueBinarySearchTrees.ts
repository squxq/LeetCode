// Source : https://leetcode.com/problems/unique-binary-search-trees/
// Author : squxq
// Date   : 2023-11-06

/*****************************************************************************************************
 *
 * Given an integer n, return the number of structurally unique BST's (binary search trees) which has
 * exactly n nodes of unique values from 1 to n.
 *
 * Example 1:
 *
 * Input: n = 3
 * Output: 5
 *
 * Example 2:
 *
 * Input: n = 1
 * Output: 1
 *
 * Constraints:
 *
 * 	1 <= n <= 19
 ******************************************************************************************************/

/**
 * number -> number
 * given an integer, n, return the number of structurally unique BST's (binary search trees) which has
 * exactly n nodes of unique values from 1 to n

 * Stub:
 function numTrees(n: number): number {return 0}

 * Tests:
 * I: n = 3 -> O: 5
 * I: n = 1 -> O: 1

 * Template:
 function numTrees(n: number): number {
     return (... (n))
 }

 * CONSTRAINTS:
 * - 1 <= n <= 19
 */
export function numTrees(n: number): number {
  return factorial(2 * n) / (factorial(n + 1) * factorial(n));
}

/**
 * number -> number
 * given an integer, k, return k! (factorial of k)
 * NOTE: the factorial of n is the product of all integers less than or equal to k
 * ASSUME: 1 <= k <= 19

 * Stub:
 function factorial(k: number): number {return 0}

 * Tests:
 * I: k = 1 -> O: 1
 * I: k = 8 -> O: 40320
 * I: k = 19 -> O: 121645100408832000

 * Template:
 functoin factorial(k: number): number {
     return (... (k))
 }
 */
function factorial(k: number): number {
  let ans: number = 1;
  for (let i: number = 2; i <= k; i++) {
    ans = ans * i;
  }
  return ans;
}
