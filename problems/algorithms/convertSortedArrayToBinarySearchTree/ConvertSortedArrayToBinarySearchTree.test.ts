// Source : https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
// Author : squxq
// Date   : 2023-11-05

import {
  NodeTree,
  sortedArrayToBST,
} from "./ConvertSortedArrayToBinarySearchTree";

describe("sortedArrayToBST", () => {
  it("handles an empty array", () => {
    const result = sortedArrayToBST([]);
    expect(result).toBeNull();
  });

  it("handles an array with one element", () => {
    const result = sortedArrayToBST([42]);
    expect(result).toEqual(new NodeTree(42));
  });

  it("handles an array with two elements", () => {
    const result1 = sortedArrayToBST([1, 2]);
    expect(result1).toEqual(new NodeTree(2, new NodeTree(1), null));

    const result2 = sortedArrayToBST([2, 1]);
    expect(result2).toEqual(new NodeTree(1, null, new NodeTree(2)));
  });

  it("handles an array with three elements", () => {
    const result1 = sortedArrayToBST([1, 2, 3]);
    expect(result1).toEqual(new NodeTree(2, new NodeTree(1), new NodeTree(3)));

    const result2 = sortedArrayToBST([1, 3, 2]);
    expect(result2).toEqual(new NodeTree(3, new NodeTree(1), new NodeTree(2)));
  });
});
