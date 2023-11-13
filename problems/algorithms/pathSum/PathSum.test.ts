// Source : https://leetcode.com/problems/path-sum/
// Author : squxq
// Date   : 2023-11-13

import { hasPathSum, NodeTree } from "./PathSum"; // Import the hasPathSum function and NodeTree class from your code

describe("hasPathSum", () => {
  it("should return true for a valid root-to-leaf path with the target sum", () => {
    const root = new NodeTree(
      5,
      new NodeTree(4, new NodeTree(11, new NodeTree(7), new NodeTree(2))),
      new NodeTree(8, new NodeTree(13), new NodeTree(4, null, new NodeTree(1))),
    );
    const targetSum = 22;
    expect(hasPathSum(root, targetSum)).toBe(true);
  });

  it("should return false for an invalid root-to-leaf path with the target sum", () => {
    const root = new NodeTree(1, new NodeTree(2), new NodeTree(3));
    const targetSum = 5;
    expect(hasPathSum(root, targetSum)).toBe(false);
  });

  it("should return false for an empty tree", () => {
    const root = null;
    const targetSum = 0;
    expect(hasPathSum(root, targetSum)).toBe(false);
  });

  it("should return true for a single-node tree with the target sum", () => {
    const root = new NodeTree(5);
    const targetSum = 5;
    expect(hasPathSum(root, targetSum)).toBe(true);
  });

  it("should return false for a single-node tree with a different target sum", () => {
    const root = new NodeTree(5);
    const targetSum = 10;
    expect(hasPathSum(root, targetSum)).toBe(false);
  });

  // Add more test cases for edge cases, large trees, and other scenarios
});
