// Source : https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/
// Author : squxq
// Date   : 2023-09-21

/*****************************************************************************************************
 *
 * You are given an array of unique integers salary where salary[i] is the salary of the i^th employee.
 *
 * Return the average salary of employees excluding the minimum and maximum salary. Answers within
 * 10^-5 of the actual answer will be accepted.
 *
 * Example 1:
 *
 * Input: salary = [4000,3000,1000,2000]
 * Output: 2500.00000
 * Explanation: Minimum salary and maximum salary are 1000 and 4000 respectively.
 * Average salary excluding minimum and maximum salary is (2000+3000) / 2 = 2500
 *
 * Example 2:
 *
 * Input: salary = [1000,2000,3000]
 * Output: 2000.00000
 * Explanation: Minimum salary and maximum salary are 1000 and 3000 respectively.
 * Average salary excluding minimum and maximum salary is (2000) / 1 = 2000
 *
 * Constraints:
 *
 * 	3 <= salary.length <= 100
 * 	1000 <= salary[i] <= 10^6
 * 	All the integers of salary are unique.
 ******************************************************************************************************/

/** Function Definition: average
// number[] -> number
// produce average salary excluding the minimum and maximum salary of a given salary array

// Stub:
function average(salary: number[]): number {
    return 0
}

// Tests:
average([4000,3000,1000,2000]) -> 2500.00000
[1000,2000,3000] -> 2000.00000
[25000,48000,57000,86000,33000,10000,42000,3000,54000,29000,79000,40000] -> 41700.00000

// Template
function average (salary: number[]):number {
    (...salary)
}
*/

/** Previous approach:
function average(salary: number[]): number {
    const salaries: number[] = salary.sort((a: number, b: number) => a - b).slice(1, salary.length - 1)
    return salaries.reduce((acc: number, crr: number) => acc += crr, 0) / salaries.length
};
*/

export function average(salary: number[]): number {
  let sum: number = 0;
  let max = -Infinity;
  let min = Infinity;
  for (const sal of salary) {
    sum += sal;
    if (max < sal) max = sal;
    if (min > sal) min = sal;
  }
  return (sum - (max + min)) / (salary.length - 2);
}
