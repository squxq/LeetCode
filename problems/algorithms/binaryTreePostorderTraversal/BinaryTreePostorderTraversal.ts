// Source : https://leetcode.com/problems/binary-tree-postorder-traversal/
// Author : squxq
// Date   : 2023-11-13

/*****************************************************************************************************
 *
 * Given the root of a binary tree, return the postorder traversal of its nodes' values.
 *
 * Example 1:
 *
 * Input: root = [1,null,2,3]
 * Output: [3,2,1]
 *
 * Example 2:
 *
 * Input: root = []
 * Output: []
 *
 * Example 3:
 *
 * Input: root = [1]
 * Output: [1]
 *
 * Constraints:
 *
 * 	The number of the nodes in the tree is in the range [0, 100].
 * 	-100 <= Node.val <= 100
 *
 * Follow up: Recursive solution is trivial, could you do it iteratively?
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
 * BT -> number[]
 * given the root of a binary tree, root, return the postorder traversal of its node's values

 * Stub:
 function postorderTraversal(root: BT): number[] {return []}

 * Tests:
 * I: root = [1,null,2,3] -> O: [3,2,1]
 * I: root = [] -> O: []
 * I: root = [1] -> O: [1]

 * Template:
 function postorderTraversal(root: BT): number[] {
     if (root === null) {return (...)}
     else {
         return (... (root.val)
                (postorderTraversal(root.left))
                (postorderTraversal(root.right)))
     }
 }

 * CONSTRAINTS:
 * - The number of the nodes in the tree is in the range [0, 100].
 * - -100 <= Node.val <= 100
 */
export function postorderTraversal(root: BT): number[] {
  if (root === null) {
    return [];
  }
  return [
    ...postorderTraversal(root.left),
    ...postorderTraversal(root.right),
    root.val,
  ];
}
