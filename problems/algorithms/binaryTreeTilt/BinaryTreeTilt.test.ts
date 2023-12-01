// Source : https://leetcode.com/problems/binary-tree-tilt/
// Author : Francisco Tomas
// Date   : 2023-12-01

import { NodeTree, findTilt } from "./BinaryTreeTilt";

describe("binary tree tilt", () => {
  test("small binary tree", () => {
    const result: number = findTilt(
      new NodeTree(1, new NodeTree(2, null, null), new NodeTree(3, null, null)),
    );
    expect(result).toBe(1);
  });

  test("slightly larger binary tree", () => {
    const result: number = findTilt(
      new NodeTree(
        4,
        new NodeTree(
          2,
          new NodeTree(3, null, null),
          new NodeTree(5, null, null),
        ),
        new NodeTree(9, null, new NodeTree(7, null, null)),
      ),
    );

    expect(result).toBe(15);
  });

  test("large binary tree", () => {
    const result: number = findTilt(
      new NodeTree(
        21,
        new NodeTree(
          7,
          new NodeTree(
            1,
            new NodeTree(3, null, null),
            new NodeTree(3, null, null),
          ),
          new NodeTree(1, null, null),
        ),
        new NodeTree(
          14,
          new NodeTree(2, null, null),
          new NodeTree(2, null, null),
        ),
      ),
    );

    expect(result).toBe(9);
  });
});
