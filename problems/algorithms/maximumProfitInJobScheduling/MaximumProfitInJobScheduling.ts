// Source : https://leetcode.com/problems/maximum-profit-in-job-scheduling/
// Author : francisco
// Date   : 2024-01-06

/*****************************************************************************************************
 *
 * We have n jobs, where every job is scheduled to be done from startTime[i] to endTime[i], obtaining
 * a profit of profit[i].
 *
 * You're given the startTime, endTime and profit arrays, return the maximum profit you can take such
 * that there are no two jobs in the subset with overlapping time range.
 *
 * If you choose a job that ends at time X you will be able to start another job that starts at time X.
 *
 * Example 1:
 *
 * Input: startTime = [1,2,3,3], endTime = [3,4,5,6], profit = [50,10,40,70]
 * Output: 120
 * Explanation: The subset chosen is the first and fourth job.
 * Time range [1-3]+[3-6] , we get profit of 120 = 50 + 70.
 *
 * Example 2:
 *
 * Input: startTime = [1,2,3,4,6], endTime = [3,5,10,6,9], profit = [20,20,100,70,60]
 * Output: 150
 * Explanation: The subset chosen is the first, fourth and fifth job.
 * Profit obtained 150 = 20 + 70 + 60.
 *
 * Example 3:
 *
 * Input: startTime = [1,1,1], endTime = [2,3,4], profit = [5,6,4]
 * Output: 6
 *
 * Constraints:
 *
 * 	1 <= startTime.length == endTime.length == profit.length <= 5 * 10^4
 * 	1 <= startTime[i] < endTime[i] <= 10^9
 * 	1 <= profit[i] <= 10^4
 ******************************************************************************************************/

/* eslint-disable @typescript-eslint/no-non-null-assertion */

/** @typedef {Array<{startTime: number, endTime: number, profit: number}>} Jobs */
type Jobs = Array<{ startTime: number; endTime: number; profit: number }>;

class Solution {
  /** @type {number} */
  N: number;
  /** @type {Jobs} */
  jobs: Jobs;
  /** @type {Map<number, number>} */
  cache: Map<number, number>;

  constructor(startTime: number[], endTime: number[], profit: number[]) {
    this.N = startTime.length;
    this.jobs = this.sortJobs(startTime, endTime, profit);
    this.cache = new Map<number, number>();
  }

  public dfs(index: number = 0): number {
    if (index === this.N) return 0;

    if (this.cache.has(index)) return this.cache.get(index) as number;

    const result: number = Math.max(
      this.jobs[index]!.profit +
        this.dfs(this.lowerBound(this.jobs, index, this.jobs[index]!.endTime)),
      this.dfs(index + 1),
    );

    this.cache.set(index, result);
    return result;
  }

  /**
   * @param {Jobs} jobs
   * @param {number} start
   * @param {number} x
   * @returns {number}
   * lower bound function to find the index of the next element in the given array, jobs,
   * with value equal or greater than given value, x, starting at index, start

   * Template: iteration
   * constants: low = start and high = arr.length indexes
   * while loop - each iteration find the middle index (middle) for both bounds low and high
   * if value at index middle in jobs is less than x update middle; otherwise update high
   */
  private lowerBound(jobs: Jobs, start: number, x: number): number {
    let low: number = start;
    let high: number = jobs.length;

    while (low < high) {
      const middle: number = Math.floor((low + high) / 2);
      if (jobs[middle]!.startTime < x) low = middle + 1;
      else high = middle;
    }

    return low;
  }

  /**
   * @param {number[]} startTime
   * @param {number[]} endTime
   * @param {number[]} profit
   * @returns {Jobs}
   * merge sort startTime in increasing numerical order, and change the other two arrays accordingly
   * ASSUME: 1 <= startTime.length == endTime.length == profit.length <= 5 * 10^4

   * Template: recursion
   * base case - length of startTime is less than or equal to 1, return the given arrays
   * get the middle index
   * call sortArrays with all the left subArrays: .slice(0, middle)
   * call sortArrays with all the right subArrays: .slice(middle)
   * merge them together, according to both left and right startTime
   */
  private sortJobs(
    startTime: number[],
    endTime: number[],
    profit: number[],
  ): Jobs {
    if (startTime.length === 1)
      return [
        {
          startTime: startTime[0] as number,
          endTime: endTime[0] as number,
          profit: profit[0] as number,
        },
      ];

    const middle: number = Math.floor(startTime.length / 2);

    return this.merge(
      this.sortJobs(
        startTime.slice(0, middle),
        endTime.slice(0, middle),
        profit.slice(0, middle),
      ),
      this.sortJobs(
        startTime.slice(middle),
        endTime.slice(middle),
        profit.slice(middle),
      ),
    );
  }

  /**
   * @param {Jobs} left
   * @param {Jobs} right
   * @returns {Jobs}
   * merge two given sorted arrays in ascending numerical order of their elements startTime key

   * Template: iteration - while loops
   * constants: result and lengths
   * pointers: left and right pointer
   */
  private merge(left: Jobs, right: Jobs): Jobs {
    const result: Jobs = [];
    const leftLen: number = left.length;
    const rightLen: number = right.length;

    let leftPointer: number = 0;
    let rightPointer: number = 0;

    while (leftPointer < leftLen && rightPointer < rightLen) {
      if (left[leftPointer]!.startTime <= right[rightPointer]!.startTime) {
        result.push(left[leftPointer]!);
        leftPointer++;
      } else {
        result.push(right[rightPointer]!);
        rightPointer++;
      }
    }

    while (leftPointer < leftLen) {
      result.push(left[leftPointer]!);
      leftPointer++;
    }

    while (rightPointer < rightLen) {
      result.push(right[rightPointer]!);
      rightPointer++;
    }

    return result;
  }
}

/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @returns {number}
 * return the maximum profit that can be taken from the given jobs,
 * such that there are no two jobs in the subset with overlapping time range

 * Tests:
 * I: startTime = [1,2,3,3], endTime = [3,4,5,6], profit = [50,10,40,70] -> O: 120
 * I: startTime = [1,2,3,4,6], endTime = [3,5,10,6,9], profit = [20,20,100,70,60] -> O: 150
 * I: startTime = [1,1,1], endTime = [2,3,4], profit = [5,6,4] -> O: 6
 * I: startTime = [4,2,4,8,2], endTime = [5,5,5,10,8], profit = [1,2,8,10,4] -> O: 18

 * Template: 
 * sort the elements by starting time - merge sort
 * either start or skip a job; if we start a job add the profit to the result
 * get its ending time, then binary search the index of the starting time >= ending time
 * return the max of starting or skiping a job

 * Time Complexity: O(n * logn)
 * Space Complexity: O(n)
 */
export function jobScheduling(
  startTime: number[],
  endTime: number[],
  profit: number[],
): number {
  const solution: Solution = new Solution(startTime, endTime, profit);

  return solution.dfs();
}
