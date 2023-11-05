// Source : https://leetcode.com/problems/search-in-a-binary-search-tree/
// Author : squxq
// Date   : 2023-11-05

/*****************************************************************************************************
 *
 * You are given the root of a binary search tree (BST) and an integer val.
 *
 * Find the node in the BST that the node's value equals val and return the subtree rooted with that
 * node. If such a node does not exist, return null.
 *
 * Example 1:
 *
 * Input: root = [4,2,7,1,3], val = 2
 * Output: [2,1,3]
 *
 * Example 2:
 *
 * Input: root = [4,2,7,1,3], val = 5
 * Output: []
 *
 * Constraints:
 *
 * 	The number of nodes in the tree is in the range [1, 5000].
 * 	1 <= Node.val <= 10^7
 * 	root is a binary search tree.
 * 	1 <= val <= 10^7
 ******************************************************************************************************/

// Data Definitions:

/**
 * BST is: new BST(number, BST, BST)
 * interp. new BST(val, left, right) is a BST node with:
 * - val, the node's key
 * - left, the node's left subtree
 * - right, the node's right subtree
 * INVARIANT (for a given node):
 * - val is always greater (>) than all the keys (val) in its left child (left)
 * - val is always smaller (<) than all the keys (val) in its right child (right)
 * - the same key (val) never appears twice in the tree
 */
export class BST {
  val: number;
  left: BST | null;
  right: BST | null;

  constructor(
    val: number = 0,
    left: BST | null = null,
    right: BST | null = null,
  ) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

/**
 * Examples:
 * const BST0 = new BST(1, null, null)
 * const BST1 = new BST(3, null, null)
 * const BST2 = new BST(2, BST0, BST1)
 * const BST3 = new BST(7, null, null)
 * const BST4 = new BST(4, BST2, BST3)

 * Template:
 * function fn-for-bst(bst: BST) {
 *    if (!bst) {return (...)}
 *    else {
 *        return (... (bst.val)
 *          (fn-for-bst(bst.left))
 *          (fn-for-bst(bst.right)))
 *    }
 * }
 */

// Function Definitions:

/**
 * (BST | null) number -> (BST | null)
 * return the node in the given BST, root, that the node's value equals given value, val
 
 * Stub:
 * function searchBST(root: (BST | null), val: number): (BST | null) {return null}

 * Template: <used template from BST>
 */
export function searchBST(root: BST | null, val: number): BST | null {
  if (root === null) {
    return null;
  } else {
    if (val === root.val) {
      return root;
    } else if (val < root.val) {
      return searchBST(root.left, val);
    } else {
      return searchBST(root.right, val);
    }
  }
}
