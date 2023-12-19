// Source : https://leetcode.com/problems/string-compression/
// Author : francisco
// Date   : 2023-12-19

import { compress } from "./StringCompression";

describe("string compression", () => {
  test("example 1", () => {
    const result: number = compress(["a", "a", "b", "b", "c", "c", "c"]);

    expect(result).toBe(6);
  });

  test("example 2", () => {
    const result: number = compress(["a"]);

    expect(result).toBe(1);
  });

  test("example 3", () => {
    const result: number = compress([
      "a",
      "b",
      "b",
      "b",
      "b",
      "b",
      "b",
      "b",
      "b",
      "b",
      "b",
      "b",
      "b",
    ]);

    expect(result).toBe(4);
  });

  test("example 4", () => {
    const result: number = compress(["a", "a", "a", "b", "b", "a", "a"]);

    expect(result).toBe(6);
  });

  test("example 5", () => {
    const result: number = compress([
      "a",
      "a",
      "a",
      "b",
      "b",
      "b",
      "c",
      "c",
      "c",
    ]);

    expect(result).toBe(6);
  });
});
