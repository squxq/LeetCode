// Source : https://leetcode.com/problems/valid-anagram/
// Author : francisco
// Date   : 2023-12-19

/*****************************************************************************************************
 *
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 *
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
 * typically using all the original letters exactly once.
 *
 * Example 1:
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 * Example 2:
 * Input: s = "rat", t = "car"
 * Output: false
 *
 * Constraints:
 *
 * 	1 <= s.length, t.length <= 5 * 10^4
 * 	s and t consist of lowercase English letters.
 *
 * Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such
 * a case?
 ******************************************************************************************************/

/**
 * @param {string} s
 * @param {string} t
 * @returns {boolean}
 * given two strings, s & t, return true if t is an anagram of s; otherwise false

 * Stub:
 function isAnagram(s: string, t: string): boolean {return false}

 * Tests:
 * I: s = "anagram", t = "nagaram" -> O: true
 * I: s = "rat", t = "car" -> O: false
 * I: s = "dhsfg", t = "sfgh" -> O: false
 * I: s = "sgfh", t = "dsgfh" -> O: false

 * Time Complexity: O(n)
 * Space Complexity: O(n)

 * Runtime: 69ms (77.43%)
 * Memory: 43.94MB (95.84%)
 */
export function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const hash: Record<string, number> = {};

  for (const char of s) {
    if (hash[char] !== undefined) hash[char]++;
    else hash[char] = 1;
  }

  for (const char of t) {
    if (hash[char] === undefined || hash[char] === 0) return false;
    else hash[char]--;
  }

  return true;
}
