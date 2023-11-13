// Source : https://leetcode.com/problems/balanced-binary-tree/
// Author : squxq
// Date   : 2023-11-13

import { isBalanced, NodeTree } from "./BalancedBinaryTree"; // Import the module you're testing

describe("isBalanced", () => {
  it("should return true for a balanced tree with three nodes", () => {
    const root = new NodeTree(1, new NodeTree(2), new NodeTree(3));
    expect(isBalanced(root)).toBe(true);
  });

  it("should return true for an empty tree", () => {
    const root = null;
    expect(isBalanced(root)).toBe(true);
  });

  it("should return true for a tree with a single node", () => {
    const root = new NodeTree(1);
    expect(isBalanced(root)).toBe(true);
  });

  it("should return false for an unbalanced tree with four nodes", () => {
    const root = new NodeTree(1, new NodeTree(2, new NodeTree(3), null), null);
    expect(isBalanced(root)).toBe(false);
  });

  it("should return true for a balanced tree with five nodes", () => {
    const root = new NodeTree(
      1,
      new NodeTree(2, new NodeTree(3), null),
      new NodeTree(4),
    );
    expect(isBalanced(root)).toBe(true);
  });

  it("should return false for an unbalanced tree with six nodes", () => {
    const root = new NodeTree(
      1,
      new NodeTree(2, new NodeTree(3), null),
      new NodeTree(4, null, new NodeTree(5)),
    );
    expect(isBalanced(root)).toBe(false);
  });
});
