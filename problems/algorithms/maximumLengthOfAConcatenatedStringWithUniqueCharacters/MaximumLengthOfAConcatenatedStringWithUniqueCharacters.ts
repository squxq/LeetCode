// Source : https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/
// Author : francisco
// Date   : 2024-01-23

/*****************************************************************************************************
 *
 * You are given an array of strings arr. A string s is formed by the concatenation of a subsequence
 * of arr that has unique characters.
 *
 * Return the maximum possible length of s.
 *
 * A subsequence is an array that can be derived from another array by deleting some or no elements
 * without changing the order of the remaining elements.
 *
 * Example 1:
 *
 * Input: arr = ["un","iq","ue"]
 * Output: 4
 * Explanation: All the valid concatenations are:
 * - ""
 * - "un"
 * - "iq"
 * - "ue"
 * - "uniq" ("un" + "iq")
 * - "ique" ("iq" + "ue")
 * Maximum length is 4.
 *
 * Example 2:
 *
 * Input: arr = ["cha","r","act","ers"]
 * Output: 6
 * Explanation: Possible longest valid concatenations are "chaers" ("cha" + "ers") and "acters" ("act"
 * + "ers").
 *
 * Example 3:
 *
 * Input: arr = ["abcdefghijklmnopqrstuvwxyz"]
 * Output: 26
 * Explanation: The only string in arr has all 26 characters.
 *
 * Constraints:
 *
 * 	1 <= arr.length <= 16
 * 	1 <= arr[i].length <= 26
 * 	arr[i] contains only lowercase English letters.
 ******************************************************************************************************/

/**
 * @param {string[]} arr
 * @returns {number}
 * return the maximum possible length of the concatenation of a subsequence of arr
 * that has unique characters

 * Tests:
 * I: arr = ["un","iq","ue"] -> O: 4
 * I: arr = ["cha","r","act","ers"] -> O: 6
 * I: arr = ["abcdefghijklmnopqrstuvwxyz"] -> O: 26
 * I: arr = ["aa","bb"] -> 0

 * Template:
 * recursion - if there are no duplicate characters in both the given string and in arr[index]'s one
 * we can both add arr[index] to current or not; otherwise skip arr[index]

 * Time Complexity: O(2^n), where n is arr.length
 * Space Complexity: O(n)
 */
export function maxLength(arr: string[]): number {
  function dfs(index: number, current: string): number {
    if (index === arr.length) return current.length;

    for (const char of arr[index] as string) {
      if (
        current.includes(char) ||
        arr[index]?.indexOf(char) !== arr[index]?.lastIndexOf(char)
      )
        return dfs(index + 1, current);
    }

    return Math.max(
      dfs(index + 1, current + arr[index]),
      dfs(index + 1, current),
    );
  }
  return dfs(0, "");
}
