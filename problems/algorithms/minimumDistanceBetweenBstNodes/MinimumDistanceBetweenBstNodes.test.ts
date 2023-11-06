// Source : https://leetcode.com/problems/minimum-distance-between-bst-nodes/
// Author : squxq
// Date   : 2023-11-06

import { minDiffInBST, NodeTree } from "./MinimumDistanceBetweenBstNodes"; // Replace with the actual file path

describe("minDiffInBST", () => {
  it("should return the minimum difference between two nodes in a simple BST", () => {
    // Creating a simple BST [4,2,6,1,3]
    const root = new NodeTree(4);
    root.left = new NodeTree(2);
    root.right = new NodeTree(6);
    root.left.left = new NodeTree(1);
    root.left.right = new NodeTree(3);

    expect(minDiffInBST(root)).toBe(1);
  });

  it("should return the minimum difference in a BST with missing values", () => {
    // Creating a BST with missing values [1,0,48,null,null,12,49]
    const root = new NodeTree(1);
    root.left = new NodeTree(0);
    root.right = new NodeTree(48, null, new NodeTree(49));
    root.right.left = new NodeTree(12);

    expect(minDiffInBST(root)).toBe(1);
  });

  it("should return 0 for a BST with identical values", () => {
    // Creating a BST with identical values [2, 2, 2, 2, 2]
    const root = new NodeTree(2);
    root.left = new NodeTree(2);
    root.right = new NodeTree(2);
    root.left.left = new NodeTree(2);
    root.right.left = new NodeTree(2);

    expect(minDiffInBST(root)).toBe(0);
  });

  it("should handle an empty BST", () => {
    const root = null;
    expect(minDiffInBST(root)).toBe(Infinity);
  });

  it("should handle a BST with only two nodes", () => {
    const root = new NodeTree(10);
    root.left = new NodeTree(5);

    expect(minDiffInBST(root)).toBe(5);
  });
});
