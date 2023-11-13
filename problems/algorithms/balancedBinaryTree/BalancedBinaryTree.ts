// Source : https://leetcode.com/problems/balanced-binary-tree/
// Author : squxq
// Date   : 2023-11-13

/*****************************************************************************************************
 *
 * Given a binary tree, determine if it is height-balanced.
 *
 * Example 1:
 *
 * Input: root = [3,9,20,null,null,15,7]
 * Output: true
 *
 * Example 2:
 *
 * Input: root = [1,2,2,3,3,null,null,4,4]
 * Output: false
 *
 * Example 3:
 *
 * Input: root = []
 * Output: true
 *
 * Constraints:
 *
 * 	The number of nodes in the tree is in the range [0, 5000].
 * 	-10^4 <= Node.val <= 10^4
 ******************************************************************************************************/

export type BT = NodeTree | null;

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
 * BT -> boolean
 * given a binry tree, determine if it is height-balanced
 * NOTE: A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.

 * Stub:
 function isBalanced(root: BT): boolean {return false}

 * Tests:
 * I: root = [3,9,20,null,null,15,7] -> O: true
 * I: root = [1,2,2,3,3,null,null,4,4] -> O: false
 * I: root = [] -> O: true

 * Template:
 function isBalanced(root: BT): boolean {
     if (root === null) {return (...)}
     else {
         return (... (root.val)
                (isBalanced(root.left))
                (isBalanced(root.right)))
     }
 }

 * CONSTRAINTS:
 * - The number of nodes in the tree is in the range [0, 5000].
 * - -10^4 <= Node.val <= 10^4
 */
export function isBalanced(root: BT): boolean {
  if (root === null) {
    return true;
  }
  const diff: number = Math.abs(height(root.left) - height(root.right));
  return (
    diff >= 0 && diff <= 1 && isBalanced(root.left) && isBalanced(root.right)
  );
}

function height(node: BT): number {
  if (node === null) {
    return -1;
  }
  const leftHeight: number = height(node.left);
  const rightHeight: number = height(node.right);
  return Math.max(leftHeight, rightHeight) + 1;
}
