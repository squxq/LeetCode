// Source : https://leetcode.com/problems/string-compression-ii/
// Author : francisco
// Date   : 2024-01-02

/*****************************************************************************************************
 *
 * Run-length encoding is a string compression method that works by replacing consecutive identical
 * characters (repeated 2 or more times) with the concatenation of the character and the number
 * marking the count of the characters (length of the run). For example, to compress the string
 * "aabccc" we replace "aa" by "a2" and replace "ccc" by "c3". Thus the compressed string becomes
 * "a2bc3".
 *
 * Notice that in this problem, we are not adding '1' after single characters.
 *
 * Given a string s and an integer k. You need to delete at most k characters from s such that the
 * run-length encoded version of s has minimum length.
 *
 * Find the minimum length of the run-length encoded version of s after deleting at most k characters.
 *
 * Example 1:
 *
 * Input: s = "aaabcccd", k = 2
 * Output: 4
 * Explanation: Compressing s without deleting anything will give us "a3bc3d" of length 6. Deleting
 * any of the characters 'a' or 'c' would at most decrease the length of the compressed string to 5,
 * for instance delete 2 'a' then we will have s = "abcccd" which compressed is abc3d. Therefore, the
 * optimal way is to delete 'b' and 'd', then the compressed version of s will be "a3c3" of length 4.
 *
 * Example 2:
 *
 * Input: s = "aabbaa", k = 2
 * Output: 2
 * Explanation: If we delete both 'b' characters, the resulting compressed string would be "a4" of
 * length 2.
 *
 * Example 3:
 *
 * Input: s = "aaaaaaaaaaa", k = 0
 * Output: 3
 * Explanation: Since k is zero, we cannot delete anything. The compressed string is "a11" of length 3.
 *
 * Constraints:
 *
 * 	1 <= s.length <= 100
 * 	0 <= k <= s.length
 * 	s contains only lowercase English letters.
 ******************************************************************************************************/

/**
 * @param {string} s
 * @param {number} k
 * @returns {number}
 * return the minimum length of the run length encoded version of s after deleting at most k characters
 * APPROACH:
 * - base case: i === s.length (immutable, because we are not manipulating s) return len
 * - if previousChar === s[i] // do not consider removing, update length accordingly
 * - add a check for k === 0, that means we cannot remove any more characters

 * Tests:
 * I: s = "aaabcccd", k = 2 -> O: 4
 * I: s = "aabbaa", k = 2 -> O: 2
 * I: s = "aaaaaaaaaaa", k = 0 -> O: 3
 * I: s = "abcdefghijklmnopqrstuvwxyz", k = 16 -> O: 10
 * I: s = "aabaabbcbbbaccc", k = 6 -> O: 4
 * I: s = "ddaacaaaadcabcbdddadccacddcadbdaddcdddcccabbcababadddcaaacabcacabbcadaccdbdadbbabdacaababdccaadb", k = 42 -> O: 22
 * I: s = "aaabaaabaababbaaaabbbabaaabbabbaabaaabbabbbaaaaaaababaabbbbbbbaabbbbbabaaabaaabbbababba", k = 31 -> O: 8

 * Template: <closure, recursion, context-preserving accumulators, binary tree, memoization>
 function getLengthOfOptimalCompression(s: string, k: number): number {
   function helper(i: number, k: number, previousChar: string, previousCount: number): number {
     if (i === s.length) return 0
     
     if (previousChar === s[i]) {
       // update length
     } else {
       // consider the binary paths: either keeping, or removing
       // return the min result/length

       if (k === 0) {
         // deletion is not possible, keeping is the only tree path
       }
     }
   }
   
   return helper(0, k, "", 1)
 }

 * Time Complexity: O(n * k * 26 * n), where the first n is for i (the index), k,
 *   26 is for the last character and the second n is for the last character count
 * Space Complexity: O(26 * n^2 * k), same as above
 */
export function getLengthOfOptimalCompressionV1(s: string, k: number): number {
  const increaseLengths: number[] = [1, 9, 99];
  const cache = new Map<string, number>();

  function helper(
    i: number,
    k: number,
    previousChar: string,
    previousCount: number,
  ): number {
    if (k < 0) return Number.MAX_SAFE_INTEGER;
    if (i === s.length) return 0;

    const key: string = `${i}-${k}-${previousChar}-${previousCount}`;

    if (cache.has(key)) {
      return cache.get(key) as number;
    }

    let keepPath: number;
    const deletePath: number = helper(
      i + 1,
      k - 1,
      previousChar,
      previousCount,
    );

    if (previousChar === s[i]) {
      keepPath =
        helper(i + 1, k, previousChar, previousCount + 1) +
        (increaseLengths.includes(previousCount) ? 1 : 0);
    } else {
      keepPath = helper(i + 1, k, s[i] as string, 1) + 1;
    }

    const result: number = Math.min(keepPath, deletePath);

    cache.set(key, result);
    return result;
  }

  return helper(0, k, "", 1);
}

/**
 * @param {string} s
 * @param {number} k
 * @returns {number}
 * same purpose as previous function, since this is another version of it

 * Time Complexity: O(n * k * n), the 26 * n in of itself was actually n,
 *   this was made possible with this change to the cache
 * Space Complexity: O(n^2 * k)
 */
export function getLengthOfOptimalCompression(s: string, k: number): number {
  const increaseLengths: number[] = [1, 9, 99];
  const aCharCode: number = "a".charCodeAt(0);
  const cache = new Map<number, number>();

  function helper(
    i: number,
    k: number,
    previousChar: string,
    previousCount: number,
  ): number {
    if (k < 0) return Number.MAX_SAFE_INTEGER;
    if (i === s.length) return 0;

    // const key: string = `${i}-${k}-${previousChar}-${previousCount}`
    const key =
      i * 101 * 27 * 101 +
      (previousChar.charCodeAt(0) - aCharCode) * 101 * 101 +
      previousCount * 101 +
      k;

    if (cache.has(key)) {
      return cache.get(key) as number;
    }

    let keepPath: number;
    const deletePath: number = helper(
      i + 1,
      k - 1,
      previousChar,
      previousCount,
    );

    if (previousChar === s[i]) {
      keepPath =
        helper(i + 1, k, previousChar, previousCount + 1) +
        (increaseLengths.includes(previousCount) ? 1 : 0);
    } else {
      keepPath = helper(i + 1, k, s[i] as string, 1) + 1;
    }

    const result: number = Math.min(keepPath, deletePath);

    cache.set(key, result);
    return result;
  }

  return helper(0, k, "", 1);
}
