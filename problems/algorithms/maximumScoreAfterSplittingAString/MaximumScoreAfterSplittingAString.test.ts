// Source : https://leetcode.com/problems/maximum-score-after-splitting-a-string/
// Author : francisco
// Date   : 2023-12-22

import { maxScore } from "./MaximumScoreAfterSplittingAString";

describe("maximum score after splitting a string", () => {
  test("example 1", () => {
    const result: number = maxScore("011101");

    expect(result).toBe(5);
  });

  test("example 2", () => {
    const result: number = maxScore("00111");

    expect(result).toBe(5);
  });

  test("example 3", () => {
    const result: number = maxScore("1111");

    expect(result).toBe(3);
  });

  test("example 4", () => {
    const result: number = maxScore("1001");

    expect(result).toBe(3);
  });

  test("example 5", () => {
    const result: number = maxScore("1101001");

    expect(result).toBe(4);
  });
});
