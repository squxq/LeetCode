// Source : https://leetcode.com/problems/reverse-vowels-of-a-string/
// Author : squxq
// Date   : 2023-09-10

/*****************************************************************************************************
 *
 * Given a string s, reverse only all the vowels in the string and return it.
 *
 * The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more
 * than once.
 *
 * Example 1:
 * Input: s = "hello"
 * Output: "holle"
 * Example 2:
 * Input: s = "leetcode"
 * Output: "leotcede"
 *
 * Constraints:
 *
 * 	1 <= s.length <= 3 * 10^5
 * 	s consist of printable ASCII characters.
 ******************************************************************************************************/

export function reverseVowels(s: string): string {
  const vowels = new Set<string>([
    "a",
    "e",
    "i",
    "o",
    "u",
    "A",
    "E",
    "I",
    "O",
    "U",
  ]);
  const result: string[] = s.split("");
  let left: number = 0;
  let right: number = result.length - 1;
  while (left < right) {
    while (left < right && !vowels.has(result[left] as string)) {
      left++;
    }

    while (left < right && !vowels.has(result[right] as string)) {
      right--;
    }

    if (left < right) {
      const temp: string = result[left] as string;
      result[left] = result[right] as string;
      result[right] = temp;

      left++;
      right--;
    }
  }
  return result.join("");
}
