// Source : https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
// Author : squxq
// Date   : 2023-11-05

/*****************************************************************************************************
 *
 * Given an integer array nums where the elements are sorted in ascending order, convert it to a
 * height-balanced binary search tree.
 *
 * Example 1:
 *
 * Input: nums = [-10,-3,0,5,9]
 * Output: [0,-3,9,-10,null,5]
 * Explanation: [0,-10,5,null,-3,null,9] is also accepted:
 *
 * Example 2:
 *
 * Input: nums = [1,3]
 * Output: [3,1]
 * Explanation: [1,null,3] and [3,1] are both height-balanced BSTs.
 *
 * Constraints:
 *
 * 	1 <= nums.length <= 10^4
 * 	-10^4 <= nums[i] <= 10^4
 * 	nums is sorted in a strictly increasing order.
 ******************************************************************************************************/

/**
 * Binary Search Tree (BST) is one of:
 * - null
 * - NodeTree
 * interp. null means no BST, or empty BST
 */
type BST = NodeTree | null;

/**
 * NodeTree is new NodeTree(number, BST, BST)
 * interp. new NodeTree(val, left, right) is a BST's node with:
 * - val, is the node's key
 * - left, is the node's left subtree
 * - right, is the node's right subtree
 * INVARIANT (for a given node):
 * - val is always greater (>) than all the keys (val) of its left child (left)
 * - val is always smaller (<) than all the keys (val) of its right child (right)
 * - the same key (val) never appears twice in the BST
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
 * const BST1: BST = new TreeNode(-10, null, null)
 * const BST2: BST = new TreeNode(-3, BST1, null)
 * const BST3: BST = new TreeNode(5, null, null)
 * const BST4: BST = new TreeNode(9, BST3, null)
 * const BST5: BST = new TreeNode(0, BST2, BST4)

 * Template:
 * function fn-for-node-tree(bst: BST) {
     if (bst === null) {return (...)}
     else {
         (... (bst.val)
              (fn-for-node-tree(bst.left))
              (fn-for-node-tree(bst.right)))
     }
 }
 */

/**
 * number[] -> TreeNode | null
 * given an integer array, nums, convert it to a height-balanced BST (Binary Search Tree)
 * ASSUME: nums' elements are sorted in ascending order

 * Stub:
 * function sortedArrayToBST(nums: number[]): TreeNode | null {return null}

 * Tests:
 * base case(nums.length === 0): return null
 * nums = [1,3]: return [3,1] ([1,null,3] is also accepted)
 * nums = [-10,-3,0,5,9]: return [0,-3,9,-10,null,5] ([0,-10,5,null,-3,null,9] is also accepted)

 * Template:
 * function sortedArrayToBST(nums: number[]): TreeNode | null {
     return (... nums)
 }
 */
export function sortedArrayToBST(nums: number[]): BST {
  function buildTree(start: number, end: number): BST {
    if (start > end) return null;

    const mid: number = Math.floor((start + end) / 2);
    return new NodeTree(
      nums[mid],
      buildTree(start, mid - 1),
      buildTree(mid + 1, end),
    );
  }

  return buildTree(0, nums.length - 1);
}
