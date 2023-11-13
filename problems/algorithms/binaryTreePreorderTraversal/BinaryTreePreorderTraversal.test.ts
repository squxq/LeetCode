// Source : https://leetcode.com/problems/binary-tree-preorder-traversal/
// Author : squxq
// Date   : 2023-11-13

import { NodeTree, preorderTraversal } from "./BinaryTreePreorderTraversal";

describe("Binary Tree Preorder Traversal", () => {
  it("Test Case 1: Empty tree should return an empty array", () => {
    const root: NodeTree | null = null;
    const result = preorderTraversal(root);
    expect(result).toEqual([]);
  });

  it("Test Case 2: Single node tree should return an array with that node value", () => {
    const root: NodeTree = new NodeTree(1);
    const result = preorderTraversal(root);
    expect(result).toEqual([1]);
  });

  it("Test Case 3: Tree with multiple nodes", () => {
    const root: NodeTree = new NodeTree(
      1,
      null,
      new NodeTree(2, new NodeTree(3), null),
    );
    const result = preorderTraversal(root);
    expect(result).toEqual([1, 2, 3]);
  });
});
