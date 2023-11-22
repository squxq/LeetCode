// Source : https://leetcode.com/problems/invert-binary-tree/
// Author : Francisco Tomas
// Date   : 2023-11-22

/*****************************************************************************************************
 *
 * Given the root of a binary tree, invert the tree, and return its root.
 *
 * Example 1:
 *
 * Input: root = [4,2,7,1,3,6,9]
 * Output: [4,7,2,9,6,3,1]
 *
 * Example 2:
 *
 * Input: root = [2,1,3]
 * Output: [2,3,1]
 *
 * Example 3:
 *
 * Input: root = []
 * Output: []
 *
 * Constraints:
 *
 * 	The number of nodes in the tree is in the range [0, 100].
 * 	-100 <= Node.val <= 100
 ******************************************************************************************************/

type BT = NodeTree | null;
export class NodeTree {
  val: number;
  left: BT;
  right: BT;
  constructor(val?: number, left?: BT, right?: BT) {
    this.val = val ?? 0;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

/**
 * BT -> BT
 * given the root of a binary tree, invert the tree, and return its root

 * Stub:
 function invertTree(root: BT): BT {return null}

 * Tests:
 * I: root = [4,2,7,1,3,6,9] -> O: [4,7,2,9,6,3,1]
 * I: root = [2,1,3] -> O: [2,3,1]
 * I: root = [] -> O: []

 * Template:
 function invertTree(root: BT): BT {
     if (root === null) {return null}
     else {
         return (... root.val
                     (invertTree(root.left))
                     (invertTree(root.right)))
     }
 }

 * CONSTRAINTS:
 * - The number of nodes in the tree is in the range [0, 100].
 * - -100 <= Node.val <= 100
 */
export function invertTree(root: BT): BT {
  if (root === null) {
    return null;
  } else {
    return new NodeTree(
      root.val,
      invertTree(root.right),
      invertTree(root.left),
    );
  }
}
