// Source : https://leetcode.com/problems/longest-common-subsequence/
// Author : francisco
// Date   : 2024-01-25

/*****************************************************************************************************
 *
 * Given two strings text1 and text2, return the length of their longest common subsequence. If there
 * is no common subsequence, return 0.
 *
 * A subsequence of a string is a new string generated from the original string with some characters
 * (can be none) deleted without changing the relative order of the remaining characters.
 *
 * 	For example, "ace" is a subsequence of "abcde".
 *
 * A common subsequence of two strings is a subsequence that is common to both strings.
 *
 * Example 1:
 *
 * Input: text1 = "abcde", text2 = "ace"
 * Output: 3
 * Explanation: The longest common subsequence is "ace" and its length is 3.
 *
 * Example 2:
 *
 * Input: text1 = "abc", text2 = "abc"
 * Output: 3
 * Explanation: The longest common subsequence is "abc" and its length is 3.
 *
 * Example 3:
 *
 * Input: text1 = "abc", text2 = "def"
 * Output: 0
 * Explanation: There is no such common subsequence, so the result is 0.
 *
 * Constraints:
 *
 * 	1 <= text1.length, text2.length <= 1000
 * 	text1 and text2 consist of only lowercase English characters.
 ******************************************************************************************************/

/**
 * @param {string} text1
 * @param {string} text2
 * @returns {number}
 * return the length of the longest common subsequencce of text1 and text2; if there is none return 0
 * NOTE: a common subsequence of two strings is a subsequence that is common to both strings

 * Tests:
 * I: text1 = "abcde", text2 = "ace" -> O: 3
 * I: text1 = "abc", text2 = "abc" -> O: 3
 * I: text1 = "abc", text2 = "def" -> O: 0
 * I: text1 = "pmjghexybyrgzczy", text2 = "hafcdqbgncrcbihkd" -> O: 4

 * Template: <string and recursion>
 * recursion, dfs - str1 and str2
 * base case - i === text1.length || j === text2.length
 * use indexes instead of substrings to use memoization, cache

 * Time Complexity: O(n * m), where n is text1.length and m is text2.length
 * Space Complexity: O(n * m)
 */
export function longestCommonSubsequenceV1(
  text1: string,
  text2: string,
): number {
  const cache: number[][] = Array.from(
    { length: text1.length },
    () => new Array(text2.length),
  );

  function dfs(i: number, j: number): number {
    if (i === text1.length || j === text2.length) return 0;

    if (cache[i]?.[j] !== undefined) return cache[i]?.[j] as number;

    if (text1[i] === text2[j]) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return (cache[i]![j] = dfs(i + 1, j + 1) + 1);
    } else {
      // either take str1[0] or take str2[0]
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return (cache[i]![j] = Math.max(dfs(i + 1, j), dfs(i, j + 1)));
    }
  }

  return dfs(0, 0);
}

/**
 * @param {string} text1
 * @param {string} text2
 * @returns {number}
 * same purpose as previous function

 * Template: <string and recursion>

 * Time Complexity: O(n * m)
 * Space Complexity: O(n * m)
 */
export function longestCommonSubsequence(text1: string, text2: string): number {
  const dp: number[][] = Array.from({ length: text1.length + 1 }, () =>
    new Array(text2.length + 1).fill(0),
  );

  for (let i: number = text1.length - 1; i >= 0; i--) {
    for (let j: number = text2.length - 1; j >= 0; j--) {
      if (text1[i] === text2[j]) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        dp[i]![j] = (dp[i + 1]?.[j + 1] as number) + 1;
      } else {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        dp[i]![j] = Math.max(
          dp[i + 1]?.[j] as number,
          dp[i]?.[j + 1] as number,
        );
      }
    }
  }

  return dp[0]?.[0] as number;
}
