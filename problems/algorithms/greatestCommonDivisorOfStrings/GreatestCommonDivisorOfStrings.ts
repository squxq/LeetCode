// Source : https://leetcode.com/problems/greatest-common-divisor-of-strings/
// Author : squxq
// Date   : 2023-09-10

/*****************************************************************************************************
 *
 * For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is
 * concatenated with itself one or more times).
 *
 * Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.
 *
 * Example 1:
 *
 * Input: str1 = "ABCABC", str2 = "ABC"
 * Output: "ABC"
 *
 * Example 2:
 *
 * Input: str1 = "ABABAB", str2 = "ABAB"
 * Output: "AB"
 *
 * Example 3:
 *
 * Input: str1 = "LEET", str2 = "CODE"
 * Output: ""
 *
 * Constraints:
 *
 * 	1 <= str1.length, str2.length <= 1000
 * 	str1 and str2 consist of English uppercase letters.
 ******************************************************************************************************/

export function gcdOfStrings(str1: string, str2: string): string {
  // first submit - Brute Force

  // const min: number = Math.min(str1.length, str2.length) - 1
  // let gcd: string = "";
  // for (let i:number = min; i >= 0; i--) {
  //     // check if str1.slice(0, i) is gcd of str1 && is gcd of str2
  //     gcd = str1.slice(0, i + 1)
  //     if (isGCD(str1, gcd) && isGCD(str2, gcd)) {
  //         return gcd
  //     }
  // }
  // return ""

  // second submit: optimized
  // if (str1 + str2 !== str2 + str1) return ""

  // let gcd: string = str1.length >= str2.length ? str2 : str1;
  // while (gcd.length > 0) {
  //     if (isGCD(str1, gcd) && isGCD(str2, gcd)) {
  //         return gcd
  //     } else {
  //         gcd = gcd.slice(0, -1)
  //     }
  // }

  // return ""

  // third submit: another method - Euclidean Algorithm
  if (str1 + str2 !== str2 + str1) return "";
  return str1.slice(0, gcd(str1.length, str2.length));
}

// first and second submits
// function isGCD(str: string, divisor: string): boolean {
//     return str.replaceAll(divisor, "").length === 0
// }

// third submit
function gcd(a: number, b: number): number {
  while (a !== b) {
    if (a > b) a -= b;
    else b -= a;
  }

  return a;
}
