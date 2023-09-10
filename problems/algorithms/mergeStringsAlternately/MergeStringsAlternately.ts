// Source : https://leetcode.com/problems/merge-strings-alternately/
// Author : squxq
// Date   : 2023-09-10

/*****************************************************************************************************
 *
 * You are given two strings word1 and word2. Merge the strings by adding letters in alternating
 * order, starting with word1. If a string is longer than the other, append the additional letters
 * onto the end of the merged string.
 *
 * Return the merged string.
 *
 * Example 1:
 *
 * Input: word1 = "abc", word2 = "pqr"
 * Output: "apbqcr"
 * Explanation: The merged string will be merged as so:
 * word1:  a   b   c
 * word2:    p   q   r
 * merged: a p b q c r
 *
 * Example 2:
 *
 * Input: word1 = "ab", word2 = "pqrs"
 * Output: "apbqrs"
 * Explanation: Notice that as word2 is longer, "rs" is appended to the end.
 * word1:  a   b
 * word2:    p   q   r   s
 * merged: a p b q   r   s
 *
 * Example 3:
 *
 * Input: word1 = "abcd", word2 = "pq"
 * Output: "apbqcd"
 * Explanation: Notice that as word1 is longer, "cd" is appended to the end.
 * word1:  a   b   c   d
 * word2:    p   q
 * merged: a p b q c   d
 *
 * Constraints:
 *
 * 	1 <= word1.length, word2.length <= 100
 * 	word1 and word2 consist of lowercase English letters.
 ******************************************************************************************************/

export function mergeAlternately(word1: string, word2: string): string {
  // first submit

  // let merged: string = "";
  // for (let i:number = 0; i < Math.max(word1.length, word2.length); i++) {
  //     if (word1[i]) merged += word1[i]
  //     if (word2[i]) merged += word2[i]
  // }
  // return merged

  // second submit

  // let merged: string = "";
  // const min: number = Math.min(word1.length, word2.length)
  // for (let i:number = 0; i < min; i++) {
  //     if (word1[i]) merged += word1[i]
  //     if (word2[i]) merged += word2[i]
  // }
  // return merged = merged + word1.substring(min) + word2.substring(min)

  // third submit

  // let merged: string[] = [];
  // const min: number = Math.min(word1.length, word2.length)
  // for (let i:number = 0; i < min; i++) {
  //     if (word1[i]) merged.push(word1[i])
  //     if (word2[i]) merged.push(word2[i])
  // }
  // merged.push(word1.substring(min), word2.substring(min))
  // return merged.join("")

  // fourth submit

  // let merged: string[] = [];
  // for (let i:number = 0; i < Math.max(word1.length, word2.length); i++) {
  //     if (word1[i]) merged.push(word1[i])
  //     if (word2[i]) merged.push(word2[i])
  // }
  // return merged.join("")

  // fifth submit

  const maxLength: number = Math.max(word1.length, word2.length);
  const mergedArray: string[] = [];

  for (let i: number = 0; i < maxLength; i++) {
    if (i < word1.length) mergedArray.push(word1[i] as string);
    if (i < word2.length) mergedArray.push(word2[i] as string);
  }

  return mergedArray.join("");
}
