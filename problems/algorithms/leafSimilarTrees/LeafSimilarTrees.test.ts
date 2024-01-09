// Source : https://leetcode.com/problems/leaf-similar-trees/
// Author : francisco
// Date   : 2024-01-09

import { TreeNode, leafSimilar } from "./LeafSimilarTrees";

describe("leaf-similar trees", () => {
  test("example 1", () => {
    const result: boolean = leafSimilar(
      new TreeNode(
        3,
        new TreeNode(
          5,
          new TreeNode(6, null, null),
          new TreeNode(
            2,
            new TreeNode(7, null, null),
            new TreeNode(4, null, null),
          ),
        ),
        new TreeNode(
          1,
          new TreeNode(9, null, null),
          new TreeNode(8, null, null),
        ),
      ),
      new TreeNode(
        3,
        new TreeNode(
          5,
          new TreeNode(6, null, null),
          new TreeNode(7, null, null),
        ),
        new TreeNode(
          1,
          new TreeNode(4, null, null),
          new TreeNode(
            2,
            new TreeNode(9, null, null),
            new TreeNode(8, null, null),
          ),
        ),
      ),
    );

    expect(result).toBe(true);
  });

  test("example 2", () => {
    const result: boolean = leafSimilar(
      new TreeNode(1, new TreeNode(2, null, null), new TreeNode(3, null, null)),
      new TreeNode(1, new TreeNode(3, null, null), new TreeNode(2, null, null)),
    );

    expect(result).toBe(false);
  });

  test("failed submission - 42 / 43 testcases passed", () => {
    const result: boolean = leafSimilar(
      new TreeNode(
        3,
        new TreeNode(
          5,
          new TreeNode(6, null, null),
          new TreeNode(7, null, null),
        ),
        new TreeNode(
          1,
          new TreeNode(4, null, null),
          new TreeNode(
            2,
            new TreeNode(9, null, null),
            new TreeNode(
              11,
              new TreeNode(8, null, null),
              new TreeNode(10, null, null),
            ),
          ),
        ),
      ),
      new TreeNode(
        3,
        new TreeNode(
          5,
          new TreeNode(6, null, null),
          new TreeNode(
            2,
            new TreeNode(7, null, null),
            new TreeNode(4, null, null),
          ),
        ),
        new TreeNode(
          1,
          new TreeNode(9, null, null),
          new TreeNode(8, null, null),
        ),
      ),
    );

    expect(result).toBe(false);
  });
});
