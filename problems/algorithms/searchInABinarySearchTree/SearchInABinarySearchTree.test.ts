// Source : https://leetcode.com/problems/search-in-a-binary-search-tree/
// Author : squxq
// Date   : 2023-11-05

import { BST, searchBST } from "./SearchInABinarySearchTree"; // Replace with the actual path to your implementation

describe("searchBST", () => {
  // Helper function to build a binary search tree
  function buildBST(values: number[]): BST | null {
    if (values.length === 0) {
      return null;
    }
    const mid = Math.floor(values.length / 2);
    const root = new BST(values[mid]);
    root.left = buildBST(values.slice(0, mid));
    root.right = buildBST(values.slice(mid + 1));
    return root;
  }

  it("should return null if the tree is empty", () => {
    expect(searchBST(null, 2)).toBe(null);
  });

  it("should return null if the value is not in the tree", () => {
    const tree = buildBST([1, 3, 4, 7]);
    expect(searchBST(tree, 2)).toBe(null);
  });

  it("should return the correct subtree when the value is in the tree (left)", () => {
    const tree = buildBST([1, 2, 3, 4, 7]);
    const expected = buildBST([1, 2, 3]);
    expect(searchBST(tree, 2)).toEqual(expected);
  });

  it("should return the correct subtree when the value is in the tree (right)", () => {
    const tree = buildBST([1, 3, 4, 7, 8]);
    const expected = buildBST([4, 7, 8]);
    expect(searchBST(tree, 7)).toEqual(expected);
  });

  it("should return the root when the value is the root", () => {
    const tree = buildBST([1, 3, 4, 7, 8]);
    expect(searchBST(tree, 4)).toEqual(tree);
  });

  it("should work with a single-node tree", () => {
    const tree = new BST(5);
    expect(searchBST(tree, 5)).toEqual(tree);
  });

  it("should work with a large tree within constraints", () => {
    const values = Array.from({ length: 5000 }, (_, i) => i + 1);
    const tree = buildBST(values);
    expect(searchBST(tree, 2500)).toEqual(new BST(2500));
  });

  it("should return the correct subtree when the value is the smallest", () => {
    const tree = buildBST([2, 3, 4, 7, 8]);
    const expected = buildBST([2]);
    expect(searchBST(tree, 2)).toEqual(expected);
  });

  it("should return the correct subtree when the value is the largest", () => {
    const tree = buildBST([2, 3, 4, 7, 8]);
    const expected = buildBST([8]);
    expect(searchBST(tree, 8)).toEqual(expected);
  });

  it("should return null for a single-node tree if the value is not in the tree", () => {
    const tree = new BST(5);
    expect(searchBST(tree, 2)).toBe(null);
  });

  it("should work with a tree that has only a left subtree", () => {
    const tree = buildBST([1, 2, 3]);
    const expected = buildBST([1, 2, 3]);
    expect(searchBST(tree, 1)).toEqual(expected);
  });

  it("should work with a tree that has only a right subtree", () => {
    const tree = buildBST([1, 2, 3]);
    const expected = buildBST([3]);
    expect(searchBST(tree, 3)).toEqual(expected);
  });
});
