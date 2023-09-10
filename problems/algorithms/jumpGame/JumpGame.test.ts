// Source : https://leetcode.com/problems/jump-game/
// Author : squxq
// Date   : 2023-09-10

import { canJump } from "./JumpGame"; // Import the canJump function from your file

describe("canJump", () => {
  it("should return true for a simple valid case", () => {
    expect(canJump([2, 3, 1, 1, 4])).toBe(true);
  });

  it("should return false for a simple invalid case", () => {
    expect(canJump([3, 2, 1, 0, 4])).toBe(false);
  });

  it("should return true for an array with a single element (0)", () => {
    expect(canJump([0])).toBe(true);
  });

  it("should return true for an array with two elements [1, 0]", () => {
    expect(canJump([1, 0])).toBe(true);
  });

  it("should return false for an array with two elements [0, 1]", () => {
    expect(canJump([0, 1])).toBe(false);
  });

  it("should return true for a large valid case", () => {
    // Test with a large array where it's possible to reach the end
    const largeValidArray = new Array(10000).fill(1);
    expect(canJump(largeValidArray)).toBe(true);
  });

  it("should return false for a large invalid case", () => {
    // Test with a large array where it's impossible to reach the end
    const largeInvalidArray = new Array(10000).fill(0);
    expect(canJump(largeInvalidArray)).toBe(false);
  });

  it("should handle an array with all elements equal to 0 except the last element", () => {
    const input = new Array(10000).fill(0);
    input[input.length - 1] = 1;
    expect(canJump(input)).toBe(true);
  });

  it("should handle an array with all elements equal to 0", () => {
    const input = new Array(10000).fill(0);
    expect(canJump(input)).toBe(false);
  });
});
