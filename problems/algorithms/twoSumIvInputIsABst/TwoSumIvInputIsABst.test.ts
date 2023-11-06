// Source : https://leetcode.com/problems/two-sum-iv-input-is-a-bst/
// Author : squxq
// Date   : 2023-11-06

import { TreeNode, findTarget } from "./TwoSumIvInputIsABst"; // Replace with the actual file path

describe("findTarget", () => {
  it("should return true if two elements sum up to k in a BST", () => {
    const root = new TreeNode(5);
    root.left = new TreeNode(3);
    root.right = new TreeNode(6);
    root.left.left = new TreeNode(2);
    root.left.right = new TreeNode(4);
    root.right.right = new TreeNode(7);

    const k = 9;
    expect(findTarget(root, k)).toBe(true);
  });

  it("should return false if no two elements sum up to k in a BST", () => {
    const root = new TreeNode(5);
    root.left = new TreeNode(3);
    root.right = new TreeNode(6);
    root.left.left = new TreeNode(2);
    root.left.right = new TreeNode(4);
    root.right.right = new TreeNode(7);

    const k = 28;
    expect(findTarget(root, k)).toBe(false);
  });

  it("should return false for an empty BST", () => {
    const root = null;
    const k = 5;
    expect(findTarget(root, k)).toBe(false);
  });

  it("should return true for a single-node BST when k is twice the node value", () => {
    const root = new TreeNode(3);
    const k = 6;
    expect(findTarget(root, k)).toBe(true);
  });

  it("should return false for a single-node BST when k is not twice the node value", () => {
    const root = new TreeNode(3);
    const k = 7;
    expect(findTarget(root, k)).toBe(false);
  });
});
