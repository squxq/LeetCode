// Source : https://leetcode.com/problems/range-sum-of-bst/
// Author : squxq
// Date   : 2023-11-06

/*****************************************************************************************************
 *
 * Given the root node of a binary search tree and two integers low and high, return the sum of values
 * of all nodes with a value in the inclusive range [low, high].
 *
 * Example 1:
 *
 * Input: root = [10,5,15,3,7,null,18], low = 7, high = 15
 * Output: 32
 * Explanation: Nodes 7, 10, and 15 are in the range [7, 15]. 7 + 10 + 15 = 32.
 *
 * Example 2:
 *
 * Input: root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10
 * Output: 23
 * Explanation: Nodes 6, 7, and 10 are in the range [6, 10]. 6 + 7 + 10 = 23.
 *
 * Constraints:
 *
 * 	The number of nodes in the tree is in the range [1, 2 * 10^4].
 * 	1 <= Node.val <= 10^5
 * 	1 <= low <= high <= 10^5
 * 	All Node.val are unique.
 ******************************************************************************************************/

/**
 * Binary Search Tree (BST) is one of:
 * - null
 * - NodeTree
 * interp. null means no BST, or empty BST; NodeTree is the BST's root
 */
export type BST = NodeTree | null;

/**
 * NodeTree is new NodeTree(number, BST, BST)
 * interp. new NodeTree(val, left, right) is a BST's node with:
 * - val, is the node's key
 * - left, is the node's left subtree
 * - right, is the node's right subtree
 * INVARIANT (for a given node):
 * - val is greater (>) than all the keys (val) in its left child (left)
 * - val is smaller (<) than all the keys (val) in its right child (right)
 * - the same key (val) never appears twice in the tree
 */
export class NodeTree {
  val: number;
  left: BST;
  right: BST;

  constructor(val: number = 0, left: BST = null, right: BST = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

/**
 * BST number number -> number
 * given the root of a BST, root, and two integers, low and high
 * return the sum of values of all nodes with a value in the range: [low, high]
 * ASSUME: the range: [low, high] is inclusive
 * CONSTRAINTS:
 * - The number of nodes in the tree is in the range [1, 2 * 10^4]
 * - 1 <= Node.val <= 10^5
 * - 1 <= low <= high <= 10^5

 * Stub:
 * function rangeSumBST(root: BST, low: number, high: number): number {return 0}

 * Tests:
 * I: root = [10,5,15,3,7,null,18] low = 7 high = 15 -> O: 32
 * EXPLANATION: Nodes 7, 10, and 15 are in the range [7, 15]. 7 + 10 + 15 = 32.

 * I: root = [10,5,15,3,7,13,18,1,null,6] low = 6 high = 10 -> O: 23
 * EXPLANATION: Nodes 6, 7, and 10 are in the range [6, 10]. 6 + 7 + 10 = 23.
 
 * Template:
 * function rangeSumBST(root: BST, low: number, high: number): number {
     if (root === null) {return (... (low) (high))}
     else {
         return (...
                (bst.val)
                (fn-for-bst (bst.left))
                (fn-for-bst (bst.right)))
     }
 }
 */
export function rangeSumBST(root: BST, low: number, high: number): number {
  let sum: number = 0;
  function inOrderTraversal(node: BST): void {
    if (node !== null) {
      inOrderTraversal(node.left);
      if (node.val >= low && node.val <= high) {
        sum += node.val;
      }
      inOrderTraversal(node.right);
    }
  }
  inOrderTraversal(root);
  return sum;
}
