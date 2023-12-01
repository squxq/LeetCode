// Source : https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/
// Author : Francisco Tomas
// Date   : 2023-12-01

/*****************************************************************************************************
 *
 * Given two string arrays word1 and word2, return true if the two arrays represent the same string,
 * and false otherwise.
 *
 * A string is represented by an array if the array elements concatenated in order forms the string.
 *
 * Example 1:
 *
 * Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
 * Output: true
 * Explanation:
 * word1 represents string "ab" + "c" -> "abc"
 * word2 represents string "a" + "bc" -> "abc"
 * The strings are the same, so return true.
 *
 * Example 2:
 *
 * Input: word1 = ["a", "cb"], word2 = ["ab", "c"]
 * Output: false
 *
 * Example 3:
 *
 * Input: word1  = ["abc", "d", "defg"], word2 = ["abcddefg"]
 * Output: true
 *
 * Constraints:
 *
 * 	1 <= word1.length, word2.length <= 10^3
 * 	1 <= word1[i].length, word2[i].length <= 10^3
 * 	1 <= sum(word1[i].length), sum(word2[i].length) <= 10^3
 * 	word1[i] and word2[i] consist of lowercase letters.
 ******************************************************************************************************/

/* eslint-disable @typescript-eslint/no-non-null-assertion */

/**
 * string[] string[] -> boolean
 * given two string arrays, word1 and word2, return true if the two arrays represent the same string, and false otherwise

 * Stub:
 function arrayStringsAreEqual(word1: string[], word2: string[]): boolean {return false}

 * Tests:
 * I: word1 = ["ab", "c"], word2 = ["a", "bc"] -> O: true
 * I: word1 = ["a", "cb"], word2 = ["ab", "c"] -> O: false
 * I: word1 = ["abc", "d", "defg"], word2 = ["abcddefg"] -> O: true
 * I: word1 = ["abc","d","defg"], word2 = ["abcddef"] -> O: false

 * Constraints:
 * - 1 <= word1.length, word2.length <= 10^3
 * - 1 <= word1[i].length, word2[i].length <= 10^3
 * - 1 <= sum(word1[i].length), sum(word2[i].length) <= 10^3
 * - word1[i] and word2[i] consist of lowercase letters.
 */

/**
 * Time Complexity: O(n + m), where n is the length of word1 and m is the length of word2
 * Space Complexity: O(n + m)

 * Runtime: 66ms (9.93%)
 * Memory: 43.75MB (76.60%)
 */
export function arrayStringsAreEqualV1(
  word1: string[],
  word2: string[],
): boolean {
  return word1.join("") === word2.join("");
}

/**
 * Time Complexity: O(n + m), where n is the length of word1 and m is the length of word2
 * Space Complexity: O(1)

 * Runtime: 51ms (80.95%)
 * Memory: 44.82MB (9.93%)
 */
export function arrayStringsAreEqualV2(
  word1: string[],
  word2: string[],
): boolean {
  const i: { string: number; char: number } = { string: 0, char: 0 };
  const j: { string: number; char: number } = { string: 0, char: 0 };
  while (i.string < word1.length && j.string < word2.length) {
    if (word1[i.string]![i.char] === word2[j.string]![j.char]) {
      i.char++;
      j.char++;

      if (i.char === word1[i.string]!.length) {
        i.string++;
        i.char = 0;
      }

      if (j.char === word2[j.string]!.length) {
        j.string++;
        j.char = 0;
      }
    } else {
      return false;
    }
  }
  return i.string === word1.length && j.string === word2.length;
}

/**
 * Time Complexity: O(n + m), where n is the length of word1 and m is the length of word2
 * Space Complexity: O(1)

 * Runtime: 43ms (97.87%)
 * Memory: 44.54MB (29.79%)
 */
export function arrayStringsAreEqual(
  word1: string[],
  word2: string[],
): boolean {
  let stringPointer1: number = 0;
  let stringPointer2: number = 0;
  let charPointer1: number = 0;
  let charPointer2: number = 0;

  while (stringPointer1 < word1.length && stringPointer2 < word2.length) {
    if (
      word1[stringPointer1]![charPointer1] ===
      word2[stringPointer2]![charPointer2]
    ) {
      charPointer1++;
      charPointer2++;

      if (charPointer1 === word1[stringPointer1]!.length) {
        stringPointer1++;
        charPointer1 = 0;
      }

      if (charPointer2 === word2[stringPointer2]!.length) {
        stringPointer2++;
        charPointer2 = 0;
      }
    } else {
      return false;
    }
  }
  return stringPointer1 === word1.length && stringPointer2 === word2.length;
}
