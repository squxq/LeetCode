// Source : https://leetcode.com/problems/sum-of-subarray-minimums/
// Author : francisco
// Date   : 2024-01-21

/*****************************************************************************************************
 *
 * Given an array of integers arr, find the sum of min(b), where b ranges over every (contiguous)
 * subarray of arr. Since the answer may be large, return the answer modulo 10^9 + 7.
 *
 * Example 1:
 *
 * Input: arr = [3,1,2,4]
 * Output: 17
 * Explanation:
 * Subarrays are [3], [1], [2], [4], [3,1], [1,2], [2,4], [3,1,2], [1,2,4], [3,1,2,4].
 * Minimums are 3, 1, 2, 4, 1, 1, 2, 1, 1, 1.
 * Sum is 17.
 *
 * Example 2:
 *
 * Input: arr = [11,81,94,43,3]
 * Output: 444
 *
 * Constraints:
 *
 * 	1 <= arr.length <= 3 * 10^4
 * 	1 <= arr[i] <= 3 * 10^4
 ******************************************************************************************************/

/**
 * @param {number[]} arr
 * @returns {number}
 * return the sum of min(b) where b ranges over every contiguous subarray of arr
 * NOTE: return the answer modulo 10^9 + 7
 * APPROACH: at each element, i, if I have the number of elements greater than it, x > i
 * to the left, l, and to the right, r; (l + 1) * r = number of times that current element, i
 * is the minimum of any subarray of arr

 * if I want to find the nearest smaller/larger element to the left/right
 * index; frequency; range; etc - use monotonic stack - stack that is always increasing/decreasing

 * Tests:
 * I: arr = [3,1,2,4] -> O: 17
 * I: arr = [11,81,94,43,3] -> O: 444
 * I: arr = [2,2] -> O: 6
 * I: arr = [60,39,58,30] -> O: 396

 * Template:
 * left and right arrays store the count of elements greater than current element in its left or right
 * monotonic stacks - left and right ranges of arr's elements greater than current element
 * total is the result accumulator in the last for loop over the

 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
export function sumSubarrayMins(arr: number[]): number {
  const left: number[] = [];
  const right: number[] = [];

  const rightStack: Array<{ value: number; count: number }> = [];
  const leftStack: Array<{ value: number; count: number }> = [];

  for (const val of arr) {
    let count: number = 1; // offset for empty element [3, {}]

    while (
      leftStack.length > 0 &&
      (leftStack[leftStack.length - 1]?.value as number) > val
    ) {
      count += leftStack[leftStack.length - 1]?.count as number;
      leftStack.pop();
    }

    leftStack.push({ value: val, count });
    left.push(count);
  }

  for (let index: number = arr.length - 1; index >= 0; index--) {
    let count: number = 1; // offset for current element [1, 2, 4]

    while (
      rightStack.length > 0 &&
      (rightStack[rightStack.length - 1]?.value as number) >=
        (arr[index] as number)
    ) {
      count += rightStack[rightStack.length - 1]?.count as number;
      rightStack.pop();
    }

    rightStack.push({ value: arr[index] as number, count });
    right.push(count);
  }

  // with [3, {}] and [1, 2, 4] we can for all the subarrays
  // ..., [3, 1, 2, 4], [{}, 1, 2, 4] === [1, 2, 4], ...

  let total: number = 0;

  for (let i: number = 0; i < arr.length; i++) {
    total +=
      (left[i] as number) *
      (right[arr.length - 1 - i] as number) *
      (arr[i] as number);
  }

  return total % (10 ** 9 + 7);
}
