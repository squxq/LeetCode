// Source : https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/
// Author : squxq
// Date   : 2023-09-21

import { average } from "./AverageSalaryExcludingTheMinimumAndMaximumSalary"; // Replace with your actual code file path

describe("average", () => {
  it("should calculate the correct average for valid inputs", () => {
    // Example 1
    expect(average([4000, 3000, 1000, 2000])).toBeCloseTo(2500.0, 5);

    // Example 2
    expect(average([1000, 2000, 3000])).toBeCloseTo(2000.0, 5);

    // Additional test cases
    expect(
      average([
        25000, 48000, 57000, 86000, 33000, 10000, 42000, 3000, 54000, 29000,
        79000, 40000,
      ]),
    ).toBeCloseTo(41700.0, 5);
    expect(average([1000, 1000, 1000])).toBeCloseTo(1000.0, 5);
    expect(average([1000, 2000, 3000, 4000])).toBeCloseTo(2500.0, 5);
    expect(average([1000, 2000, 3000, 4000, 5000, 6000])).toBeCloseTo(
      3500.0,
      5,
    );
  });

  it("should handle edge cases", () => {
    // Edge case: Minimum number of employees
    expect(average([1000, 2000])).toBeCloseTo(1500.0, 5);

    // Edge case: Maximum salary value
    expect(average([1000000, 500000, 100000])).toBeCloseTo(500000.0, 5);

    // Edge case: Minimum salary value
    expect(average([1000, 500, 100])).toBeCloseTo(300.0, 5);
  });

  it("should handle constraints", () => {
    // Constraint: 3 <= salary.length <= 100
    const longArray = Array.from({ length: 100 }, (_, i) => i + 1);
    expect(average(longArray)).toBeCloseTo(50.5, 5);

    // Constraint: 1000 <= salary[i] <= 10^6
    const largeSalaries = Array.from(
      { length: 50 },
      (_, i) => 1000000 - i * 1000,
    );
    expect(average(largeSalaries)).toBeCloseTo(505500.0, 5);

    // Constraint: All salaries are unique
    expect(average([1000, 2000, 2000])).toBeCloseTo(1500.0, 5);
  });
});
