// Source : https://leetcode.com/problems/minimum-distance-between-bst-nodes/
// Author : squxq
// Date   : 2023-11-06

/*****************************************************************************************************
 *
 * Given the root of a Binary Search Tree (BST), return the minimum difference between the values of
 * any two different nodes in the tree.
 *
 * Example 1:
 *
 * Input: root = [4,2,6,1,3]
 * Output: 1
 *
 * Example 2:
 *
 * Input: root = [1,0,48,null,null,12,49]
 * Output: 1
 *
 * Constraints:
 *
 * 	The number of nodes in the tree is in the range [2, 100].
 * 	0 <= Node.val <= 10^5
 *
 * Note: This question is the same as 530:
 * https://leetcode.com/problems/minimum-absolute-difference-in-bst/
 ******************************************************************************************************/

/**
 * Binary Search Tree (BST) is one of:
 * - null
 * - NodeTree
 * interp. null means no BST, or empty BST; NodeTree is the root node of the BST
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
 * Template:
 * function fn-for-bst(bst: BST) {
     if (bst === null) {return (...)}
     else {
         return (...
                (bst.val)
                (fn-for-bst (bst.left))
                (fn-for-bst (bst.right)))
     }
 }
 */

/**
 * BST -> number
 * given the root of a BST, root, return the minimum distance between the values of any two different nodes in the tree
 * CONSTRAINTS: the number of nodes in the tree is in the range [2,100]
 *              0 <= Node.val <= 10^5

 * Stub:
 * function minDiffInBST(root: BST): number {return 0}

 * Tests:
 * root = [4,2,6,1,3] -> output = 1
 * root = [1,0,48,null,null,12,49] -> output = 1

 * Template: <used template from BST>
 */
export function minDiffInBST(root: BST): number {
  let prev: number = NaN;
  let min: number = Infinity;

  function inOrderTraversal(node: BST): void {
    if (node !== null) {
      inOrderTraversal(node.left);

      const diff: number = Math.abs(node.val - prev);
      if (diff === 0) {
        min = 0;
        return;
      } else if (diff < min) {
        min = diff;
      }
      prev = node.val;

      inOrderTraversal(node.right);
    }
  }
  inOrderTraversal(root);

  return min;
}
