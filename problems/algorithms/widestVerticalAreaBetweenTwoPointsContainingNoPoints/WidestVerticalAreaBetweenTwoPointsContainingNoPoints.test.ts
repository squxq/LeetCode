// Source : https://leetcode.com/problems/widest-vertical-area-between-two-points-containing-no-points/
// Author : francisco
// Date   : 2023-12-21

import { maxWidthOfVerticalArea } from "./WidestVerticalAreaBetweenTwoPointsContainingNoPoints";

describe("widest vertical area between two points containing no points", () => {
  test("example 1", () => {
    const result: number = maxWidthOfVerticalArea([
      [8, 7],
      [9, 9],
      [7, 4],
      [9, 7],
    ]);

    expect(result).toBe(1);
  });

  test("example 2", () => {
    const result: number = maxWidthOfVerticalArea([
      [3, 1],
      [9, 0],
      [1, 0],
      [1, 4],
      [5, 3],
      [8, 8],
    ]);

    expect(result).toBe(3);
  });

  test("example 3", () => {
    const result: number = maxWidthOfVerticalArea([
      [2, 4],
      [10, 10],
      [6, 8],
      [6, 8],
      [6, 10],
      [8, 6],
      [5, 3],
    ]);

    expect(result).toBe(3);
  });
});
