// Source : https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/
// Author : francisco
// Date   : 2024-01-24

/*****************************************************************************************************
 *
 * Given a binary tree where node values are digits from 1 to 9. A path in the binary tree is said to
 * be pseudo-palindromic if at least one permutation of the node values in the path is a palindrome.
 *
 * Return the number of pseudo-palindromic paths going from the root node to leaf nodes.
 *
 * Example 1:
 *
 * Input: root = [2,3,1,3,1,null,1]
 * Output: 2
 * Explanation: The figure above represents the given binary tree. There are three paths going from
 * the root node to leaf nodes: the red path [2,3,3], the green path [2,1,1], and the path [2,3,1].
 * Among these paths only red path and green path are pseudo-palindromic paths since the red path
 * [2,3,3] can be rearranged in [3,2,3] (palindrome) and the green path [2,1,1] can be rearranged in
 * [1,2,1] (palindrome).
 *
 * Example 2:
 *
 * Input: root = [2,1,1,1,3,null,null,null,null,null,1]
 * Output: 1
 * Explanation: The figure above represents the given binary tree. There are three paths going from
 * the root node to leaf nodes: the green path [2,1,1], the path [2,1,3,1], and the path [2,1]. Among
 * these paths only the green path is pseudo-palindromic since [2,1,1] can be rearranged in [1,2,1]
 * (palindrome).
 *
 * Example 3:
 *
 * Input: root = [9]
 * Output: 1
 *
 * Constraints:
 *
 * 	The number of nodes in the tree is in the range [1, 10^5].
 * 	1 <= Node.val <= 9
 ******************************************************************************************************/

export type BT = NodeTree | null;

export class NodeTree {
  val: number;
  left: BT;
  right: BT;

  constructor(val: number = 0, left: BT = null, right: BT = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

/**
 * @param {BT}
 * @returns {number}
 * return the number of pseudo-palindromic paths going from the root node to leaf nodes
 * NOTE: a path is said to be pseudo-palindromic if at least one permutation of the node
 *       values in the path is a palidrome
 * NOTE: path is root to leaf!!!

 * Tests:
 * I: root = [2,3,1,3,1,null,1] -> O: 2
 * I: root = [2,1,1,1,3,null,null,null,null,null,1] -> O: 1
 * I: root = [9] -> O: 1
 * I: root = [8,8,null,7,7,null,null,2,4,null,8,null,7,null,1] -> O: 2

 Template: binary tree recursion dfs
 * base case: node === null -> return 0
 * second base case: leaf-node? (node.left === null && node.right === null)
 * check for pseudo-palindrome: at most one digit has an odd frequency - bit manipulation

 * Time Complexity: O(n), where n is the number of nodes
 * Space Complexity: O(h), where h is the height of the tree
 */
export function pseudoPalindromicPaths(root: BT): number {
  function dfs(node: BT, path: number): number {
    if (node === null) return 0;
    else if (node.left === null && node.right === null) {
      // if current is pseudo-palindrome return 1; otherwise return 0
      const newPath: number = path ^ (1 << node.val);

      if ((newPath & (newPath - 1)) === 0) return 1;

      return 0;
    }

    return (
      dfs(node.left, path ^ (1 << node.val)) +
      dfs(node.right, path ^ (1 << node.val))
    );
  }

  return dfs(root, 0);
}
