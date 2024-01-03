// Source : https://leetcode.com/problems/assign-cookies/
// Author : francisco
// Date   : 2024-01-03

import { findContentChildren } from "./AssignCookies";

describe("assign cookies", () => {
  test("example 1", () => {
    const result: number = findContentChildren([1, 2, 3], [1, 1]);

    expect(result).toBe(1);
  });

  test("example 2", () => {
    const result: number = findContentChildren([1, 2], [1, 2, 3]);

    expect(result).toBe(2);
  });

  test("failed submission - testcase 6/21", () => {
    const result: number = findContentChildren([10, 9, 8, 7], [5, 6, 7, 8]);

    expect(result).toBe(2);
  });
});
