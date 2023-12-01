// Source : https://leetcode.com/problems/subtree-of-another-tree/
// Author : Francisco Tomas
// Date   : 2023-12-01

import { NodeTree, isSubtree } from "./SubtreeOfAnotherTree";

describe("subtree of another tree", () => {
  test("smaller binary tree", () => {
    const result: boolean = isSubtree(
      new NodeTree(
        3,
        new NodeTree(
          4,
          new NodeTree(1, null, null),
          new NodeTree(2, null, null),
        ),
        new NodeTree(5, null, null),
      ),
      new NodeTree(4, new NodeTree(1, null, null), new NodeTree(2, null, null)),
    );

    expect(result).toBe(true);
  });

  test("slightly larger binary tree", () => {
    const result: boolean = isSubtree(
      new NodeTree(
        3,
        new NodeTree(
          4,
          new NodeTree(1, null, null),
          new NodeTree(2, new NodeTree(0, null, null), null),
        ),
        new NodeTree(5, null, null),
      ),
      new NodeTree(4, new NodeTree(1, null, null), new NodeTree(2, null, null)),
    );

    expect(result).toBe(false);
  });

  test("repeating node values", () => {
    const result: boolean = isSubtree(
      new NodeTree(1, new NodeTree(1, null, null), null),
      new NodeTree(1, null, null),
    );

    expect(result).toBe(true);
  });
});
