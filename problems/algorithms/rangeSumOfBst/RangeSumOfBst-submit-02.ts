// Source : https://leetcode.com/problems/range-sum-of-bst/
// Author : francisco
// Date   : 2024-01-08

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

export type BST = NodeTree | null;

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
 * @param {TreeNode | null} root
 * @param {number} low
 * @param {number} high
 * @returns {number}
 * return the sum of avalues of all nodes witha value in the inclusive range [low, high]

 * Template: recursion + closure

 * Time Complexity: O(n), where n is the number of nodes in the tree
 * Space Complexity: O(h), where h is the height of the tree
 */
export function rangeSumBST(root: BST, low: number, high: number): number {
  function dfs(node: BST): number {
    if (node === null) return 0;
    if (node.val >= low && node.val <= high)
      return node.val + dfs(node.left) + dfs(node.right);
    else if (node.val >= low) return dfs(node.left);
    else return dfs(node.right);
  }

  return dfs(root);
}
