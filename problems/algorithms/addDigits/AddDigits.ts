// Source : https://leetcode.com/problems/add-digits/
// Author : squxq
// Date   : 2023-09-21

/*****************************************************************************************************
 *
 * Given an integer num, repeatedly add all its digits until the result has only one digit, and return
 * it.
 *
 * Example 1:
 *
 * Input: num = 38
 * Output: 2
 * Explanation: The process is
 * 38 --> 3 + 8 --> 11
 * 11 --> 1 + 1 --> 2
 * Since 2 has only one digit, return it.
 *
 * Example 2:
 *
 * Input: num = 0
 * Output: 0
 *
 * Constraints:
 *
 * 	0 <= num <= 2^31 - 1
 *
 * Follow up: Could you do it without any loop/recursion in O(1) runtime?
 ******************************************************************************************************/

/** Function Definition - addDigits

// number -> number
// repeatedly add all the given number digits until the result has only one digit, and return it

// Stub:
function addDigits(num: number): number {
    return 0
}

// Tests:
addDigits(38) -> 2
addDigits(0) -> 0

// Template:
function addDigits(num: number): number {
    (... num)
}
*/

/** Previous function body 
function addDigits(num: number): number {
    const digits: number = num.toString().split("").reduce((acc, crr) => acc += Number(crr), 0)
    return digits.toString().length > 1 ? addDigits(digits) : digits
};
*/

export function addDigits(num: number): number {
  return ((num - 1) % 9) + 1;
}
