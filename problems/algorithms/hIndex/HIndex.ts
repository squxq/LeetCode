// Source : https://leetcode.com/problems/h-index/
// Author : squxq
// Date   : 2023-09-08

/** ***************************************************************************************************
 *
 * Given an array of integers citations where citations[i] is the number of citations a researcher
 * received for their i^th paper, return the researcher's h-index.
 *
 * According to the definition of h-index on Wikipedia: The h-index is defined as the maximum value of
 * h such that the given researcher has published at least h papers that have each been cited at least
 * h times.
 *
 * Example 1:
 *
 * Input: citations = [3,0,6,1,5]
 * Output: 3
 * Explanation: [3,0,6,1,5] means the researcher has 5 papers in total and each of them had received
 * 3, 0, 6, 1, 5 citations respectively.
 * Since the researcher has 3 papers with at least 3 citations each and the remaining two with no more
 * than 3 citations each, their h-index is 3.
 *
 * Example 2:
 *
 * Input: citations = [1,3,1]
 * Output: 1
 *
 * Constraints:
 *
 * 	n == citations.length
 * 	1 <= n <= 5000
 * 	0 <= citations[i] <= 1000
 ******************************************************************************************************/

export function hIndex(citations: number[]): number {
  const orderedCitations = citations.sort((a, b) => b - a);
  let f = 0;
  let h = 0;
  while (f < citations.length) {
    if (f < orderedCitations[f]) {
      h = f + 1;
    }
    f++;
  }
  return h;
}
