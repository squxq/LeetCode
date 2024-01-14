// Source : https://leetcode.com/problems/count-elements-with-maximum-frequency/
// Author : francisco
// Date   : 2024-01-14

import { maxFrequencyElements } from "./CountElementsWithMaximumFrequency";

describe("count elements with maximum frequency", () => {
  test("example 1", () => {
    const result: number = maxFrequencyElements([1, 2, 2, 3, 1, 4]);

    expect(result).toBe(4);
  });

  test("example 2", () => {
    const result: number = maxFrequencyElements([1, 2, 3, 4, 5]);

    expect(result).toBe(5);
  });
});
