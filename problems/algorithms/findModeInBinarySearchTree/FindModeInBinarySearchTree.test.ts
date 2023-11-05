// Source : https://leetcode.com/problems/find-mode-in-binary-search-tree/
// Author : squxq
// Date   : 2023-11-05

import { NodeTree, findMode, type BST } from "./FindModeInBinarySearchTree"; // Import the necessary code from your file

describe("findMode", () => {
  it("should return an empty array for an empty tree", () => {
    const root: BST = null;
    const result = findMode(root);
    expect(result).toEqual([]);
  });

  it("should return the correct mode for a single-node tree", () => {
    const root: BST = new NodeTree(1);
    const result = findMode(root);
    expect(result).toEqual([1]);
  });

  it("should return the correct mode for a tree with multiple modes", () => {
    const root: BST = new NodeTree(2, null, new NodeTree(2));
    const result = findMode(root);
    expect(result).toContain(2); // 2 is a mode
  });

  it("should handle negative values and zero", () => {
    const root: BST = new NodeTree(
      -1,
      new NodeTree(-2),
      new NodeTree(0, new NodeTree(-1), new NodeTree(0)),
    );
    const result = findMode(root);
    expect(result).toEqual([-1, 0]); // -1 and 0 are modes
  });

  it("should return the correct mode for a tree with large values", () => {
    const root: BST = new NodeTree(
      100000,
      new NodeTree(100000),
      new NodeTree(200000),
    );
    const result = findMode(root);
    expect(result).toEqual([100000, 200000]); // 100000 and 200000 are modes
  });

  it("should handle a tree with duplicates", () => {
    const root: BST = new NodeTree(
      1,
      new NodeTree(1, null, new NodeTree(2)),
      new NodeTree(2),
    );
    const result = findMode(root);
    expect(result).toEqual([1, 2]); // 1 and 2 are modes
  });

  it("should return modes in any order", () => {
    const root: BST = new NodeTree(
      1,
      new NodeTree(2, null, new NodeTree(2)),
      new NodeTree(2),
    );
    const result = findMode(root);
    expect(result).toContain(2); // 2 is a mode
    expect(result).toContain(1); // 1 is a mode
  });
});
