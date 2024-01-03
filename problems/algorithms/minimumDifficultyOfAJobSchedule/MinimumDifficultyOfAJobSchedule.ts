// Source : https://leetcode.com/problems/minimum-difficulty-of-a-job-schedule/
// Author : francisco
// Date   : 2024-01-03

/*****************************************************************************************************
 *
 * You want to schedule a list of jobs in d days. Jobs are dependent (i.e To work on the i^th job, you
 * have to finish all the jobs j where 0 <= j < i).
 *
 * You have to finish at least one task every day. The difficulty of a job schedule is the sum of
 * difficulties of each day of the d days. The difficulty of a day is the maximum difficulty of a job
 * done on that day.
 *
 * You are given an integer array jobDifficulty and an integer d. The difficulty of the i^th job is
 * jobDifficulty[i].
 *
 * Return the minimum difficulty of a job schedule. If you cannot find a schedule for the jobs return
 * -1.
 *
 * Example 1:
 *
 * Input: jobDifficulty = [6,5,4,3,2,1], d = 2
 * Output: 7
 * Explanation: First day you can finish the first 5 jobs, total difficulty = 6.
 * Second day you can finish the last job, total difficulty = 1.
 * The difficulty of the schedule = 6 + 1 = 7
 *
 * Example 2:
 *
 * Input: jobDifficulty = [9,9,9], d = 4
 * Output: -1
 * Explanation: If you finish a job per day you will still have a free day. you cannot find a schedule
 * for the given jobs.
 *
 * Example 3:
 *
 * Input: jobDifficulty = [1,1,1], d = 3
 * Output: 3
 * Explanation: The schedule is one job per day. total difficulty will be 3.
 *
 * Constraints:
 *
 * 	1 <= jobDifficulty.length <= 300
 * 	0 <= jobDifficulty[i] <= 1000
 * 	1 <= d <= 10
 ******************************************************************************************************/

/**
 * @param {number[]} jobDifficulty
 * @param {number} d
 * @returns {number}
 * return the minimum difficulty of a job schedule
 * if it is not possible to find a schedule for the given jobs return -1

 * Tests:
 * I: jobDifficulty = [6,5,4,3,2,1], d = 2 -> O: 7
 * I: jobDifficulty = [9,9,9], d = 4 -> O: -1
 * I: jobDifficulty = [1,1,1], d = 3 -> O: 3

 * Template: <recursion, memoization, cp acc>
 * base case: no more jobs and no more days

 * Time Complexity: O(n^2 * d)
 * Space Complexity: O(n^2 * d)

 * Runtime: 56ms (100.00%)
 * Memory: 49.80MB (37.93%)
 */
export function minDifficulty(jobDifficulty: number[], d: number): number {
  const jobs: number = jobDifficulty.length;

  if (jobs < d) return -1;

  const cache = new Map<number, number>();

  function dfs(index: number, d: number, dayDifficulty: number): number {
    if (index === jobs && d === 0) return 0;
    else if (index === jobs || d === 0) return Number.MAX_SAFE_INTEGER;
    else {
      const key: number = index * 1001 * 11 + dayDifficulty * 11 + d;
      if (cache.has(key)) return cache.get(key) as number;

      // change day difficulty:
      // it is only possible to finish a day that has at least one job in it
      const newDifficulty: number =
        (jobDifficulty[index] as number) > dayDifficulty
          ? (jobDifficulty[index] as number)
          : dayDifficulty;

      const continueDay: number = dfs(index + 1, d, newDifficulty);
      const finishDay: number = newDifficulty + dfs(index + 1, d - 1, 0);

      const result: number = Math.min(continueDay, finishDay);
      cache.set(key, result);

      return result;
    }
  }

  return dfs(0, d, 0);
}
