// Source : https://leetcode.com/problems/minimum-absolute-difference-in-bst/
// Author : squxq
// Date   : 2023-11-05

import {
  NodeTree,
  getMinimumDifference,
  type BST,
} from "./MinimumAbsoluteDifferenceInBst"; // Import the necessary code from your file

describe("getMinimumDifference", () => {
  it("should return 0 for an empty tree", () => {
    const root: BST = null;
    const result = getMinimumDifference(root);
    expect(result).toBe(0);
  });

  it("should return the correct minimum difference for a small tree", () => {
    const root: BST = new NodeTree(5, null, null);
    const result = getMinimumDifference(root);
    expect(result).toBe(0); // Only one node, so the difference is 0.
  });

  it("should return the correct minimum difference for a larger tree", () => {
    const root: BST = new NodeTree(
      4,
      new NodeTree(2, new NodeTree(1), new NodeTree(3)),
      new NodeTree(6),
    );
    const result = getMinimumDifference(root);
    expect(result).toBe(1); // Minimum difference is between 3 and 4.
  });

  it("should handle negative values", () => {
    const root: BST = new NodeTree(-5, new NodeTree(-10), new NodeTree(10));
    const result = getMinimumDifference(root);
    expect(result).toBe(5); // Minimum difference is between -5 and -10.
  });

  it("should return the correct minimum difference for a tree with large values", () => {
    const root: BST = new NodeTree(
      100000,
      new NodeTree(50000),
      new NodeTree(150000),
    );
    const result = getMinimumDifference(root);
    expect(result).toBe(50000); // Minimum difference is between 100000 and 50000.
  });
});
