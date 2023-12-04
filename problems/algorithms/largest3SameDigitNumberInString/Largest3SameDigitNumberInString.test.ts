// Source : https://leetcode.com/problems/largest-3-same-digit-number-in-string/
// Author : Francisco Tomas
// Date   : 2023-12-04

import { largestGoodInteger } from "./Largest3SameDigitNumberInString";

describe("largest 3-same-digit number in string", () => {
  test("example 1", () => {
    const result: string = largestGoodInteger("6777133339");
    expect(result).toBe("777");
  });

  test("example 2", () => {
    const result: string = largestGoodInteger("2300019");
    expect(result).toBe("000");
  });

  test("example 3", () => {
    const result: string = largestGoodInteger("42352338");
    expect(result).toBe("");
  });

  test("complext example - example 4", () => {
    const result: string = largestGoodInteger("3200014888");
    expect(result).toBe("888");
  });

  test("another complex example - example 5", () => {
    const result: string = largestGoodInteger("1134324999");
    expect(result).toBe("999");
  });
});
