// Source : https://leetcode.com/problems/symmetric-tree/
// Author : squxq
// Date   : 2023-11-06

import { NodeTree, isSymmetric, type BT } from "./SymmetricTree"; // Import the necessary code

describe("isSymmetric function", () => {
  it("returns true for an empty tree", () => {
    const root: BT = null;
    expect(isSymmetric(root)).toBe(true);
  });

  it("returns true for a single-node tree", () => {
    const root: BT = new NodeTree(1);
    expect(isSymmetric(root)).toBe(true);
  });

  it("returns true for a symmetric two-node tree", () => {
    const root: BT = new NodeTree(1, new NodeTree(2), new NodeTree(2));
    expect(isSymmetric(root)).toBe(true);
  });

  it("returns false for a non-symmetric two-node tree", () => {
    const root: BT = new NodeTree(1, new NodeTree(2), new NodeTree(3));
    expect(isSymmetric(root)).toBe(false);
  });

  it("returns true for a symmetric three-node tree", () => {
    const root: BT = new NodeTree(1, new NodeTree(2), new NodeTree(2));
    expect(isSymmetric(root)).toBe(true);
  });

  it("returns false for a non-symmetric three-node tree", () => {
    const root: BT = new NodeTree(1, new NodeTree(2), new NodeTree(3));
    expect(isSymmetric(root)).toBe(false);
  });

  it("returns true for a complex symmetric tree", () => {
    const root: BT = new NodeTree(
      1,
      new NodeTree(2, new NodeTree(3), new NodeTree(4)),
      new NodeTree(2, new NodeTree(4), new NodeTree(3)),
    );
    expect(isSymmetric(root)).toBe(true);
  });

  it("returns false for a complex non-symmetric tree", () => {
    const root: BT = new NodeTree(
      1,
      new NodeTree(2, new NodeTree(3), new NodeTree(4)),
      new NodeTree(2, new NodeTree(4), new NodeTree(5)),
    );
    expect(isSymmetric(root)).toBe(false);
  });
});
