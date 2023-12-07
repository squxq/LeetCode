// Source : https://leetcode.com/problems/largest-odd-number-in-string/
// Author : francisco
// Date   : 2023-12-07

/** ***************************************************************************************************
 *
 * You are given a string num, representing a large integer. Return the largest-valued odd integer (as
 * a string) that is a non-empty substring of num, or an empty string "" if no odd integer exists.
 *
 * A substring is a contiguous sequence of characters within a string.
 *
 * Example 1:
 *
 * Input: num = "52"
 * Output: "5"
 * Explanation: The only non-empty substrings are "5", "2", and "52". "5" is the only odd number.
 *
 * Example 2:
 *
 * Input: num = "4206"
 * Output: ""
 * Explanation: There are no odd numbers in "4206".
 *
 * Example 3:
 *
 * Input: num = "35427"
 * Output: "35427"
 * Explanation: "35427" is already an odd number.
 *
 * Constraints:
 *
 * 	1 <= num.length <= 10^5
 * 	num only consists of digits and does not contain any leading zeros.
 ******************************************************************************************************/

/**
 * string -> string
 * return the largest-valued odd integer (as a string) that is a non-empty substring of the given string, num,
 * or an empty string "" if no odd integer exists

 * Stub:
 function largestOddNumber(num: string): string {return ""}

 * Tests:
 * I: num = "52" -> O: "5"
 * I: num = "4206" -> O: ""
 * I: num = "35427" -> O: "35427"
 * I: num = "239537672423884969653287101" -> O: "239537672423884969653287101"
 */

/**
 * Time Complexity: O(n), where n is the length of num
 * Space Complexity: O(1)

 * Runtime: 48ms (97.67%)
 * Memory: 46.54MB (60.47%)
 */

export function largestOddNumber(num: string): string {
  for (let i: number = num.length; i > 0; i--) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const lastDigit: string = num[i - 1]!;
    if (+lastDigit % 2 === 1) {
      return num.slice(0, i);
    }
  }
  return "";
}
