// Source : https://leetcode.com/problems/diameter-of-binary-tree/
// Author : Francisco Tomas
// Date   : 2023-11-23

/*****************************************************************************************************
 *
 * Given the root of a binary tree, return the length of the diameter of the tree.
 *
 * The diameter of a binary tree is the length of the longest path between any two nodes in a tree.
 * This path may or may not pass through the root.
 *
 * The length of a path between two nodes is represented by the number of edges between them.
 *
 * Example 1:
 *
 * Input: root = [1,2,3,4,5]
 * Output: 3
 * Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].
 *
 * Example 2:
 *
 * Input: root = [1,2]
 * Output: 1
 *
 * Constraints:
 *
 * 	The number of nodes in the tree is in the range [1, 10^4].
 * 	-100 <= Node.val <= 100
 ******************************************************************************************************/

type BT = NodeTree | null;

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
 * BT -> number
 * given the root of a binary tree, root, return the length of the diameter of the tree
 * NOTES: The diameter of a binary tree is the length of the longest path between any two nodes in a tree.
 *        This path may or may not pass through the root.
 *        The length of a path between two nodes is represented by the number of edges between them

 * Stub:
 function diameterOfBinaryTree(root: BT): number {return 0}

 * Tests:
 * I: root = [1,2,3,4,5] -> O: 3
 *    Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].
 * I: root = [1,2] -> O: 1
 * I: root = [4,-7,-3,null,null,-9,-3,9,-7,-4,null,6,null,-6,-6,null,null,0,6,5,null,9,null,null,-1,-4,null,null,null,-2] -> O: 8

 * Template:
 function diameterOfBinaryTree(root: BT): number {
     if (root === null) {return (...)}
     else {
         return (... root.val
                     (diameterOfBinaryTree(root.left))
                     (diameterOfBinaryTree(root.right)))
     }
 }

 * Constraints:
 * - The number of nodes in the tree is in the range [1, 104].
 * - -100 <= Node.val <= 100
 */

/**
 * Time Complexity: O(n^2), where n is the number of nodes in the given binary tree, root. This is because for each node of the tree height is called, which itself takes O(n) time.
 * Space Complexity: O(h)

 * Runtime: 85ms (12.17%)
 * Memory: 47.63MB (11.42%)
 */
export function diameterOfBinaryTreeV1(root: BT): number {
  if (root === null) {
    return 0;
  }
  return Math.max(
    height(root.left) + height(root.right),
    diameterOfBinaryTree(root.left),
    diameterOfBinaryTree(root.right),
  );
}

/**
 * Time Complexity: O(n)
 * Space Complexity: O(h), where h is the height of the given binary tree, node.
 */
function height(node: BT): number {
  if (node === null) {
    return 0;
  }
  return 1 + Math.max(height(node.left), height(node.right));
}

/**
 * Time Complexity: O(n)
 * Space Complexity: O(h)

 * Runtime: 50ms (98.50%)
 * Memory: 46.41MB (89.51%)
 */
export function diameterOfBinaryTree(root: BT): number {
  let ans: number = 0;
  function height(node: BT): number {
    if (node === null) {
      return 0;
    }
    const left = height(node.left);
    const right = height(node.right);
    ans = Math.max(left + right, ans);
    return 1 + Math.max(left, right);
  }
  height(root);
  return ans;
}
