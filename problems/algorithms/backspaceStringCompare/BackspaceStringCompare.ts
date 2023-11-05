// Source : https://leetcode.com/problems/backspace-string-compare/
// Author : squxq
// Date   : 2023-11-05

/*****************************************************************************************************
 *
 * Given two strings s and t, return true if they are equal when both are typed into empty text
 * editors. '#' means a backspace character.
 *
 * Note that after backspacing an empty text, the text will continue empty.
 *
 * Example 1:
 *
 * Input: s = "ab#c", t = "ad#c"
 * Output: true
 * Explanation: Both s and t become "ac".
 *
 * Example 2:
 *
 * Input: s = "ab##", t = "c#d#"
 * Output: true
 * Explanation: Both s and t become "".
 *
 * Example 3:
 *
 * Input: s = "a#c", t = "b"
 * Output: false
 * Explanation: s becomes "c" while t becomes "b".
 *
 * Constraints:
 *
 * 	1 <= s.length, t.length <= 200
 * 	s and t only contain lowercase letters and '#' characters.
 *
 * Follow up: Can you solve it in O(n) time and O(1) space?
 ******************************************************************************************************/

// string string -> boolean
// given two strings, s and t, return true if they're equal when typed into a text editor
// "#" means a backspace character - remove all the characters before a "#" on both strings

// stub:
/**
function backspaceCompare(s: string, t: string): boolean {
    return false
}
*/

// template:
/**
function backspaceCompare(s: string, t: string): boolean {
    return (... s t)
}
*/

export function backspaceCompare(s: string, t: string): boolean {
  return removeBackspace(t) === removeBackspace(s);
}

// string -> string
// remove all the characters before a "#" of the given string, s,

// stub:
/**
function removeBackspace(s: string): string {
    return ""
}
*/

// template
/**
function removeBackspace(s: string): string {
    return (... s)
}
*/

export function removeBackspace(s: string): string {
  let parsedString: string = "";
  let backspaceCount: number = 0;

  for (let i: number = s.length - 1; i >= 0; i--) {
    if (s[i] === "#") {
      backspaceCount++;
    } else if (backspaceCount > 0) {
      backspaceCount--;
    } else {
      parsedString += s[i];
      backspaceCount = 0;
    }
  }

  return parsedString;
}
