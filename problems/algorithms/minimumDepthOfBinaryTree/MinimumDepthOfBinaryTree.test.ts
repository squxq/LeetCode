// Source : https://leetcode.com/problems/minimum-depth-of-binary-tree/
// Author : squxq
// Date   : 2023-11-13

import { minDepth, NodeTree } from "./MinimumDepthOfBinaryTree"; // Import your code

describe("minDepth", () => {
  it("should return 0 for an empty tree", () => {
    const root = null;
    expect(minDepth(root)).toBe(0);
  });

  it("should return 1 for a tree with only one node", () => {
    const root = new NodeTree(5);
    expect(minDepth(root)).toBe(1);
  });

  it("should return the minimum depth for a balanced tree", () => {
    const root = new NodeTree(3, new NodeTree(9), new NodeTree(20));
    expect(minDepth(root)).toBe(2);
  });

  it("should return the minimum depth for an unbalanced tree", () => {
    const root = new NodeTree(
      2,
      null,
      new NodeTree(
        3,
        null,
        new NodeTree(4, null, new NodeTree(5, null, new NodeTree(6))),
      ),
    );
    expect(minDepth(root)).toBe(5);
  });

  it("should handle negative values", () => {
    const root = new NodeTree(
      -10,
      new NodeTree(-5, new NodeTree(-3)),
      new NodeTree(-15),
    );
    expect(minDepth(root)).toBe(2);
  });
});
