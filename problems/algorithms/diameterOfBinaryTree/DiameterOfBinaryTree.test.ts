// Source : https://leetcode.com/problems/diameter-of-binary-tree/
// Author : Francisco Tomas
// Date   : 2023-11-23

import { NodeTree, diameterOfBinaryTree } from "./DiameterOfBinaryTree";

describe("diameter of binary tree", () => {
  test("handle binary tree with two nodes", () => {
    const result = diameterOfBinaryTree(
      new NodeTree(1, new NodeTree(2, null, null), null),
    );
    expect(result).toBe(1);
  });

  test("handle slighty larger binary tree", () => {
    const result = diameterOfBinaryTree(
      new NodeTree(
        1,
        new NodeTree(
          2,
          new NodeTree(4, null, null),
          new NodeTree(5, null, null),
        ),
        new NodeTree(3, null, null),
      ),
    );
    expect(result).toBe(3);
  });

  test("handle large binary tree", () => {
    const result = diameterOfBinaryTree(
      new NodeTree(
        4,
        new NodeTree(-7, null, null),
        new NodeTree(
          -3,
          new NodeTree(
            -9,
            new NodeTree(
              9,
              new NodeTree(
                6,
                new NodeTree(0, null, new NodeTree(-1, null, null)),
                new NodeTree(6, new NodeTree(-4, null, null), null),
              ),
              null,
            ),
            new NodeTree(
              -7,
              new NodeTree(-6, new NodeTree(5, null, null), null),
              new NodeTree(
                -6,
                new NodeTree(9, new NodeTree(-2, null, null), null),
                null,
              ),
            ),
          ),
          new NodeTree(-3, new NodeTree(-4, null, null), null),
        ),
      ),
    );
    expect(result).toBe(8);
  });
});
