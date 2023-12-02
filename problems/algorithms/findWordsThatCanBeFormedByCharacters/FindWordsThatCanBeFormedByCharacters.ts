// Source : https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/
// Author : Francisco Tomas
// Date   : 2023-12-02

/*****************************************************************************************************
 *
 * You are given an array of strings words and a string chars.
 *
 * A string is good if it can be formed by characters from chars (each character can only be used
 * once).
 *
 * Return the sum of lengths of all good strings in words.
 *
 * Example 1:
 *
 * Input: words = ["cat","bt","hat","tree"], chars = "atach"
 * Output: 6
 * Explanation: The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.
 *
 * Example 2:
 *
 * Input: words = ["hello","world","leetcode"], chars = "welldonehoneyr"
 * Output: 10
 * Explanation: The strings that can be formed are "hello" and "world" so the answer is 5 + 5 = 10.
 *
 * Constraints:
 *
 * 	1 <= words.length <= 1000
 * 	1 <= words[i].length, chars.length <= 100
 * 	words[i] and chars consist of lowercase English letters.
 ******************************************************************************************************/

/**
 * string[] string -> number
 * given an array of strings, words, and a string, chars, return the sum of lengths of all good strins in words
 * NOTE: a string is good if it can be formed by characters from chars (each character can only be used once)

 * Stub:
 function countCharacters(words: string[], chars: string): number {return 0}

 * Tests:
 * I: words = ["cat","bt","hat","tree"], chars = "atach" -> O: 6
 * I: words = ["hello","world","leetcode"], chars = "welldonehoneyr" -> O: 10

 * Constraints:
 * - 1 <= words.length <= 1000
 * - 1 <= words[i].length, chars.length <= 100
 * - words[i] and chars consist of lowercase English letters.
 */

/**
 * Time Complexity: O(n + m * k), where n is the length of chars, m is the length of words, and k is the average length of each word in words
 * Space Complexity: O(1), charsFrequency and wordFrequency size never exceeds 26

 * Runtime: 178ms (13.89%)
 * Memory: 50.92MB (80.56%)
 */
export function countCharactersV1(words: string[], chars: string): number {
  const charsFrequency: Record<string, number> = {};
  let ans: number = 0;

  for (const char of chars) {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    charsFrequency[char] = (charsFrequency[char] ?? 0) + 1;
  }

  for (const word of words) {
    const wordFrequency = { ...charsFrequency };
    let indicator: boolean = true;

    for (const char of word) {
      if (wordFrequency[char] === undefined) {
        indicator = false;
        break;
      }
      wordFrequency[char] -= 1;
    }

    if (indicator) {
      ans += word.length;
    }
  }

  return ans;
}

/**
 * Time Complexity: O(n + m * k), where n is the length of chars, m is the length of words, and k is the average length of each word in words
 * Space Complexity: O(1), charsFrequency and c both have a fixed length of 26

 * Runtime: 71ms (94.44%)
 * Memory: 52.20MB (22.22%)
 */
export function countCharacters(words: string[], chars: string): number {
  const charsFrequency: number[] = new Array(26).fill(0);
  for (const char of chars) {
    charsFrequency[char.charCodeAt(0) - "a".charCodeAt(0)]++;
  }

  let ans: number = 0;
  for (const word of words) {
    if (canFormWord(word, charsFrequency)) {
      ans += word.length;
    }
  }

  return ans;
}

function canFormWord(word: string, chars: number[]): boolean {
  const c: number[] = new Array(26).fill(0);

  for (const char of word) {
    const ch = char.charCodeAt(0) - "a".charCodeAt(0);
    c[ch]++;
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    if (c[ch]! > chars[ch]!) {
      return false;
    }
  }

  return true;
}
