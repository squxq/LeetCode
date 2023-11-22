// Source : https://leetcode.com/problems/binary-tree-paths/
// Author : Francisco Tomas
// Date   : 2023-11-22

import { binaryTreePaths, NodeTree } from "./BinaryTreePaths";

describe("binaryTreePaths", () => {
  test("get all root-to-leaf paths in a single element binary tree", () => {
    const result = binaryTreePaths(new NodeTree(1, null, null));
    expect(result).toStrictEqual(["1"]);
  });

  test("get all root-to-leaf paths in a slighty longer binary tree", () => {
    const result = binaryTreePaths(
      new NodeTree(
        1,
        new NodeTree(2, null, new NodeTree(5, null, null)),
        new NodeTree(3, null, null),
      ),
    );
    expect(result).toStrictEqual(["1->2->5", "1->3"]);
  });

  test("get all root-to-leaf paths in a longer binary tree", () => {
    const result = binaryTreePaths(
      new NodeTree(
        37,
        new NodeTree(-34, null, new NodeTree(-100, null, null)),
        new NodeTree(
          -48,
          new NodeTree(-100, null, null),
          new NodeTree(
            48,
            new NodeTree(
              -54,
              new NodeTree(-71, null, null),
              new NodeTree(-22, null, new NodeTree(8, null, null)),
            ),
            null,
          ),
        ),
      ),
    );
    expect(result).toStrictEqual([
      "37->-34->-100",
      "37->-48->-100",
      "37->-48->48->-54->-71",
      "37->-48->48->-54->-22->8",
    ]);
  });
});
