// Source : https://leetcode.com/problems/insert-into-a-binary-search-tree/
// Author : squxq
// Date   : 2023-11-06

import {
  NodeTree,
  insertIntoBST,
  type BST,
} from "./InsertIntoABinarySearchTree"; // Adjust the import path

describe("insertIntoBST", () => {
  // Test 1: Insert into an empty tree
  test("Insert into an empty tree", () => {
    const root: BST = null;
    const val = 5;
    const expected: BST = new NodeTree(5, null, null);
    expect(insertIntoBST(root, val)).toEqual(expected);
  });

  // Test 2: Insert into a single-node tree
  test("Insert into a single-node tree", () => {
    const root: BST = new NodeTree(4);
    const val = 2;
    const expected: BST = new NodeTree(4, new NodeTree(2), null);
    expect(insertIntoBST(root, val)).toEqual(expected);
  });

  // Test 3: Insert into the root with a greater value
  test("Insert into the root with a greater value", () => {
    const root: BST = new NodeTree(4);
    const val = 7;
    const expected: BST = new NodeTree(4, null, new NodeTree(7));
    expect(insertIntoBST(root, val)).toEqual(expected);
  });

  // Test 4: Insert into a multi-node tree
  test("Insert into a multi-node tree", () => {
    const root: BST = new NodeTree(4, new NodeTree(2), new NodeTree(7));
    const val = 5;
    const expected: BST = new NodeTree(
      4,
      new NodeTree(2, null, new NodeTree(5)),
      new NodeTree(7),
    );
    expect(insertIntoBST(root, val)).toEqual(expected);
  });

  // Test 5: Insert a smaller value
  test("Insert a smaller value", () => {
    const root: BST = new NodeTree(4, new NodeTree(2), new NodeTree(7));
    const val = 1;
    const expected: BST = new NodeTree(
      4,
      new NodeTree(2, new NodeTree(1), null),
      new NodeTree(7),
    );
    expect(insertIntoBST(root, val)).toEqual(expected);
  });

  // Test 6: Insert a larger value
  test("Insert a larger value", () => {
    const root: BST = new NodeTree(4, new NodeTree(2), new NodeTree(7));
    const val = 10;
    const expected: BST = new NodeTree(
      4,
      new NodeTree(2),
      new NodeTree(7, null, new NodeTree(10)),
    );
    expect(insertIntoBST(root, val)).toEqual(expected);
  });

  // Test 7: Insert the maximum possible value
  test("Insert the maximum possible value", () => {
    const root: BST = new NodeTree(4, new NodeTree(2), new NodeTree(7));
    const val = 100000000;
    const expected: BST = new NodeTree(
      4,
      new NodeTree(2),
      new NodeTree(7, null, new NodeTree(100000000)),
    );
    expect(insertIntoBST(root, val)).toEqual(expected);
  });

  // Test 8: Insert the minimum possible value
  test("Insert the minimum possible value", () => {
    const root: BST = new NodeTree(4, new NodeTree(2), new NodeTree(7));
    const val = -100000000;
    const expected: BST = new NodeTree(
      4,
      new NodeTree(2, new NodeTree(-100000000), null),
      new NodeTree(7),
    );
    expect(insertIntoBST(root, val)).toEqual(expected);
  });

  // Test 9: Insert into an empty tree (negative value)
  test("Insert into an empty tree (negative value)", () => {
    const root: BST = null;
    const val = -5;
    const expected: BST = new NodeTree(-5, null, null);
    expect(insertIntoBST(root, val)).toEqual(expected);
  });

  // Test 10: Insert into an empty tree (large negative value)
  test("Insert into an empty tree (large negative value)", () => {
    const root: BST = null;
    const val = -100000000;
    const expected: BST = new NodeTree(-100000000, null, null);
    expect(insertIntoBST(root, val)).toEqual(expected);
  });
});
