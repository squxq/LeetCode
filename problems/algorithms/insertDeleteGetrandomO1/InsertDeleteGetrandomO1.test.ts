// Source : https://leetcode.com/problems/insert-delete-getrandom-o1/
// Author : francisco
// Date   : 2024-01-16

import { RandomizedSet } from "./InsertDeleteGetrandomO1";

describe("Insert Delete GetRandom O(1)", () => {
  test("example 1", () => {
    const randomizedSet: RandomizedSet = new RandomizedSet();

    expect(randomizedSet.insert(1)).toBe(true);
    expect(randomizedSet.remove(2)).toBe(false);
    expect(randomizedSet.insert(2)).toBe(true);
    expect(randomizedSet.remove(1)).toBe(true);
    expect(randomizedSet.insert(2)).toBe(false);
    expect(randomizedSet.getRandom()).toBe(2);
  });
});
