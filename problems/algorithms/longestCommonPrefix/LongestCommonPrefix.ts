// Source : https://leetcode.com/problems/longest-common-prefix/
// Author : squxq
// Date   : 2023-09-09

/*****************************************************************************************************
 *
 * Write a function to find the longest common prefix string amongst an array of strings.
 *
 * If there is no common prefix, return an empty string "".
 *
 * Example 1:
 *
 * Input: strs = ["flower","flow","flight"]
 * Output: "fl"
 *
 * Example 2:
 *
 * Input: strs = ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 *
 * Constraints:
 *
 * 	1 <= strs.length <= 200
 * 	0 <= strs[i].length <= 200
 * 	strs[i] consists of only lowercase English letters.
 ******************************************************************************************************/

export function longestCommonPrefix(strs: string[]): string {
  // first submit

  // strs = strs.sort()
  // let max: string = ""
  // for (let i: number = 0; i < strs[0].length; i++) {
  //     if (strs[0][i] === strs[strs.length - 1][i]) {
  //         max += strs[0][i]
  //     } else {
  //         break
  //     }
  // }
  // return max

  // second submit

  // let max: string = ""
  // for (let i: number = 0; i < strs[0].length; i++) {
  //     if (strs.every(str => str[i] === strs[0][i])) {
  //         max += strs[0][i]
  //     } else {
  //         break
  //     }
  // }

  // return max

  // third submit - using Math.min we don't waste time looping any indices past strs[0].length assuming strs[strs.length - 1].length is longer, or vice versus, because we already know it won't be common
  let max: string = "";
  strs = strs.sort();
  const first: string = strs[0] as string;
  const last: string = strs[strs.length - 1] as string;
  for (let i: number = 0; i < Math.min(first.length, last.length); i++) {
    if (first[i] === last[i]) {
      max += first[i];
    } else {
      return max;
    }
  }
  return max;
}
