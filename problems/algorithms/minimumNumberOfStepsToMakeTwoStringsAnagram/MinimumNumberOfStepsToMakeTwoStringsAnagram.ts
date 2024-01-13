// Source : https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/
// Author : francisco
// Date   : 2024-01-13

/*****************************************************************************************************
 *
 * You are given two strings of the same length s and t. In one step you can choose any character of t
 * and replace it with another character.
 *
 * Return the minimum number of steps to make t an anagram of s.
 *
 * An Anagram of a string is a string that contains the same characters with a different (or the same)
 * ordering.
 *
 * Example 1:
 *
 * Input: s = "bab", t = "aba"
 * Output: 1
 * Explanation: Replace the first 'a' in t with b, t = "bba" which is anagram of s.
 *
 * Example 2:
 *
 * Input: s = "leetcode", t = "practice"
 * Output: 5
 * Explanation: Replace 'p', 'r', 'a', 'i' and 'c' from t with proper characters to make t anagram of
 * s.
 *
 * Example 3:
 *
 * Input: s = "anagram", t = "mangaar"
 * Output: 0
 * Explanation: "anagram" and "mangaar" are anagrams.
 *
 * Constraints:
 *
 * 	1 <= s.length <= 5 * 10^4
 * 	s.length == t.length
 * 	s and t consist of lowercase English letters only.
 ******************************************************************************************************/

/**
 * @param {string} s
 * @param {string} t
 * @returns {number}
 * return the minimum number of steps to make t an anagram of s

 * Tests:
 * I: s = "bab", t = "aba" -> O: 1
 * I: s = "leetcode", t = "practice" -> O: 5
 * I: s = "anagram", t = "mangaar" -> O: 0

 * Template:
 * iteration char of s, char - place the character and its count in a hastable
 * iteration char of t, char - if char in hashtable and count is greater than 0 sub 1 from it
 * else add 1 to total count acc

 * Time Complexity: O(n), where n is s.length === t.length
 * Space Complexity: O(1), since charCounts max length is 26(english alphabet length)
 */
export function minSteps(s: string, t: string): number {
  const charCounts = new Map<string, number>();

  for (const char of s) charCounts.set(char, (charCounts.get(char) ?? 0) + 1);

  let total: number = 0;

  for (const char of t) {
    if ((charCounts.get(char) as number) > 0)
      charCounts.set(char, (charCounts.get(char) as number) - 1);
    else total++;
  }

  return total;
}
