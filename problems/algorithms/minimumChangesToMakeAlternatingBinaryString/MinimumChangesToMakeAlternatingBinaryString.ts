// Source : https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string/
// Author : francisco
// Date   : 2023-12-24

/*****************************************************************************************************
 *
 * You are given a string s consisting only of the characters '0' and '1'. In one operation, you can
 * change any '0' to '1' or vice versa.
 *
 * The string is called alternating if no two adjacent characters are equal. For example, the string
 * "010" is alternating, while the string "0100" is not.
 *
 * Return the minimum number of operations needed to make s alternating.
 *
 * Example 1:
 *
 * Input: s = "0100"
 * Output: 1
 * Explanation: If you change the last character to '1', s will be "0101", which is alternating.
 *
 * Example 2:
 *
 * Input: s = "10"
 * Output: 0
 * Explanation: s is already alternating.
 *
 * Example 3:
 *
 * Input: s = "1111"
 * Output: 2
 * Explanation: You need two operations to reach "0101" or "1010".
 *
 * Constraints:
 *
 * 	1 <= s.length <= 10^4
 * 	s[i] is either '0' or '1'.
 ******************************************************************************************************/

/**
 * @param {string} s
 * @returns {number}
 * return the minimum number of operations to make given string, s, alternating
 * NOTES: - "010" is alternating; "0100" is not
 *        - in one operating we change any "0" to "1" or vice versa
 * CONSTRAINTS: - 1 <= s.length <= 104
 *              - s[i] is either '0' or '1'

 * Tests:
 * I: s = "0100" -> O: 1
 * I: s = "10" -> O: 0
 * I: s = "1111" -> O: 2
 * I: s = "10010100" -> O: 3
 * I: s = "1100010111" -> O: 3

 * Template:
 function minOperations(s: string): number {
   return (... s)
 }
 */
export function minOperationsV1(s: string): number {
  return Math.min(minOps(s, "0"), minOps(s, "1")); // O(2n)
}

/** return the minimum number of operations to make given string, s, alternating
 * starting with the char, firstChar
 * @param {string} s
 * @param {"0" | "1"} firstChar
 * @returns {number}

 * Template:
 function minOps(s: string, firstChar: "0" | "1"): number {
   return (... s firstChar)
 }
 */
function minOps(s: string, firstChar: "0" | "1"): number {
  let min: number = 0; // s is already alternating

  for (let i: number = 0; i < s.length; i++) {
    // O(n)
    if (i % 2 === 0) {
      // even
      if (s[i] !== firstChar) min++;
    } else {
      // odd
      if (s[i] === firstChar) min++;
    }
  }

  return min;
}

/** same purpose as its first version above
 * @param {string} s
 * @returns {number}

 * Time Complexity: O(n)
 * Space Complexity: (1)

 * Runtime: 55ms (75.00%)
 * Memory: 44.12MB (100.00%)
 */
export function minOperations(s: string): number {
  const stringSize: number = s.length;
  let min0: number = 0;

  for (let i: number = 0; i < stringSize; i++) {
    if (i % 2 === 0) {
      if (s[i] === "0") min0++;
    } else {
      if (s[i] === "1") min0++;
    }
  }

  return Math.min(min0, stringSize - min0);
}
