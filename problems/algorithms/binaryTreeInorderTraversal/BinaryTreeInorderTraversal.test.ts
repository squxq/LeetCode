// Source : https://leetcode.com/problems/binary-tree-inorder-traversal/
// Author : squxq
// Date   : 2023-11-06

import {
  NodeTree,
  inorderTraversal,
  type BT,
} from "./BinaryTreeInorderTraversal"; // Adjust the import path

describe("inorderTraversal", () => {
  // Test 1: Empty tree
  test("Empty tree", () => {
    const root: BT = null;
    const expected: number[] = [];
    expect(inorderTraversal(root)).toEqual(expected);
  });

  // Test 2: Single-node tree
  test("Single-node tree", () => {
    const root: BT = new NodeTree(3);
    const expected: number[] = [3];
    expect(inorderTraversal(root)).toEqual(expected);
  });

  // Test 3: Left subtree only
  test("Left subtree only", () => {
    const root: BT = new NodeTree(2, new NodeTree(1), null);
    const expected: number[] = [1, 2];
    expect(inorderTraversal(root)).toEqual(expected);
  });

  // Test 4: Right subtree only
  test("Right subtree only", () => {
    const root: BT = new NodeTree(1, null, new NodeTree(2));
    const expected: number[] = [1, 2];
    expect(inorderTraversal(root)).toEqual(expected);
  });

  // Test 5: Full binary tree
  test("Full binary tree", () => {
    const root: BT = new NodeTree(2, new NodeTree(1), new NodeTree(3));
    const expected: number[] = [1, 2, 3];
    expect(inorderTraversal(root)).toEqual(expected);
  });

  // Test 6: Large tree
  test("Large tree", () => {
    const root: BT = new NodeTree(
      5,
      new NodeTree(3, new NodeTree(2), new NodeTree(4)),
      new NodeTree(7, new NodeTree(6), new NodeTree(8)),
    );
    const expected: number[] = [2, 3, 4, 5, 6, 7, 8];
    expect(inorderTraversal(root)).toEqual(expected);
  });

  // Test 7: Single node with the maximum value
  test("Single node with the maximum value", () => {
    const root: BT = new NodeTree(100);
    const expected: number[] = [100];
    expect(inorderTraversal(root)).toEqual(expected);
  });

  // Test 8: Single node with the minimum value
  test("Single node with the minimum value", () => {
    const root: BT = new NodeTree(-100);
    const expected: number[] = [-100];
    expect(inorderTraversal(root)).toEqual(expected);
  });

  // Test 9: Balanced tree with all negative values
  test("Balanced tree with all negative values", () => {
    const root: BT = new NodeTree(-2, new NodeTree(-4), new NodeTree(-1));
    const expected: number[] = [-4, -2, -1];
    expect(inorderTraversal(root)).toEqual(expected);
  });

  // Test 10: Left-heavy tree
  test("Left-heavy tree", () => {
    const root: BT = new NodeTree(
      5,
      new NodeTree(4, new NodeTree(3, new NodeTree(2))),
      new NodeTree(1),
    );
    const expected: number[] = [2, 3, 4, 5, 1];
    expect(inorderTraversal(root)).toEqual(expected);
  });
});
