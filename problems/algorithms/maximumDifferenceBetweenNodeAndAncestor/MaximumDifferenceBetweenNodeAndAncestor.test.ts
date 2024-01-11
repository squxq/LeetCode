// Source : https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/
// Author : francisco
// Date   : 2024-01-11

import {
  TreeNode,
  maxAncestorDiff,
} from "./MaximumDifferenceBetweenNodeAndAncestor";

describe("maximum difference between node and ancestor", () => {
  test("example 1", () => {
    const result: number = maxAncestorDiff(
      new TreeNode(
        8,
        new TreeNode(
          3,
          new TreeNode(1, null, null),
          new TreeNode(
            6,
            new TreeNode(4, null, null),
            new TreeNode(7, null, null),
          ),
        ),
        new TreeNode(
          10,
          null,
          new TreeNode(14, new TreeNode(13, null, null), null),
        ),
      ),
    );

    expect(result).toBe(7);
  });

  test("example 2", () => {
    const result: number = maxAncestorDiff(
      new TreeNode(
        1,
        null,
        new TreeNode(
          2,
          null,
          new TreeNode(0, new TreeNode(3, null, null), null),
        ),
      ),
    );

    expect(result).toBe(3);
  });

  test("additional test 3", () => {
    const result: number = maxAncestorDiff(
      new TreeNode(
        3,
        new TreeNode(1, null, null),
        new TreeNode(
          6,
          new TreeNode(4, null, null),
          new TreeNode(7, null, null),
        ),
      ),
    );

    expect(result).toBe(4);
  });
});
