// Source : https://leetcode.com/problems/length-of-last-word/
// Author : squxq
// Date   : 2023-09-08

/** ***************************************************************************************************
 *
 * Given a string s consisting of words and spaces, return the length of the last word in the string.
 *
 * A word is a maximal substring consisting of non-space characters only.
 *
 * Example 1:
 *
 * Input: s = "Hello World"
 * Output: 5
 * Explanation: The last word is "World" with length 5.
 *
 * Example 2:
 *
 * Input: s = "   fly me   to   the moon  "
 * Output: 4
 * Explanation: The last word is "moon" with length 4.
 *
 * Example 3:
 *
 * Input: s = "luffy is still joyboy"
 * Output: 6
 * Explanation: The last word is "joyboy" with length 6.
 *
 * Constraints:
 *
 * 	1 <= s.length <= 10^4
 * 	s consists of only English letters and spaces ' '.
 * 	There will be at least one word in s.
 ******************************************************************************************************/

export function lengthOfLastWord(s: string): number {
  // first submit
  // return s.match(/\S+\s*$/)[0].trim().length

  // second submit
  const str = s.trim();
  const index = str.lastIndexOf(" ");
  return str.slice(index + 1).length;
}
