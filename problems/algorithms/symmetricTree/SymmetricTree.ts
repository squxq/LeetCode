// Source : https://leetcode.com/problems/symmetric-tree/
// Author : squxq
// Date   : 2023-11-06

/*****************************************************************************************************
 *
 * Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its
 * center).
 *
 * Example 1:
 *
 * Input: root = [1,2,2,3,4,4,3]
 * Output: true
 *
 * Example 2:
 *
 * Input: root = [1,2,2,null,3,null,3]
 * Output: false
 *
 * Constraints:
 *
 * 	The number of nodes in the tree is in the range [1, 1000].
 * 	-100 <= Node.val <= 100
 *
 * Follow up: Could you solve it both recursively and iteratively?
 ******************************************************************************************************/

/**
 * Binary Tree (BT) is one of:
 * - null
 * - NodeTree
 * interp. null means no BT, or empty BT
 *         NodeTree is the BT's root
 */
export type BT = NodeTree | null;

/**
 * NodeTree is new NodeTree(number, BT, BT)
 * interp. new NodeTree(val, left, right) is a BT's node with:
 * val, is the node's key
 * left, is the node's left subtree
 * right, is the node's right subtree
 * INVARIANT:
 * - each node has at most 2 children (left and right)

 * Template:
 function fn-for-BT(root: BT) {
     if (root === null) {return (...)}
     else {
         return (... (root.val)
                (fn-for-BT(root.left))
                (fn-for-BT(root.right)))
     }
 }
 */
export class NodeTree {
  val: number;
  left: NodeTree | null;
  right: NodeTree | null;
  constructor(val?: number, left?: NodeTree | null, right?: NodeTree | null) {
    this.val = val ?? 0;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

/**
 * BT -> boolean
 * given the root of a binary tree, root, return true if it is a mirror of itself
 * NOTE: it is symmetrci around its center

 * Stub:
 funtion isSymmetric(root: BT): boolean {return false}

 * Tests:
 * I: root = [1,2,2,3,4,4,3] -> O: true
 * I: root = [1,2,2,null,3,null,3] -> O: false

 * Template: <used template from BT>

 * CONSTRAINTS:
 * - The number of nodes in the tree is in the range [1, 1000].
 * - -100 <= Node.val <= 100
 */
export function isSymmetric(root: BT): boolean {
  return isMirror(root, root);
}

function isMirror(root1: BT, root2: BT): boolean {
  if (root1 === null && root2 === null) {
    return true;
  }
  if (root1 === null || root2 === null) {
    return false;
  }
  return (
    root1.val === root2.val &&
    isMirror(root1.left, root2.right) &&
    isMirror(root1.right, root2.left)
  );
}
