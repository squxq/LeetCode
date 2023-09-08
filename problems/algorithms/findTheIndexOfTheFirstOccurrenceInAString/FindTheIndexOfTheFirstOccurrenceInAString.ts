// Source : https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/
// Author : squxq
// Date   : 2023-09-08

/** ***************************************************************************************************
 *
 * Given two strings needle and haystack, return the index of the first occurrence of needle in
 * haystack, or -1 if needle is not part of haystack.
 *
 * Example 1:
 *
 * Input: haystack = "sadbutsad", needle = "sad"
 * Output: 0
 * Explanation: "sad" occurs at index 0 and 6.
 * The first occurrence is at index 0, so we return 0.
 *
 * Example 2:
 *
 * Input: haystack = "leetcode", needle = "leeto"
 * Output: -1
 * Explanation: "leeto" did not occur in "leetcode", so we return -1.
 *
 * Constraints:
 *
 * 	1 <= haystack.length, needle.length <= 10^4
 * 	haystack and needle consist of only lowercase English characters.
 ******************************************************************************************************/

export function strStr(haystack: string, needle: string): number {
  // first submit
  // return haystack.includes(needle) ? haystack.indexOf(needle) : -1

  // second submit
  return haystack.indexOf(needle);
}
