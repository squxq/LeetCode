// Source : https://leetcode.com/problems/two-sum-iv-input-is-a-bst/
// Author : squxq
// Date   : 2023-11-06

/*****************************************************************************************************
 *
 * Given the root of a binary search tree and an integer k, return true if there exist two elements in
 * the BST such that their sum is equal to k, or false otherwise.
 *
 * Example 1:
 *
 * Input: root = [5,3,6,2,4,null,7], k = 9
 * Output: true
 *
 * Example 2:
 *
 * Input: root = [5,3,6,2,4,null,7], k = 28
 * Output: false
 *
 * Constraints:
 *
 * 	The number of nodes in the tree is in the range [1, 10^4].
 * 	-10^4 <= Node.val <= 10^4
 * 	root is guaranteed to be a valid binary search tree.
 * 	-10^5 <= k <= 10^5
 ******************************************************************************************************/

export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val ?? 0;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export function findTarget(root: TreeNode | null, k: number): boolean {
  const differences = new Set<number>();

  function inOrderTraversal(node: TreeNode | null): boolean {
    if (node === null) return false;
    else {
      const leftNode: boolean = inOrderTraversal(node.left);
      const rootNode: boolean = differences.has(k - node.val);
      if (!rootNode) {
        differences.add(node.val);
      }
      const rightNode: boolean = inOrderTraversal(node.right);
      return leftNode || rootNode || rightNode;
    }
  }

  return inOrderTraversal(root);
}
