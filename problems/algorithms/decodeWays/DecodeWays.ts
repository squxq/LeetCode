// Source : https://leetcode.com/problems/decode-ways/
// Author : francisco
// Date   : 2024-01-02

/*****************************************************************************************************
 *
 * A message containing letters from A-Z can be encoded into numbers using the following mapping:
 *
 * 'A' -> "1"
 * 'B' -> "2"
 * ...
 * 'Z' -> "26"
 *
 * To decode an encoded message, all the digits must be grouped then mapped back into letters using
 * the reverse of the mapping above (there may be multiple ways). For example, "11106" can be mapped
 * into:
 *
 * 	"AAJF" with the grouping (1 1 10 6)
 * 	"KJF" with the grouping (11 10 6)
 *
 * Note that the grouping (1 11 06) is invalid because "06" cannot be mapped into 'F' since "6" is
 * different from "06".
 *
 * Given a string s containing only digits, return the number of ways to decode it.
 *
 * The test cases are generated so that the answer fits in a 32-bit integer.
 *
 * Example 1:
 *
 * Input: s = "12"
 * Output: 2
 * Explanation: "12" could be decoded as "AB" (1 2) or "L" (12).
 *
 * Example 2:
 *
 * Input: s = "226"
 * Output: 3
 * Explanation: "226" could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).
 *
 * Example 3:
 *
 * Input: s = "06"
 * Output: 0
 * Explanation: "06" cannot be mapped to "F" because of the leading zero ("6" is different from "06").
 *
 * Constraints:
 *
 * 	1 <= s.length <= 100
 * 	s contains only digits and may contain leading zero(s).
 ******************************************************************************************************/

/** given a string, s, containing only digits return the number of ways to decode it
 * @param {string} s
 * @returns {number}
 * A valid decode result belongs to one of the following two categories:
 *  - valid one-digit;
 *  - valid two-digits.
 * For a certain input string, the total count of valid results =
 *  count of category one results + count of category two result
 * When we do a loop on the input string, while we are at a certain character, we try
 * to get new valid decode results by adding this new character onto de valid results
 * ending at the previous character.
 * CONSTRAINTS: s contains only digits and may contain leading zero(s).

 * Tests:
 * I: s = "12" -> O: 2
 * I: s = "226" -> O: 3
 * I: s = "06" -> O: 0

 * Template:
 function numDecodings(s: string): number {
   const validOneDigits = new Set<number>([1,2,3,4,5,6,7,8,9])
   const validTwoDigits = new Set<number>([10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26])

   let countCat1: number = 0
   let countCat2: number = 0
   
   for (let i: number = 0; i < s.length; i++) {
     (...)
   }

   return countCat1 + countCat2
 }

 * Time Complexity: O(n), where n is s.length
 * Space Complexity: O(1)

 * Runtime: 47ms (97.95%)
 * Memory: 43.43MB (95.38%)
 */
export function numDecodings(s: string): number {
  let countCat1: number = 1;
  let countCat2: number = 0;

  for (let i: number = 0; i < s.length; i++) {
    const previous1: number = countCat1;
    const previous2: number = countCat2;

    if (s[i] === "0") countCat1 = 0;
    else countCat1 = previous1 + previous2;

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    if (Number(s[i - 1] + s[i]!) > 26 || i === 0) countCat2 = 0;
    else countCat2 = previous1;
  }

  return countCat1 + countCat2;
}
