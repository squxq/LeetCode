// Source : https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/
// Author : francisco
// Date   : 2024-01-24

import {
  NodeTree,
  pseudoPalindromicPaths,
} from "./PseudoPalindromicPathsInABinaryTree";

describe("Pseudo-Palindromic Paths in a Binary Tree", () => {
  test("example 1", () => {
    const result: number = pseudoPalindromicPaths(
      new NodeTree(
        2,
        new NodeTree(
          3,
          new NodeTree(3, null, null),
          new NodeTree(1, null, null),
        ),
        new NodeTree(1, null, new NodeTree(1, null, null)),
      ),
    );

    expect(result).toBe(2);
  });

  test("example 2", () => {
    const result: number = pseudoPalindromicPaths(
      new NodeTree(
        2,
        new NodeTree(
          1,
          new NodeTree(1, null, null),
          new NodeTree(3, null, new NodeTree(1, null, null)),
        ),
        new NodeTree(1, null, null),
      ),
    );

    expect(result).toBe(1);
  });

  test("example 3", () => {
    const result: number = pseudoPalindromicPaths(new NodeTree(9, null, null));

    expect(result).toBe(1);
  });

  test("failed submission - 19 / 56 testcases passed", () => {
    const result: number = pseudoPalindromicPaths(
      new NodeTree(
        8,
        new NodeTree(
          8,
          new NodeTree(7, null, null),
          new NodeTree(
            7,
            new NodeTree(
              2,
              null,
              new NodeTree(8, null, new NodeTree(1, null, null)),
            ),
            new NodeTree(4, null, new NodeTree(7, null, null)),
          ),
        ),
        null,
      ),
    );

    expect(result).toBe(2);
  });
});
