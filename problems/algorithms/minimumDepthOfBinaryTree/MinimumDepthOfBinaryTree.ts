// Source : https://leetcode.com/problems/minimum-depth-of-binary-tree/
// Author : squxq
// Date   : 2023-11-13

/*****************************************************************************************************
 *
 * Given a binary tree, find its minimum depth.
 *
 * The minimum depth is the number of nodes along the shortest path from the root node down to the
 * nearest leaf node.
 *
 * Note: A leaf is a node with no children.
 *
 * Example 1:
 *
 * Input: root = [3,9,20,null,null,15,7]
 * Output: 2
 *
 * Example 2:
 *
 * Input: root = [2,null,3,null,4,null,5,null,6]
 * Output: 5
 *
 * Constraints:
 *
 * 	The number of nodes in the tree is in the range [0, 10^5].
 * 	-1000 <= Node.val <= 1000
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

export function minDepth(root: BT): number {
  if (root === null) {
    return 0;
  } else if (root.left === null && root.right === null) {
    return 1;
  } else if (root.left === null) {
    return 1 + minDepth(root.right);
  } else if (root.right === null) {
    return 1 + minDepth(root.left);
  }

  return 1 + Math.min(minDepth(root.left), minDepth(root.right));
}
