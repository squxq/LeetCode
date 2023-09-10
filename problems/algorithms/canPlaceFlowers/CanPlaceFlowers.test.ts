// Source : https://leetcode.com/problems/can-place-flowers/
// Author : squxq
// Date   : 2023-09-10

import { canPlaceFlowers } from "./CanPlaceFlowers";

describe("canPlaceFlowers", () => {
  it("should return true when there are enough empty spaces to plant all flowers", () => {
    expect(canPlaceFlowers([1, 0, 0, 0, 1], 1)).toBe(true);
    expect(canPlaceFlowers([0, 0, 0, 0, 0], 3)).toBe(true);
    expect(canPlaceFlowers([0, 0, 0, 0], 2)).toBe(true);
    expect(canPlaceFlowers([0, 0, 0, 0, 0], 0)).toBe(true);
  });

  it("should return false when there are not enough empty spaces to plant all flowers", () => {
    expect(canPlaceFlowers([1, 0, 0, 0, 1], 2)).toBe(false);
    expect(canPlaceFlowers([1, 1, 1], 1)).toBe(false);
    expect(canPlaceFlowers([0, 0, 1, 0, 0], 2)).toBe(false);
  });

  it("should handle edge cases and constraints", () => {
    // Edge cases
    expect(canPlaceFlowers([], 0)).toBe(true); // Empty flowerbed
    expect(canPlaceFlowers([0], 1)).toBe(true); // One empty space, one flower to plant
    expect(canPlaceFlowers([1], 0)).toBe(true); // One flower, no need to plant

    // Constraints
    const largeFlowerbed = Array.from({ length: 20000 }, () => 0); // 2 * 10^4 length flowerbed
    expect(canPlaceFlowers(largeFlowerbed, 10000)).toBe(true); // Half empty, half flowers
    expect(canPlaceFlowers(largeFlowerbed, 20001)).toBe(false); // More flowers than empty spaces
    expect(canPlaceFlowers(largeFlowerbed, 0)).toBe(true); // No flowers to plant
  });

  it("should return false when there are no empty spaces and n is greater than 0", () => {
    expect(canPlaceFlowers([1, 1, 1, 1, 1], 1)).toBe(false);
    expect(canPlaceFlowers([1, 1, 1, 1, 1], 5)).toBe(false);
    expect(canPlaceFlowers([0, 1, 0, 1, 0], 2)).toBe(false);
  });

  it("should return true when there are no flowers to plant (n is 0)", () => {
    expect(canPlaceFlowers([0, 0, 0, 0, 0], 0)).toBe(true);
    expect(canPlaceFlowers([1, 0, 1, 0, 1], 0)).toBe(true);
  });

  it("should return true when there are no flowers and no empty spaces (n is 0)", () => {
    expect(canPlaceFlowers([], 0)).toBe(true);
  });

  it("should return true when n is 0 and there are empty spaces between flowers", () => {
    expect(canPlaceFlowers([1, 0, 0, 1, 0, 0, 1], 0)).toBe(true);
  });

  it("should handle large flowerbeds with all empty spaces", () => {
    const largeEmptyFlowerbed = Array.from({ length: 20000 }, () => 0); // All empty
    expect(canPlaceFlowers(largeEmptyFlowerbed, 10000)).toBe(true); // Half empty, half flowers
    expect(canPlaceFlowers(largeEmptyFlowerbed, 20000)).toBe(true); // All empty, no flowers to plant
  });

  it("should handle large flowerbeds with all flowers", () => {
    const largeFullFlowerbed = Array.from({ length: 20000 }, () => 1); // All flowers
    expect(canPlaceFlowers(largeFullFlowerbed, 0)).toBe(true); // No flowers to plant
    expect(canPlaceFlowers(largeFullFlowerbed, 1)).toBe(false); // One flower to plant, no space
  });
});
