// Source : https://leetcode.com/problems/largest-3-same-digit-number-in-string/
// Author : Francisco Tomas
// Date   : 2023-12-04

/*****************************************************************************************************
 *
 * You are given a string num representing a large integer. An integer is good if it meets the
 * following conditions:
 *
 * 	It is a substring of num with length 3.
 * 	It consists of only one unique digit.
 *
 * Return the maximum good integer as a string or an empty string "" if no such integer exists.
 *
 * Note:
 *
 * 	A substring is a contiguous sequence of characters within a string.
 * 	There may be leading zeroes in num or a good integer.
 *
 * Example 1:
 *
 * Input: num = "6777133339"
 * Output: "777"
 * Explanation: There are two distinct good integers: "777" and "333".
 * "777" is the largest, so we return "777".
 *
 * Example 2:
 *
 * Input: num = "2300019"
 * Output: "000"
 * Explanation: "000" is the only good integer.
 *
 * Example 3:
 *
 * Input: num = "42352338"
 * Output: ""
 * Explanation: No substring of length 3 consists of only one unique digit. Therefore, there are no
 * good integers.
 *
 * Constraints:
 *
 * 	3 <= num.length <= 1000
 * 	num only consists of digits.
 ******************************************************************************************************/

/**
 * string -> string
 * return the maximum good integer in the given string, num, 
 * as a string or an empty string, "", if no such integer exists
 * NOTE: an integer is good if it meets the following conditions:
 *       - it is a substring of num with length 3;
 *       - it consists of only one unique digit.

 * Stub:
 function largestGoodInteger(num: string): string {return ""}

 * Tests:
 * I: num = "6777133339" -> O: "777"
 * I: num = "2300019" -> O: "000"
 * I: num = "42352338" -> O: ""
 * I: num = "3200014888" -> O: "888"
 * I: num = "1134324999" -> O: "999"

 * Template:
 function largestGoodInteger(num: string): string {
     return (... num)
 }
 */

/**
 * Time Complexity: O(n), where n is the length of num
 * Space Complexity: O(1)

 * Runtime: 53ms (95.45%)
 * Memory: 44.51MB (63.64%)
 */
export function largestGoodIntegerV1(num: string): string {
  let ans: string = "";
  let j: number = 0;

  for (let i: number = 1; i < num.length; i++) {
    if (num[j] === num[i]) {
      if (i - j === 2) {
        const goodInt: string = num.slice(j, i + 1);
        if (ans === "" || +ans < +goodInt) {
          ans = goodInt;
        }
      }
    } else {
      j += i - j;
    }
  }

  return ans;
}

/**
 * Time Complexity: O(n), where n is the length of num
 * Space Complexity: O(1)

 * Runtime: 49ms (95.45%)
 * Memory: 43.72MB (100.00%)
 */
export function largestGoodInteger(num: string): string {
  let maxGoodInt: string = "\0";

  for (let i: number = 2; i < num.length; i++) {
    if (num[i] === num[i - 1] && num[i] === num[i - 2]) {
      maxGoodInt = String.fromCharCode(
        Math.max(maxGoodInt.charCodeAt(0), num.charCodeAt(i)),
      );
    }
  }

  return maxGoodInt === "\0" ? "" : maxGoodInt.repeat(3);
}
