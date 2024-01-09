// Source : https://leetcode.com/problems/leaf-similar-trees/
// Author : francisco
// Date   : 2024-01-09

/*****************************************************************************************************
 *
 * Consider all the leaves of a binary tree, from left to right order, the values of those leaves form
 * a leaf value sequence.
 *
 * For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8).
 *
 * Two binary trees are considered leaf-similar if their leaf value sequence is the same.
 *
 * Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.
 *
 * Example 1:
 *
 * Input: root1 = [3,5,1,6,2,9,8,null,null,7,4], root2 =
 * [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]
 * Output: true
 *
 * Example 2:
 *
 * Input: root1 = [1,2,3], root2 = [1,3,2]
 * Output: false
 *
 * Constraints:
 *
 * 	The number of nodes in each tree will be in the range [1, 200].
 * 	Both of the given trees will have values in the range [0, 200].
 ******************************************************************************************************/

export type BST = TreeNode | null;

export class TreeNode {
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
 * @param {TreeNode | null} root1
 * @param {TreeNode | null} root2
 * @returns {boolean}
 * return true if an only if the two given trees aer leaf-similar
 * two BT are leaf-similar if their leaf value sequence is the same

 * Template: recursion
 * root1 constant - leaf value sequence
 * compare leaf value sequences
 */
export function leafSimilar(
  root1: TreeNode | null,
  root2: TreeNode | null,
): boolean {
  const root1LeafValueSequence: number[] = [];

  function createLeafValueSequence(node: TreeNode | null): void {
    if (node !== null) {
      if (node.left === null && node.right === null) {
        root1LeafValueSequence.push(node.val);
      }

      createLeafValueSequence(node.left);
      createLeafValueSequence(node.right);
    }
  }

  createLeafValueSequence(root1);

  function compareLeafValueSequences(node: TreeNode | null): boolean {
    if (node === null) return true;
    if (node.left === null && node.right === null)
      return root1LeafValueSequence.shift() === node.val;

    return (
      compareLeafValueSequences(node.left) &&
      compareLeafValueSequences(node.right)
    );
  }

  return (
    compareLeafValueSequences(root2) && root1LeafValueSequence.length === 0
  );
}
