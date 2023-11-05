// Source : https://leetcode.com/problems/minimum-absolute-difference-in-bst/
// Author : squxq
// Date   : 2023-11-05

/*****************************************************************************************************
 *
 * Given the root of a Binary Search Tree (BST), return the minimum absolute difference between the
 * values of any two different nodes in the tree.
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
 * 	The number of nodes in the tree is in the range [2, 10^4].
 * 	0 <= Node.val <= 10^5
 *
 * Note: This question is the same as 783:
 * https://leetcode.com/problems/minimum-distance-between-bst-nodes/
 ******************************************************************************************************/

/**
 * Binary Search Tree (BST) is one of:
 * - null
 * - NodeTree
 * interp. null means no BST, or empty BST; NodeTree is the BST's root node
 */
export type BST = NodeTree | null;

/**
 * NodeTree is new NodeTree(number, BST, BST)
 * interp. new NodeTree(val, left, right) is a BST's node with:
 * - val, is the node's key
 * - left, is the node's left subtree
 * - right, is the node's right subtree
 * INVARIANT (for a given node):
 * - val is always greater (>) than all the keys (val) in its left child (left)
 * - val is always smaller (<) than all the keys (val) in its right child (right)
 * - the same key never appears twice in the tree
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
 * Examples:
 * const BST0: BST = null
 * const BST1: BST = new NodeTree(5, null, null)
 * const BST2: BST = new NodeTree(9, BST1, null)
 * const BST3: BST = new NodeTree(6, null, null)
 * const BST4: BST = new NodeTree(0, BST2, BST3)

 * Template:
 * function fn-for-node-tree(bst: BST) {
     if (bst === null) {return (...)}
     else {
         (... (bst.val)
              (fn-for-node-tree (bst.left))
              (fn-for-node-tree (bst.right)))
     }
 }
 */

/**
 * BST -> number
 * given the root of a BST, root, produce the minimum absolute difference
 * between the values of any two different nodes in the tree

 * Stub:
 * function getMinimumDifference(root: BST): number {return 0}

 * Tests:
 * base case -> root = null: return 0
 * root = [4,2,6,1,3]: return 1
 * root = [1,0,48,null,null,12,49]: return 1

 * Template: <used template from NodeTree>
 */
export function getMinimumDifference(root: BST): number {
  let prev: number = Number.MAX_SAFE_INTEGER;
  let ans: number = Number.MAX_SAFE_INTEGER;

  function inOrderTraversal(node: BST): void {
    if (node !== null) {
      inOrderTraversal(node.left);

      const absDif: number = Math.abs(node.val - prev);
      if (absDif < ans) {
        ans = absDif;
      }
      prev = node.val;

      inOrderTraversal(node.right);

      // eslint-disable-next-line no-useless-return
      if (ans === 0) return;
    }
  }

  inOrderTraversal(root);

  return ans;
}
