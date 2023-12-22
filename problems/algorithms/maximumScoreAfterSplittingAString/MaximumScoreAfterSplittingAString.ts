// Source : https://leetcode.com/problems/maximum-score-after-splitting-a-string/
// Author : francisco
// Date   : 2023-12-22

/*****************************************************************************************************
 *
 * Given a string s of zeros and ones, return the maximum score after splitting the string into two
 * non-empty substrings (i.e. left substring and right substring).
 *
 * The score after splitting a string is the number of zeros in the left substring plus the number of
 * ones in the right substring.
 *
 * Example 1:
 *
 * Input: s = "011101"
 * Output: 5
 * Explanation:
 * All possible ways of splitting s into two non-empty substrings are:
 * left = "0" and right = "11101", score = 1 + 4 = 5
 * left = "01" and right = "1101", score = 1 + 3 = 4
 * left = "011" and right = "101", score = 1 + 2 = 3
 * left = "0111" and right = "01", score = 1 + 1 = 2
 * left = "01110" and right = "1", score = 2 + 1 = 3
 *
 * Example 2:
 *
 * Input: s = "00111"
 * Output: 5
 * Explanation: When left = "00" and right = "111", we get the maximum score = 2 + 3 = 5
 *
 * Example 3:
 *
 * Input: s = "1111"
 * Output: 3
 *
 * Constraints:
 *
 * 	2 <= s.length <= 500
 * 	The string s consists of characters '0' and '1' only.
 ******************************************************************************************************/

/** return the maximum score after splitting the given string, s, into two non-empty substrings
 * NOTE: the score after splitting a string is the # of 0s in the left substring + # of 1s in right
 * key takeaway: precomputing the # of ones
 * @param {string} s
 * @returns {number}

 * Tests:
 * I: s = "011101" -> O: 5
 * I: s = "00111" -> O: 5
 * I: s = "1111" -> O: 3
 * I: s = "1001" -> O: 3
 * I: s = "1101001" -> O: 4

 * Template:
 function maxScore(s: string): number {
     let ans = MIN
     let zeros = 0
     let ones = s.count(1)

     if (s[0] === "1") ones--
     else zeros++ 

     for (index = 1) {
         ans = max(ans, zeros + ones)
         if (s[index] === "1") ones--
         else zeros++
     }
 }

 * Time Complexity: O(n), where n is s.length - two passes
 * Space Complexity: O(1)

 * Runtime: 48ms (92.59%)
 * Memory: 44.45MB (59.26%)
 */
export function maxScoreV1(s: string): number {
  let ans: number = Number.MIN_SAFE_INTEGER;
  let zeros: number = 0;
  let ones: number = (s.match(/1/g) ?? []).length;

  if (s[0] === "1") ones--;
  else zeros++;

  for (let index: number = 1; index < s.length; index++) {
    ans = Math.max(ans, zeros + ones);
    if (s[index] === "1") ones--;
    else zeros++;
  }

  return ans;
}

/** previous function improved version
 * score = #0l + #1r === score = #0l + #1 - #1l - this saves us one pass
 * since #1 is a constant, we want the max(#0l - #1l)
 * @param {string} s
 * @returns {number}

 * Template:
 function maxScore(s:string): number {
     ans = MIN
     zeros = 0 // zeros in left substring
     ones = 0 // ones in left substring

     if (s[0] === "1") ones++ // 2 <= s.length <= 500
     else zeros++ // The string s consists of characters '0' and '1' only.

     for (index = 1) {
         ans = max(ans, zeros - ones)
         if (s[index] === "1") ones++
         else zeros++
     }
     
     return 0
 }

 * Time Complexity: O(n), where n is s.length - one pass
 * Space Complexity: O(1)

 * Runtime: 48ms (92.59%)
 * Memory: 42.29MB (100.00%)
 */
export function maxScore(s: string): number {
  let ans: number = Number.MIN_SAFE_INTEGER;
  let zeros: number = 0; // zeros in left substring
  let ones: number = 0; // ones in left substring

  for (let index: number = 0; index < s.length - 1; index++) {
    if (s[index] === "1") ones++;
    else zeros++; // The string s consists of characters '0' and '1' only.
    ans = Math.max(ans, zeros - ones);
  }

  if (s[s.length - 1] === "1") ones++;

  return ans + ones;
}
