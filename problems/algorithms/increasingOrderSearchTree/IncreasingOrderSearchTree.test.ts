// Source : https://leetcode.com/problems/increasing-order-search-tree/
// Author : squxq
// Date   : 2023-11-06

import { increasingBST, NodeTree } from "./IncreasingOrderSearchTree"; // Replace with the actual file path

describe("increasingBST", () => {
  it("should rearrange a complex BST to have leftmost node as root", () => {
    // Creating a complex BST [5,3,6,2,4,null,8,1,null,null,null,7,9]
    const root = new NodeTree(5);
    root.left = new NodeTree(3);
    root.right = new NodeTree(6);
    root.left.left = new NodeTree(2);
    root.left.right = new NodeTree(4);
    root.right.right = new NodeTree(8);
    root.left.left.left = new NodeTree(1);
    root.right.right.left = new NodeTree(7);
    root.right.right.right = new NodeTree(9);

    const expectedRoot = new NodeTree(1);
    expectedRoot.right = new NodeTree(2);
    expectedRoot.right.right = new NodeTree(3);
    expectedRoot.right.right.right = new NodeTree(4);
    expectedRoot.right.right.right.right = new NodeTree(5);
    expectedRoot.right.right.right.right.right = new NodeTree(6);
    expectedRoot.right.right.right.right.right.right = new NodeTree(7);
    expectedRoot.right.right.right.right.right.right.right = new NodeTree(8);
    expectedRoot.right.right.right.right.right.right.right.right = new NodeTree(
      9,
    );

    expect(increasingBST(root)).toEqual(expectedRoot);
  });

  it("should rearrange a simple BST with a few nodes", () => {
    // Creating a simple BST [5,1,7]
    const root = new NodeTree(5);
    root.left = new NodeTree(1);
    root.right = new NodeTree(7);

    const expectedRoot = new NodeTree(1);
    expectedRoot.right = new NodeTree(5);
    expectedRoot.right.right = new NodeTree(7);

    expect(increasingBST(root)).toEqual(expectedRoot);
  });

  it("should handle an empty BST", () => {
    const root = null;
    expect(increasingBST(root)).toBe(null);
  });

  it("should handle a BST with only one node", () => {
    const root = new NodeTree(10);
    expect(increasingBST(root)).toEqual(root);
  });

  it("should rearrange a simple BST with only two nodes", () => {
    // Creating a simple BST [3, 1]
    const root = new NodeTree(3);
    root.left = new NodeTree(1);

    const expectedRoot = new NodeTree(1);
    expectedRoot.right = new NodeTree(3);

    expect(increasingBST(root)).toEqual(expectedRoot);
  });
});
