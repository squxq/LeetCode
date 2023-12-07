// Source : https://leetcode.com/problems/largest-odd-number-in-string/
// Author : francisco
// Date   : 2023-12-07

import { largestOddNumber } from "./LargestOddNumberInString";

describe("largest odd number in string", () => {
  test("example 1 - simple", () => {
    const result: string = largestOddNumber("52");
    expect(result).toBe("5");
  });

  test("example 2 - slightly more complex", () => {
    const result: string = largestOddNumber("4206");
    expect(result).toBe("");
  });

  test("example 3 - similar to example 2", () => {
    const result: string = largestOddNumber("35427");
    expect(result).toBe("35427");
  });

  test("example 4 - complex example", () => {
    const result: string = largestOddNumber("239537672423884969653287101");
    expect(result).toBe("239537672423884969653287101");
  });
});
