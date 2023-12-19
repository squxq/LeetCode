// Source : https://leetcode.com/problems/destination-city/
// Author : francisco
// Date   : 2023-12-19

import { destCity } from "./DestinationCity";

describe("destination city", () => {
  test("example 1", () => {
    const result: string = destCity([
      ["London", "New York"],
      ["New York", "Lima"],
      ["Lima", "Sao Paulo"],
    ]);

    expect(result).toBe("Sao Paulo");
  });

  test("example 2", () => {
    const result: string = destCity([
      ["B", "C"],
      ["D", "B"],
      ["C", "A"],
    ]);

    expect(result).toBe("A");
  });

  test("example 3", () => {
    const result: string = destCity([["A", "Z"]]);

    expect(result).toBe("Z");
  });

  test("example 4", () => {
    const result: string = destCity([
      ["qMTSlfgZlC", "ePvzZaqLXj"],
      ["xKhZXfuBeC", "TtnllZpKKg"],
      ["ePvzZaqLXj", "sxrvXFcqgG"],
      ["sxrvXFcqgG", "xKhZXfuBeC"],
      ["TtnllZpKKg", "OAxMijOZgW"],
    ]);

    expect(result).toBe("OAxMijOZgW");
  });
});
