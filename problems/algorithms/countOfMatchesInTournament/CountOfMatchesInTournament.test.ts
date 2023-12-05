// Source : https://leetcode.com/problems/count-of-matches-in-tournament/
// Author : Francisco Tomas
// Date   : 2023-12-05

import { numberOfMatches } from "./CountOfMatchesInTournament";

describe("count of matches in tournament", () => {
  test("example 1", () => {
    const result: number = numberOfMatches(7);
    expect(result).toBe(6);
  });

  test("example 2", () => {
    const result: number = numberOfMatches(14);
    expect(result).toBe(13);
  });
});
