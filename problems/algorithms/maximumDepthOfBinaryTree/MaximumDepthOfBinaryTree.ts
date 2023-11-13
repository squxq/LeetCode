// Source : https://leetcode.com/problems/maximum-depth-of-binary-tree/
// Author : squxq
// Date   : 2023-11-13

/*****************************************************************************************************
 *
 * Given the root of a binary tree, return its maximum depth.
 *
 * A binary tree's maximum depth is the number of nodes along the longest path from the root node down
 * to the farthest leaf node.
 *
 * Example 1:
 *
 * Input: root = [3,9,20,null,null,15,7]
 * Output: 3
 *
 * Example 2:
 *
 * Input: root = [1,null,2]
 * Output: 2
 *
 * Constraints:
 *
 * 	The number of nodes in the tree is in the range [0, 10^4].
 * 	-100 <= Node.val <= 100
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
 * BT -> number
 * given the root of a binary tree, root, return its maximum depth
 * NOTE: a binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node

 * Stub:
 function maxDepth(root: BT): number {return 0}

 * Tests:
 * I: root = [3,9,20,null,null,15,7] -> O: 3
 * I: root = [1,null,2] -> O: 2

 * Template:
 function maxDepth(root: BT): number {
     if (root === null) {return (...)}
     else {
         return (... (root.val)
                (maxDepth(root.left))
                (maxDepth(root.right)))
     }
 }
 
 * CONSTRAINTS:
 * - The number of nodes in the tree is in the range [0, 104].
 * - -100 <= Node.val <= 100
 */
export function maxDepth(root: BT): number {
  if (root === null) {
    return 0;
  }
  const leftDepth: number = maxDepth(root.left);
  const rightDepth: number = maxDepth(root.right);
  return Math.max(leftDepth, rightDepth) + 1;
}
