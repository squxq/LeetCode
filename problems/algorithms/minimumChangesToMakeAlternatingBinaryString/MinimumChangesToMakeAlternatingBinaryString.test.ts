// Source : https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string/
// Author : francisco
// Date   : 2023-12-24

import { minOperations } from "./MinimumChangesToMakeAlternatingBinaryString";

describe("minimum changes to make alternating binary string", () => {
  test("example 1", () => {
    const result: number = minOperations("0100");

    expect(result).toBe(1);
  });

  test("example 2", () => {
    const result: number = minOperations("10");

    expect(result).toBe(0);
  });

  test("example 3", () => {
    const result: number = minOperations("1111");

    expect(result).toBe(2);
  });

  test("example 4", () => {
    const result: number = minOperations("10010100");

    expect(result).toBe(3);
  });

  test("example 5", () => {
    const result: number = minOperations("1100010111");

    expect(result).toBe(3);
  });
});
