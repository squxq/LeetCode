// Source : https://leetcode.com/problems/determine-if-string-halves-are-alike/
// Author : francisco
// Date   : 2024-01-12

/*****************************************************************************************************
 *
 * You are given a string s of even length. Split this string into two halves of equal lengths, and
 * let a be the first half and b be the second half.
 *
 * Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E',
 * 'I', 'O', 'U'). Notice that s contains uppercase and lowercase letters.
 *
 * Return true if a and b are alike. Otherwise, return false.
 *
 * Example 1:
 *
 * Input: s = "book"
 * Output: true
 * Explanation: a = "bo" and b = "ok". a has 1 vowel and b has 1 vowel. Therefore, they are alike.
 *
 * Example 2:
 *
 * Input: s = "textbook"
 * Output: false
 * Explanation: a = "text" and b = "book". a has 1 vowel whereas b has 2. Therefore, they are not
 * alike.
 * Notice that the vowel o is counted twice.
 *
 * Constraints:
 *
 * 	2 <= s.length <= 1000
 * 	s.length is even.
 * 	s consists of uppercase and lowercase letters.
 ******************************************************************************************************/

/**
 * @param {string} s
 * @returns {boolean}
 * return true if the two halfs of s are alike

 * Template:
 * vowel array for reference -> vowels
 * rsf acc -> count
 * iterate through the two halfs of s at the same time; each iteration:
 * in first half if char is vowel add 1
 * in second half if char is vowel sub 1
 */
export function halvesAreAlike(s: string): boolean {
  const halfLen: number = s.length / 2;
  const vowels: string[] = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  let count: number = 0;

  for (let i: number = 0; i < halfLen; i++) {
    if (vowels.includes(s[i] as string)) count++;

    if (vowels.includes(s[i + halfLen] as string)) count--;
  }

  return count === 0;
}
