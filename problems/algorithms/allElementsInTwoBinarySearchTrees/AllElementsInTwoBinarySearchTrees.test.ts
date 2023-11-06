// Source : https://leetcode.com/problems/all-elements-in-two-binary-search-trees/
// Author : squxq
// Date   : 2023-11-06

import {
  NodeTree,
  getAllElements,
  type BST,
} from "./AllElementsInTwoBinarySearchTrees"; // Import your code here

describe("getAllElements", () => {
  // Test 1
  test("Example 1", () => {
    const root1: BST = new NodeTree(2, new NodeTree(1), new NodeTree(4));
    const root2: BST = new NodeTree(1, new NodeTree(0), new NodeTree(3));
    const expected: number[] = [0, 1, 1, 2, 3, 4];
    expect(getAllElements(root1, root2)).toEqual(expected);
  });

  // Test 2
  test("Example 2", () => {
    const root1: BST = new NodeTree(1, null, new NodeTree(8));
    const root2: BST = new NodeTree(8, new NodeTree(1));
    const expected: number[] = [1, 1, 8, 8];
    expect(getAllElements(root1, root2)).toEqual(expected);
  });
});
