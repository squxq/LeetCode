// Source : https://leetcode.com/problems/kth-smallest-element-in-a-bst/
// Author : squxq
// Date   : 2023-11-06

import { NodeTree, kthSmallest, type BST } from "./KthSmallestElementInABst"; // Adjust the import path

describe("kthSmallest", () => {
  // Test 1: Empty tree
  test("Empty tree, k = 1", () => {
    const root: BST = null;
    const k = 1;
    expect(kthSmallest(root, k)).toBeNaN();
  });

  // Test 2: Single node tree
  test("Single node tree, k = 1", () => {
    const root: BST = new NodeTree(5);
    const k = 1;
    expect(kthSmallest(root, k)).toBe(5);
  });

  // Test 3: K equals the number of nodes
  test("K equals the number of nodes", () => {
    const root: BST = new NodeTree(5);
    root.left = new NodeTree(3);
    root.right = new NodeTree(7);
    const k = 3;
    expect(kthSmallest(root, k)).toBe(7);
  });

  // Test 4: Balanced tree
  test("Balanced tree, k = 3", () => {
    const root: BST = new NodeTree(3);
    root.left = new NodeTree(1);
    root.right = new NodeTree(5);
    root.left.right = new NodeTree(2);
    const k = 3;
    expect(kthSmallest(root, k)).toBe(3);
  });

  // Test 5: Unbalanced tree
  test("Unbalanced tree, k = 1", () => {
    const root: BST = new NodeTree(1);
    root.right = new NodeTree(3);
    root.right.left = new NodeTree(2);
    const k = 1;
    expect(kthSmallest(root, k)).toBe(1);
  });

  // Test 6: Large tree
  test("Large tree, k = 5", () => {
    const root: BST = new NodeTree(10);
    root.left = new NodeTree(5);
    root.right = new NodeTree(15);
    root.left.left = new NodeTree(2);
    root.left.right = new NodeTree(7);
    root.right.left = new NodeTree(12);
    const k = 5;
    expect(kthSmallest(root, k)).toBe(7);
  });

  // Test 7: K equals 1
  test("K equals 1", () => {
    const root: BST = new NodeTree(5);
    root.left = new NodeTree(3);
    root.right = new NodeTree(7);
    const k = 1;
    expect(kthSmallest(root, k)).toBe(3);
  });

  // Test 8: K equals the maximum constraint
  test("K equals maximum constraint", () => {
    const root: BST = new NodeTree(5);
    root.left = new NodeTree(3);
    root.right = new NodeTree(7);
    const k = 10000;
    expect(kthSmallest(root, k)).toBe(7);
  });

  // Test 9: All nodes have the same value
  test("All nodes have the same value, k = 3", () => {
    const root: BST = new NodeTree(5);
    root.left = new NodeTree(5);
    root.right = new NodeTree(5);
    const k = 3;
    expect(kthSmallest(root, k)).toBe(5);
  });

  // Test 10: Random tree, k = 4
  test("Random tree, k = 4", () => {
    const root: BST = new NodeTree(4);
    root.left = new NodeTree(2);
    root.right = new NodeTree(6);
    root.left.left = new NodeTree(1);
    root.left.right = new NodeTree(3);
    root.right.right = new NodeTree(7);
    const k = 4;
    expect(kthSmallest(root, k)).toBe(4);
  });
});
