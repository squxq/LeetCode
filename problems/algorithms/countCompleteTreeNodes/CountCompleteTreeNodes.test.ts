// Source : https://leetcode.com/problems/count-complete-tree-nodes/
// Author : Francisco Tomas
// Date   : 2023-11-22

import { countNodes, NodeTree } from "./CountCompleteTreeNodes";

describe("countNodes", () => {
  it("handles an empty binary tree", () => {
    const result = countNodes(null);
    expect(result).toBe(0);
  });

  it("handles a binary tree with one node", () => {
    const result = countNodes(new NodeTree(1, null, null));
    expect(result).toBe(1);
  });

  it("handles a binary tree with multiple nodes", () => {
    const result = countNodes(
      new NodeTree(
        1,
        new NodeTree(
          2,
          new NodeTree(4, null, null),
          new NodeTree(5, null, null),
        ),
        new NodeTree(3, new NodeTree(6, null, null), null),
      ),
    );
    expect(result).toBe(6);
  });
});
