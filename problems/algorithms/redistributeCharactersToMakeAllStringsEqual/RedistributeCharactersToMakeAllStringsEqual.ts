// Source : https://leetcode.com/problems/redistribute-characters-to-make-all-strings-equal/
// Author : francisco
// Date   : 2024-01-03

/*****************************************************************************************************
 *
 * You are given an array of strings words (0-indexed).
 *
 * In one operation, pick two distinct indices i and j, where words[i] is a non-empty string, and move
 * any character from words[i] to any position in words[j].
 *
 * Return true if you can make every string in words equal using any number of operations, and false
 * otherwise.
 *
 * Example 1:
 *
 * Input: words = ["abc","aabc","bc"]
 * Output: true
 * Explanation: Move the first 'a' in words[1] to the front of words[2],
 * to make words[1] = "abc" and words[2] = "abc".
 * All the strings are now equal to "abc", so return true.
 *
 * Example 2:
 *
 * Input: words = ["ab","a"]
 * Output: false
 * Explanation: It is impossible to make all the strings equal using the operation.
 *
 * Constraints:
 *
 * 	1 <= words.length <= 100
 * 	1 <= words[i].length <= 100
 * 	words[i] consists of lowercase English letters.
 ******************************************************************************************************/

/** return true if we can make every string in words equal using any number of operations
 ** otherwise false
 * @param {string[]} words
 * @returns {boolean}
 * NOTE: if the count of a number is less than the number of words then return false
 * APPROACH: all the counts need to be multiples of words.length, so that they can be evenly distributed

 * Tests:
 * I: words = ["abc","aabc","bc"] -> O: true
 * I: words = ["ab","a"] -> O: false
 * I: words = ["a", "b"] -> O: false
 * I: words = ["a", "a"] -> O: true
 * I: words = ["a"] -> O: true
 * I: words = ["abbab"] -> O: true
 * I: words = ["caaaaa","aaaaaaaaa","a","bbb","bbbbbbbbb","bbb","cc","cccccccccccc","ccccccc","ccccccc","cc","cccc","c","cccccccc","c"] -> O: true

 * Template:
 function makeEqual(words: string[]): boolean {
   const hash: {[key: string]: number} = {}

   for (let i: number = 0; i < words.length; i++) {
     ...
   }

   return hash...
 }

 * Time Complexity: O(n * m), n * m is the number of letters in words
 * Space Complexity: O(1), since the input only contains lowercase english letters,
 *                   counts never grows larger than 26
 */
export function makeEqualV1(words: string[]): boolean {
  const counts: number[] = Array(26).fill(0);
  const aCharCode: number = "a".charCodeAt(0);

  for (const word of words) {
    for (let c: number = 0; c < word.length; c++) {
      counts[word.charCodeAt(c) - aCharCode]++;
    }
  }

  const wordsLength: number = words.length;
  for (const count of counts) {
    if (count % wordsLength !== 0) return false;
  }

  return true;
}

/**
 * @param {string[]} words
 * @returns {boolean}

 * Time Complexity: O(n * m), n * m is the number of letters in words
 * Space Complexity: O(1)

 * Runtime: 68ms (87.50%)
 * Memory: 44.79MB (93.75%)
 */
export function makeEqual(words: string[]): boolean {
  const counts = new Map<string, number>();

  for (const word of words) {
    for (const char of word) {
      counts.set(char, (counts.get(char) ?? 0) + 1);
    }
  }

  const wordsLength: number = words.length;
  for (const count of counts.values()) {
    if (count % wordsLength !== 0) return false;
  }

  return true;
}
