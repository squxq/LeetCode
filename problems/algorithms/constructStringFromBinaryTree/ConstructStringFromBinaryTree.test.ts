// Source : https://leetcode.com/problems/construct-string-from-binary-tree/
// Author : francisco
// Date   : 2023-12-08

import { NodeTree, tree2str } from "./ConstructStringFromBinaryTree";

describe("construct string from binary tree", () => {
  test("example 1 - simple", () => {
    const result: string = tree2str(
      new NodeTree(
        1,
        new NodeTree(2, new NodeTree(4, null, null), null),
        new NodeTree(3, null, null),
      ),
    );
    expect(result).toBe("1(2(4))(3)");
  });

  test("example 2 - empty parenthesis pair affect one-to-one mapping", () => {
    const result: string = tree2str(
      new NodeTree(
        1,
        new NodeTree(2, null, new NodeTree(4, null, null)),
        new NodeTree(3, null, null),
      ),
    );
    expect(result).toBe("1(2()(4))(3)");
  });
});
