// Source : https://leetcode.com/problems/invert-binary-tree/
// Author : Francisco Tomas
// Date   : 2023-11-22

import { invertTree, NodeTree } from "./InvertBinaryTree";

describe("invertTree", () => {
  test("invert empty binary tree", () => {
    const result = invertTree(null);
    expect(result).toBe(null);
  });

  test("invert binary tree with few elements", () => {
    const result = invertTree(
      new NodeTree(2, new NodeTree(1, null, null), new NodeTree(3, null, null)),
    );
    expect(result).toStrictEqual(
      new NodeTree(2, new NodeTree(3, null, null), new NodeTree(1, null, null)),
    );
  });

  test("invert slighty bigger binary tree", () => {
    const result = invertTree(
      new NodeTree(
        4,
        new NodeTree(
          2,
          new NodeTree(1, null, null),
          new NodeTree(3, null, null),
        ),
        new NodeTree(
          7,
          new NodeTree(6, null, null),
          new NodeTree(9, null, null),
        ),
      ),
    );

    expect(result).toStrictEqual(
      new NodeTree(
        4,
        new NodeTree(
          7,
          new NodeTree(9, null, null),
          new NodeTree(6, null, null),
        ),
        new NodeTree(
          2,
          new NodeTree(3, null, null),
          new NodeTree(1, null, null),
        ),
      ),
    );
  });
});
