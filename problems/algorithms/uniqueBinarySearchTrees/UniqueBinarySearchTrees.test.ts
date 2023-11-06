// Source : https://leetcode.com/problems/unique-binary-search-trees/
// Author : squxq
// Date   : 2023-11-06

import { numTrees } from "./UniqueBinarySearchTrees"; // Adjust the import path

describe("numTrees", () => {
  // Test 1: Minimum input
  test("n = 1", () => {
    const n = 1;
    expect(numTrees(n)).toBe(1);
  });

  // Test 2: n = 2
  test("n = 2", () => {
    const n = 2;
    expect(numTrees(n)).toBe(2);
  });

  // Test 3: n = 3
  test("n = 3", () => {
    const n = 3;
    expect(numTrees(n)).toBe(5);
  });

  // Test 4: n = 4
  test("n = 4", () => {
    const n = 4;
    expect(numTrees(n)).toBe(14);
  });

  // Test 5: n = 5
  test("n = 5", () => {
    const n = 5;
    expect(numTrees(n)).toBe(42);
  });

  // Test 6: n = 10
  test("n = 10", () => {
    const n = 10;
    expect(numTrees(n)).toBe(16796);
  });

  // Test 7: n = 15
  test("n = 15", () => {
    const n = 15;
    expect(numTrees(n)).toBe(155117520);
  });

  // Test 8: n = 19 (maximum constraint)
  test("n = 19 (maximum constraint)", () => {
    const n = 19;
    expect(numTrees(n)).toBe(1767263190);
  });

  // Test 9: Negative input
  test("Negative input, n = -5", () => {
    const n = -5;
    expect(numTrees(n)).toBeNaN();
  });

  // Test 10: Decimal input
  test("Decimal input, n = 3.5", () => {
    const n = 3.5;
    expect(numTrees(n)).toBeNaN();
  });
});
