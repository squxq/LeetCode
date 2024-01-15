// Source : https://leetcode.com/problems/find-players-with-zero-or-one-losses/
// Author : francisco
// Date   : 2024-01-15

import { findWinners } from "./FindPlayersWithZeroOrOneLosses";

describe("find players with zero or one losses", () => {
  test("example 1", () => {
    const result: number[][] = findWinners([
      [1, 3],
      [2, 3],
      [3, 6],
      [5, 6],
      [5, 7],
      [4, 5],
      [4, 8],
      [4, 9],
      [10, 4],
      [10, 9],
    ]);

    expect(result).toStrictEqual([
      [1, 2, 10],
      [4, 5, 7, 8],
    ]);
  });

  test("example 2", () => {
    const result: number[][] = findWinners([
      [2, 3],
      [1, 3],
      [5, 4],
      [6, 4],
    ]);

    expect(result).toStrictEqual([[1, 2, 5, 6], []]);
  });
});
