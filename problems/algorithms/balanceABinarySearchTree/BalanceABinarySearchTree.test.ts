// Source : https://leetcode.com/problems/balance-a-binary-search-tree/
// Author : squxq
// Date   : 2023-11-06

import { NodeTree, balanceBST, type BST } from "./BalanceABinarySearchTree"; // Import your code here

describe("balanceBST", () => {
  // Test 1
  test("Example 1", () => {
    const root: BST = new NodeTree(
      1,
      null,
      new NodeTree(2, null, new NodeTree(3, null, new NodeTree(4))),
    );
    const expected: BST = new NodeTree(
      2,
      new NodeTree(1),
      new NodeTree(3, null, new NodeTree(4)),
    );
    expect(balanceBST(root)).toEqual(expected);
  });

  // Test 2
  test("Example 2", () => {
    const root: BST = new NodeTree(2, new NodeTree(1), new NodeTree(3));
    const expected: BST = new NodeTree(2, new NodeTree(1), new NodeTree(3));
    expect(balanceBST(root)).toEqual(expected);
  });
});
