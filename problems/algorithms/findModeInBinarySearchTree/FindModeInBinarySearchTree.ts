// Source : https://leetcode.com/problems/find-mode-in-binary-search-tree/
// Author : squxq
// Date   : 2023-11-05

/*****************************************************************************************************
 *
 * Given the root of a binary search tree (BST) with duplicates, return all the mode(s) (i.e., the
 * most frequently occurred element) in it.
 *
 * If the tree has more than one mode, return them in any order.
 *
 * Assume a BST is defined as follows:
 *
 * 	The left subtree of a node contains only nodes with keys less than or equal to the node's
 * key.
 * 	The right subtree of a node contains only nodes with keys greater than or equal to the
 * node's key.
 * 	Both the left and right subtrees must also be binary search trees.
 *
 * Example 1:
 *
 * Input: root = [1,null,2,2]
 * Output: [2]
 *
 * Example 2:
 *
 * Input: root = [0]
 * Output: [0]
 *
 * Constraints:
 *
 * 	The number of nodes in the tree is in the range [1, 10^4].
 * 	-10^5 <= Node.val <= 10^5
 *
 * Follow up: Could you do that without using any extra space? (Assume that the implicit stack space
 * incurred due to recursion does not count).
 ******************************************************************************************************/

// Data Definitions:

/**
 * BST (Binary Search Tree) is one of:
 * null
 * NodeTree
 * interp. null means, no BST, or empty BST
 */
export type BST = NodeTree | null;

/**
 * NodeTree is: new NodeTree(number, NodeTree | null, NodeTree | null)
 * interp. new NodeTree(val, left, right) is a BST node with:
 * - val, the node's key
 * - left, the node's left subtree
 * - right, the node's right subtree
 * INVARIANT (for a given node):
 * - val is greater (>) than all keys (val) in left child (left)
 * - val is smaller (<) than all keys (val) in right child (right)
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
 * const BST1: BST = new NodeTree(1, null, null)
 * const BST2: BST = new NodeTree(2, null, BST1)
 * const BST3: BST = new NodeTree(10, BST2, BST1)

 * Template:
 * fnForBST(bst: BST) {
      if (bst === null) {return (...)}
      else {
         return (...
         (bst.val)
         (fnForBST(bst.left))
         (fnForBST(bst.right)))
      }
 * }
 */

// Function Definitions:

/**
 * (BST) -> number[]
 * given the root, root, of a BST return all the mode(s) - if the tree has more than one mode return them in any order
 * a mode is the most frequently occured element in a BST
 * ASSUME: the given BST has duplicates

 * Stub:
 * function findMode(root: BST): number[] {return []}

 * Template: <used template from>

 * To do this:
 * - traversal: traversing a tree means visiting and outputting the value of each node in a particular order
 * - inorder traversal: traverse from the left subtree to the root then to the right subtree (Left, Root, Right)
 */
export function findMode(root: BST): number[] {
  let ans: number[] = [];
  let frequency: number = 0;
  let maxFrequency: number = 0;
  let prev: number = NaN;

  function inOrderTraversal(node: BST): void {
    if (node !== null) {
      inOrderTraversal(node.left);

      if (node.val === prev) {
        frequency++;
      } else {
        frequency = 1;
      }

      if (frequency > maxFrequency) {
        maxFrequency = frequency;
        ans = [node.val];
      } else if (frequency === maxFrequency) {
        ans.push(node.val);
      }
      prev = node.val;

      inOrderTraversal(node.right);
    }
  }
  inOrderTraversal(root);

  return ans;
}
