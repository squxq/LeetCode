// Source : https://leetcode.com/problems/binary-tree-postorder-traversal/
// Author : squxq
// Date   : 2023-11-13

import { NodeTree, postorderTraversal } from "./BinaryTreePostorderTraversal"; // Import your code file

describe("postorderTraversal", () => {
  it("should return an empty array for an empty tree", () => {
    const root: NodeTree | null = null;
    expect(postorderTraversal(root)).toEqual([]);
  });

  it("should return the correct postorder traversal for a single node tree", () => {
    const root: NodeTree = new NodeTree(1);
    expect(postorderTraversal(root)).toEqual([1]);
  });

  it("should return the correct postorder traversal for a tree with left children", () => {
    const root: NodeTree = new NodeTree(1, new NodeTree(2), new NodeTree(3));
    expect(postorderTraversal(root)).toEqual([2, 3, 1]);
  });

  it("should return the correct postorder traversal for a tree with right children", () => {
    const root: NodeTree = new NodeTree(
      1,
      null,
      new NodeTree(2, null, new NodeTree(3)),
    );
    expect(postorderTraversal(root)).toEqual([3, 2, 1]);
  });

  it("should handle negative values in the tree", () => {
    const root: NodeTree = new NodeTree(-1, new NodeTree(-2), new NodeTree(-3));
    expect(postorderTraversal(root)).toEqual([-2, -3, -1]);
  });
});
