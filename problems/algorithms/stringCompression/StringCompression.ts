// Source : https://leetcode.com/problems/string-compression/
// Author : francisco
// Date   : 2023-12-19

/*****************************************************************************************************
 *
 * Given an array of characters chars, compress it using the following algorithm:
 *
 * Begin with an empty string s. For each group of consecutive repeating characters in chars:
 *
 * 	If the group's length is 1, append the character to s.
 * 	Otherwise, append the character followed by the group's length.
 *
 * The compressed string s should not be returned separately, but instead, be stored in the input
 * character array chars. Note that group lengths that are 10 or longer will be split into multiple
 * characters in chars.
 *
 * After you are done modifying the input array, return the new length of the array.
 *
 * You must write an algorithm that uses only constant extra space.
 *
 * Example 1:
 *
 * Input: chars = ["a","a","b","b","c","c","c"]
 * Output: Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
 * Explanation: The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".
 *
 * Example 2:
 *
 * Input: chars = ["a"]
 * Output: Return 1, and the first character of the input array should be: ["a"]
 * Explanation: The only group is "a", which remains uncompressed since it's a single character.
 *
 * Example 3:
 *
 * Input: chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
 * Output: Return 4, and the first 4 characters of the input array should be: ["a","b","1","2"].
 * Explanation: The groups are "a" and "bbbbbbbbbbbb". This compresses to "ab12".
 *
 * Constraints:
 *
 * 	1 <= chars.length <= 2000
 * 	chars[i] is a lowercase English letter, uppercase English letter, digit, or symbol.
 ******************************************************************************************************/

/**
 * @param {string[]} chars
 * @returns {number}

 * given an array of characters, chars, compress it and return the new length of the array

 * Stub:
 function compress(chars: string[]): number {return 0}

 * Tests: 
 * I: chars = ["a","a","b","b","c","c","c"] -> O: 6
 * I: chars = ["a"] -> O: 1
 * I: chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"] -> O: 4
 * I: chars = ["a","a","a","b","b","a","a"] -> O: 6
 * I: chars = ["a","a","a","b","b","b","c","c","c"] -> O: 6

 * Time Complexity: O(n^2), where n is chars' length
 * Space Complexity: O(1)

 * Runtime: 58ms (85.42%)
 * Memory: 44.54MB (95.37%)
 */
export function compressV1(chars: string[]): number {
  let counter: number = 1;
  let w: number = 1;

  for (let i: number = 0; i < chars.length; i++) {
    // O(n)
    if (chars[i] === chars[i + 1]) {
      counter++;
    } else {
      if (counter > 1) {
        chars.splice(w, i - w + 1, ...String(counter).split("")); // O(n)
        w += String(counter).length + 1;
        i = w - 2;
      } else w++;
      counter = 1;
    }
  }

  return chars.length;
}

/**
 * @param {string[]} chars
 * @returns {number}

 * Time Complexity: O(n), where n is chars' length
 * Space Complexity: O(1)

 * Runtime: 58ms (85.42%)
 * Memory: 43.94MB (100.00%)
 */
export function compress(chars: string[]): number {
  let index: number = 0;
  let ans: number = 0;

  while (index < chars.length) {
    let counter: number = 0;
    while (
      index + counter < chars.length &&
      chars[index] === chars[index + counter]
    ) {
      counter++;
    }
    chars[ans++] = chars[index] as string;

    if (counter > 1) {
      const strCounter: string = String(counter);
      chars.splice(ans, strCounter.length, ...strCounter.split(""));
      ans += strCounter.length;
    }
    index += counter;
  }

  return ans;
}
