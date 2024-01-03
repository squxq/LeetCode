// Source : https://leetcode.com/problems/largest-substring-between-two-equal-characters/
// Author : francisco
// Date   : 2024-01-03

/*****************************************************************************************************
 *
 * Given a string s, return the length of the longest substring between two equal characters,
 * excluding the two characters. If there is no such substring return -1.
 *
 * A substring is a contiguous sequence of characters within a string.
 *
 * Example 1:
 *
 * Input: s = "aa"
 * Output: 0
 * Explanation: The optimal substring here is an empty substring between the two 'a's.
 *
 * Example 2:
 *
 * Input: s = "abca"
 * Output: 2
 * Explanation: The optimal substring here is "bc".
 *
 * Example 3:
 *
 * Input: s = "cbzxy"
 * Output: -1
 * Explanation: There are no characters that appear twice in s.
 *
 * Constraints:
 *
 * 	1 <= s.length <= 300
 * 	s contains only lowercase English letters.
 ******************************************************************************************************/

/**
 * @param {string} s
 * @returns {number}
 * given a string, s, return the length of the longest substring between two equal characters
 * if there is no such substring return -1
 * NOTE: the length is calculated excluding the two characters: I: s = "abca" -> O: 2

 * Tests:
 * I: s = "aa" -> O: 0
 * I: s = "abca" -> O: 2
 * I: s = "cbzxy" -> O: -1

 * Template:
 function maxLengthBetweenEqualCharacters(s: string): number {
   let ans: number = -1
   const characterIndexes: {[key: string]: number} = {}

   for (let i: number = 0; i < s.length; i++) {
     ...
   }

   return ans
 }

 * Time Complexity: O(n), where n is s.length
 * Space Complexity: O(1)
 */
export function maxLengthBetweenEqualCharactersV1(s: string): number {
  let ans: number = -1;

  const characterIndexes = new Map<string, number>();

  for (let i: number = 0; i < s.length; i++) {
    if (characterIndexes.has(s[i] as string)) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      ans = Math.max(ans, i - characterIndexes.get(s[i] as string)! - 1);
    } else {
      characterIndexes.set(s[i] as string, i);
    }
  }

  return ans;
}

/**
 * @param {string} s
 * @returns {number}
 * another version of the code above, here not using map

 * Time Complexity: O(n)
 * Space Complexity: O(n)

 * Runtime: 53ms (71.43%)
 * Memory: 42.30MB (100.00%)
 */
export function maxLengthBetweenEqualCharacters(s: string): number {
  let ans: number = -1;

  for (let i: number = 0; i < s.length; i++) {
    const lastIndex: number = s.lastIndexOf(s[i] as string);

    if (i !== lastIndex) {
      ans = Math.max(ans, lastIndex - i - 1);
    }
  }

  return ans;
}
