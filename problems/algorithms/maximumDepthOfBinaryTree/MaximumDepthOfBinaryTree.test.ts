// Source : https://leetcode.com/problems/maximum-depth-of-binary-tree/
// Author : squxq
// Date   : 2023-11-13

import { NodeTree, maxDepth, type BT } from "./MaximumDepthOfBinaryTree"; // Import your module

/* eslint-disable @typescript-eslint/no-non-null-assertion */
describe("maxDepth", () => {
  // Test cases for an empty tree
  test("Empty tree should return 0", () => {
    const root: BT = null;
    expect(maxDepth(root)).toBe(0);
  });

  // Test cases for single node tree
  test("Single-node tree should return 1", () => {
    const root: BT = new NodeTree(1);
    expect(maxDepth(root)).toBe(1);
  });

  // Test cases for a balanced binary tree
  test("Balanced binary tree depth", () => {
    const root: BT = new NodeTree(1, new NodeTree(2), new NodeTree(3));
    root.left!.left = new NodeTree(4);
    root.left!.right = new NodeTree(5);
    root.right!.left = new NodeTree(6);
    root.right!.right = new NodeTree(7);

    expect(maxDepth(root)).toBe(3);
  });

  // Test cases for an unbalanced binary tree
  test("Unbalanced binary tree depth", () => {
    const root: BT = new NodeTree(
      1,
      new NodeTree(2, new NodeTree(3, new NodeTree(4))),
    );
    expect(maxDepth(root)).toBe(4);
  });

  // Test cases for large trees
  test("Large balanced binary tree depth", () => {
    const root: BT = generateLargeBalancedTree(1000); // Implement a function to generate a large balanced tree
    expect(maxDepth(root)).toBe(1000);
  });

  // Edge cases
  test("Edge case: Null input", () => {
    const root: BT = null;
    expect(maxDepth(root)).toBe(0);
  });

  // Add more edge cases and test scenarios as needed
});

function generateLargeBalancedTree(depth: number): BT {
  if (depth === 0) {
    return null;
  }
  return new NodeTree(
    1,
    generateLargeBalancedTree(depth - 1),
    generateLargeBalancedTree(depth - 1),
  );
}
