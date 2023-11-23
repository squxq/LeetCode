// Source : https://leetcode.com/problems/sum-of-left-leaves/
// Author : Francisco Tomas
// Date   : 2023-11-23

import { NodeTree, sumOfLeftLeaves } from "./SumOfLeftLeaves";

describe("sum of left leaves", () => {
  test("handle a binary tree with one node", () => {
    const result = sumOfLeftLeaves(new NodeTree(1, null, null));
    expect(result).toBe(0);
  });

  test("handle a bigger binary tree", () => {
    const result = sumOfLeftLeaves(
      new NodeTree(
        3,
        new NodeTree(9, null, null),
        new NodeTree(
          20,
          new NodeTree(15, null, null),
          new NodeTree(7, null, null),
        ),
      ),
    );
    expect(result).toBe(24);
  });
});
