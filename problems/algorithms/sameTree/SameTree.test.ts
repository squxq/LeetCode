// Source : https://leetcode.com/problems/same-tree/
// Author : squxq
// Date   : 2023-11-06

import { NodeTree, isSameTree, type BT } from "./SameTree"; // Import the necessary code

describe("isSameTree function", () => {
  it("returns true when both trees are empty", () => {
    const p: BT = null;
    const q: BT = null;
    expect(isSameTree(p, q)).toBe(true);
  });

  it("returns true for identical single-node trees", () => {
    const p: BT = new NodeTree(1);
    const q: BT = new NodeTree(1);
    expect(isSameTree(p, q)).toBe(true);
  });

  it("returns false for different single-node trees", () => {
    const p: BT = new NodeTree(1);
    const q: BT = new NodeTree(2);
    expect(isSameTree(p, q)).toBe(false);
  });

  it("returns true for identical two-node trees", () => {
    const p: BT = new NodeTree(1, new NodeTree(2));
    const q: BT = new NodeTree(1, new NodeTree(2));
    expect(isSameTree(p, q)).toBe(true);
  });

  it("returns false for different two-node trees", () => {
    const p: BT = new NodeTree(1, new NodeTree(2));
    const q: BT = new NodeTree(1, new NodeTree(3));
    expect(isSameTree(p, q)).toBe(false);
  });

  it("returns false when one tree is empty and the other is not", () => {
    const p: BT = null;
    const q: BT = new NodeTree(1);
    expect(isSameTree(p, q)).toBe(false);
  });

  it("returns false when the structure is different", () => {
    const p: BT = new NodeTree(1, new NodeTree(2, new NodeTree(3)));
    const q: BT = new NodeTree(1, null, new NodeTree(2, new NodeTree(3)));
    expect(isSameTree(p, q)).toBe(false);
  });

  it("returns true for complex identical trees", () => {
    const p: BT = new NodeTree(
      1,
      new NodeTree(2, new NodeTree(3), new NodeTree(4)),
      new NodeTree(5, null, new NodeTree(6)),
    );
    const q: BT = new NodeTree(
      1,
      new NodeTree(2, new NodeTree(3), new NodeTree(4)),
      new NodeTree(5, null, new NodeTree(6)),
    );
    expect(isSameTree(p, q)).toBe(true);
  });

  it("returns false for complex different trees", () => {
    const p: BT = new NodeTree(
      1,
      new NodeTree(2, new NodeTree(3), new NodeTree(4)),
      new NodeTree(5, null, new NodeTree(6)),
    );
    const q: BT = new NodeTree(
      1,
      new NodeTree(2, new NodeTree(3), new NodeTree(7)),
      new NodeTree(5, null, new NodeTree(6)),
    );
    expect(isSameTree(p, q)).toBe(false);
  });
});
