// Source : https://leetcode.com/problems/range-sum-of-bst/
// Author : squxq
// Date   : 2023-11-06

import { NodeTree, rangeSumBST } from "./RangeSumOfBst"; // Replace with the actual file path
import { rangeSumBST as rangeSumBST2 } from "./RangeSumOfBst-submit-02";

describe("rangeSumBST", () => {
  it("should return the sum of values within the range in a complex BST", () => {
    // Creating a complex BST [10,5,15,3,7,null,18]
    const root = new NodeTree(10);
    root.left = new NodeTree(5);
    root.right = new NodeTree(15);
    root.left.left = new NodeTree(3);
    root.left.right = new NodeTree(7);
    root.right.right = new NodeTree(18);

    const low = 7;
    const high = 15;

    expect(rangeSumBST(root, low, high)).toBe(32);
  });

  it("should return the sum of values within the range in a BST with missing values", () => {
    // Creating a BST with missing values [10,5,15,3,7,13,18,1,null,6]
    const root = new NodeTree(10);
    root.left = new NodeTree(5);
    root.right = new NodeTree(15);
    root.left.left = new NodeTree(3);
    root.left.right = new NodeTree(7);
    root.left.left.left = new NodeTree(1);
    root.left.left.right = null;
    root.left.right.left = new NodeTree(6);
    root.right.left = new NodeTree(13);
    root.right.right = new NodeTree(18);

    const low = 6;
    const high = 10;

    expect(rangeSumBST(root, low, high)).toBe(23);
  });

  it("should handle an empty BST", () => {
    const root = null;
    const low = 1;
    const high = 10;

    expect(rangeSumBST(root, low, high)).toBe(0);
  });

  it("should handle a BST with only one node", () => {
    const root = new NodeTree(10);
    const low = 1;
    const high = 10;

    expect(rangeSumBST(root, low, high)).toBe(10);
  });

  it("should handle a BST with values outside the range", () => {
    // Creating a BST with values outside the range [10, 20, 30]
    const root = new NodeTree(10);
    root.left = new NodeTree(20);
    root.right = new NodeTree(30);

    const low = 5;
    const high = 9;

    expect(rangeSumBST(root, low, high)).toBe(0);
  });
});

describe("rangeSumBST2", () => {
  it("should return the sum of values within the range in a complex BST", () => {
    // Creating a complex BST [10,5,15,3,7,null,18]
    const root = new NodeTree(10);
    root.left = new NodeTree(5);
    root.right = new NodeTree(15);
    root.left.left = new NodeTree(3);
    root.left.right = new NodeTree(7);
    root.right.right = new NodeTree(18);

    const low = 7;
    const high = 15;

    expect(rangeSumBST2(root, low, high)).toBe(32);
  });

  it("should return the sum of values within the range in a BST with missing values", () => {
    // Creating a BST with missing values [10,5,15,3,7,13,18,1,null,6]
    const root = new NodeTree(10);
    root.left = new NodeTree(5);
    root.right = new NodeTree(15);
    root.left.left = new NodeTree(3);
    root.left.right = new NodeTree(7);
    root.left.left.left = new NodeTree(1);
    root.left.left.right = null;
    root.left.right.left = new NodeTree(6);
    root.right.left = new NodeTree(13);
    root.right.right = new NodeTree(18);

    const low = 6;
    const high = 10;

    expect(rangeSumBST2(root, low, high)).toBe(23);
  });

  it("should handle an empty BST", () => {
    const root = null;
    const low = 1;
    const high = 10;

    expect(rangeSumBST2(root, low, high)).toBe(0);
  });

  it("should handle a BST with only one node", () => {
    const root = new NodeTree(10);
    const low = 1;
    const high = 10;

    expect(rangeSumBST2(root, low, high)).toBe(10);
  });

  it("should handle a BST with values outside the range", () => {
    // Creating a BST with values outside the range [10, 20, 30]
    const root = new NodeTree(10);
    root.left = new NodeTree(20);
    root.right = new NodeTree(30);

    const low = 5;
    const high = 9;

    expect(rangeSumBST2(root, low, high)).toBe(0);
  });
});
