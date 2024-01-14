// Source : https://leetcode.com/problems/determine-if-two-strings-are-close/
// Author : francisco
// Date   : 2024-01-14

/*****************************************************************************************************
 *
 * Two strings are considered close if you can attain one from the other using the following
 * operations:
 *
 * 	Operation 1: Swap any two existing characters.
 *
 * 		For example, abcde -> aecdb
 *
 * 	Operation 2: Transform every occurrence of one existing character into another existing
 * character, and do the same with the other character.
 *
 * 		For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
 *
 * You can use the operations on either string as many times as necessary.
 *
 * Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.
 *
 * Example 1:
 *
 * Input: word1 = "abc", word2 = "bca"
 * Output: true
 * Explanation: You can attain word2 from word1 in 2 operations.
 * Apply Operation 1: "abc" -> "acb"
 * Apply Operation 1: "acb" -> "bca"
 *
 * Example 2:
 *
 * Input: word1 = "a", word2 = "aa"
 * Output: false
 * Explanation: It is impossible to attain word2 from word1, or vice versa, in any number of
 * operations.
 *
 * Example 3:
 *
 * Input: word1 = "cabbba", word2 = "abbccc"
 * Output: true
 * Explanation: You can attain word2 from word1 in 3 operations.
 * Apply Operation 1: "cabbba" -> "caabbb"
 * Apply Operation 2: "caabbb" -> "baaccc"
 * Apply Operation 2: "baaccc" -> "abbccc"
 *
 * Constraints:
 *
 * 	1 <= word1.length, word2.length <= 10^5
 * 	word1 and word2 contain only lowercase English letters.
 ******************************************************************************************************/

/**
 * @param {string} word1
 * @param {string} word2
 * @returns {boolean}
 * return true if word1 and word2 are close, and false otherwise
 * NOTE: close means - same length && same characters && same counts

 * Tests:
 * I: word1 = "abc", word2 = "bca" -> O: true
 * I: word1 = "a", word2 = "aa" -> O: false
 * I: word1 = "cabbba", word2 = "abbccc" -> O: true
 * I: word1 = "sadjkfasjfkg", word2 = "sadjkfasjfk" -> O: false
 * I: word1 = "abbccc", word2 = "addccc" -> O: false
 * I: word1 = "abbbzcf", word2 = "babzzcz" -> O: false
 * I: word1 = "abbzzca", word2 = "babzzcz" -> O: false

 * Template:
 * if the lengths are different they cannot be close
 * iterate word 1 and get its characters and character counts, counts1
 * iterate word 2: check if any of the characters in word 2 is not in counts1
 * add word 2's counts to its own variable
 * iterate each word's counts: hashtable for the frequency of certain count
 * for word 1's counts add 1 to the frequency, for word 2's counts sub 1 from frequency
 * if every frequency is zero it means there is the same number of counts for each word

 * Time Complexity: O(n + max(m, k)), where n is word1.length;
    m is values1.length and k is values2.length
 * Space Complexity: O(m + k)
 */
export function closeStrings(word1: string, word2: string): boolean {
  // same length
  if (word1.length !== word2.length) return false;

  const counts1: Record<string, number> = {};
  const counts2: Record<string, number> = {};

  for (let i: number = 0; i < word1.length; i++) {
    counts1[word1[i] as string] = (counts1[word1[i] as string] ?? 0) + 1;
  }

  for (let i: number = 0; i < word2.length; i++) {
    // same characters
    if (counts1[word2[i] as string] === undefined) return false;
    counts2[word2[i] as string] = (counts2[word2[i] as string] ?? 0) + 1;
  }

  const values1: number[] = Object.values(counts1);
  const values2: number[] = Object.values(counts2);

  const counts: Record<number, number> = {};

  for (let i: number = 0; i < values1.length; i++) {
    counts[values1[i] as number] = (counts[values1[i] as number] ?? 0) + 1;
    counts[values2[i] as number] = (counts[values2[i] as number] ?? 0) - 1;
  }

  // same counts
  return Object.values(counts).every((count: number) => count === 0);
}
