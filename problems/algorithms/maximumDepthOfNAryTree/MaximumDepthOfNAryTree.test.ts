// Source : https://leetcode.com/problems/maximum-depth-of-n-ary-tree/
// Author : Francisco Tomas
// Date   : 2023-11-27

import { NodeTree, maxDepth } from "./MaximumDepthOfNAryTree";

describe("given a n-ary tree, find its maximum depth", () => {
  test("small tree", () => {
    const result: number = maxDepth(
      new NodeTree(1, [
        new NodeTree(3, [new NodeTree(5, []), new NodeTree(6, [])]),
        new NodeTree(2, []),
        new NodeTree(4, []),
      ]),
    );
    expect(result).toBe(3);
  });

  test("larger tree", () => {
    const result: number = maxDepth(
      new NodeTree(1, [
        new NodeTree(2, []),
        new NodeTree(3, [
          new NodeTree(6, []),
          new NodeTree(7, [new NodeTree(11, [new NodeTree(14, [])])]),
        ]),
        new NodeTree(4, [new NodeTree(8, [new NodeTree(12, [])])]),
        new NodeTree(5, [
          new NodeTree(9, [new NodeTree(13, [])]),
          new NodeTree(10, []),
        ]),
      ]),
    );
    expect(result).toBe(5);
  });
});
