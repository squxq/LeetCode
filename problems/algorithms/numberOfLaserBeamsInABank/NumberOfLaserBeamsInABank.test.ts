// Source : https://leetcode.com/problems/number-of-laser-beams-in-a-bank/
// Author : francisco
// Date   : 2024-01-03

import { numberOfBeams } from "./NumberOfLaserBeamsInABank";

describe("number of laser beams in a bank", () => {
  test("example 1", () => {
    const result: number = numberOfBeams([
      "011001",
      "000000",
      "010100",
      "001000",
    ]);

    expect(result).toBe(8);
  });

  test("example 2", () => {
    const result: number = numberOfBeams(["000", "111", "000"]);

    expect(result).toBe(0);
  });
});
