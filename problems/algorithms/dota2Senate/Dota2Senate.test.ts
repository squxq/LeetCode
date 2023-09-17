// Source : https://leetcode.com/problems/dota2-senate/
// Author : squxq
// Date   : 2023-09-17

import { predictPartyVictory } from "./Dota2Senate"; // Replace with your actual file name

describe("predictPartyVictory", () => {
  it('should return "Radiant" when given "RD"', () => {
    expect(predictPartyVictory("RD")).toBe("Radiant");
  });

  it('should return "Dire" when given "RDD"', () => {
    expect(predictPartyVictory("RDD")).toBe("Dire");
  });

  it('should return "Radiant" when given "RRDD"', () => {
    expect(predictPartyVictory("RRDD")).toBe("Radiant");
  });

  it('should return "Radiant" when given "RRR"', () => {
    expect(predictPartyVictory("RRR")).toBe("Radiant");
  });

  it('should return "Radiant" when given "RRRDDD"', () => {
    expect(predictPartyVictory("RRRDDD")).toBe("Radiant");
  });

  it('should return "Dire" when given "DDDRRR"', () => {
    expect(predictPartyVictory("DDDRRR")).toBe("Dire");
  });

  it('should return "Radiant" when given "R"', () => {
    expect(predictPartyVictory("R")).toBe("Radiant");
  });

  it('should return "Dire" when given "D"', () => {
    expect(predictPartyVictory("D")).toBe("Dire");
  });

  it('should return "Radiant" when given "RRDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD"', () => {
    expect(
      predictPartyVictory(
        "RRDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD",
      ),
    ).toBe("Radiant");
  });

  it('should return "Dire" when given "DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD"', () => {
    expect(
      predictPartyVictory(
        "DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD",
      ),
    ).toBe("Dire");
  });

  it('should return "Radiant" when given "RDDDRRDDDDDRRDDDDDRRDDDDDRRDDDDDRRDDDDDRRDDDDDRRDDDDDRRDDDDDRRDDDDDR"', () => {
    expect(
      predictPartyVictory(
        "RDDDRRDDDDDRRDDDDDRRDDDDDRRDDDDDRRDDDDDRRDDDDDRRDDDDDRRDDDDDRRDDDDDR",
      ),
    ).toBe("Radiant");
  });

  it('should return "Dire" when given "DRDRDRDRDRDRDRDRDRDRDRDRDRDRDRDRDRDRDRDRDRDRDRDRDRDRDRDRDRDRDRDRDRDRDR"', () => {
    expect(
      predictPartyVictory(
        "DRDRDRDRDRDRDRDRDRDRDRDRDRDRDRDRDRDRDRDRDRDRDRDRDRDRDRDRDRDRDRDRDRDRDR",
      ),
    ).toBe("Dire");
  });

  it('should return "Radiant" when given "RDDDRRDDDDDRRDDDDDRRDDDDDRRDDDDDRRDDDDDRRDDDDDRRDDDDDRRDDDDDRRDDDDDRRRR"', () => {
    expect(
      predictPartyVictory(
        "RDDDRRDDDDDRRDDDDDRRDDDDDRRDDDDDRRDDDDDRRDDDDDRRDDDDDRRDDDDDRRDDDDDRRRR",
      ),
    ).toBe("Radiant");
  });

  it('should return "Dire" when given "DDDDRDDDDDDDRDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD"', () => {
    expect(
      predictPartyVictory(
        "DDDDRDDDDDDDRDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD",
      ),
    ).toBe("Dire");
  });

  it('should return "Radiant" when given "RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR"', () => {
    expect(
      predictPartyVictory(
        "RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR",
      ),
    ).toBe("Radiant");
  });

  it('should return "Radiant" when given "RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRDD"', () => {
    expect(
      predictPartyVictory(
        "RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRDD",
      ),
    ).toBe("Radiant");
  });

  it('should return "Dire" when given "DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDRRR"', () => {
    expect(
      predictPartyVictory(
        "DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDRRR",
      ),
    ).toBe("Dire");
  });
});
