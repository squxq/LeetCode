// Source : https://leetcode.com/problems/subtree-of-another-tree/
// Author : Francisco Tomas
// Date   : 2023-12-01

/*****************************************************************************************************
 *
 * Given the roots of two binary trees root and subRoot, return true if there is a subtree of root
 * with the same structure and node values of subRoot and false otherwise.
 *
 * A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's
 * descendants. The tree tree could also be considered as a subtree of itself.
 *
 * Example 1:
 *
 * Input: root = [3,4,5,1,2], subRoot = [4,1,2]
 * Output: true
 *
 * Example 2:
 *
 * Input: root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]
 * Output: false
 *
 * Constraints:
 *
 * 	The number of nodes in the root tree is in the range [1, 2000].
 * 	The number of nodes in the subRoot tree is in the range [1, 1000].
 * 	-10^4 <= root.val <= 10^4
 * 	-10^4 <= subRoot.val <= 10^4
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
 * (BT) (BT) -> boolean 
 * given the roots of two binary trees, root and subRoot, return true if there is a subtree of root
 * with the same structure and node values of subRoot and false otherwise
 * NOTES: - A subtree of a binary tree, tree, is a tree that consists of a node in tree and all of this node's descendants
 *        - The tree, tree, could also be considered as a subtree of itself

 * Stub:
 function isSubtree(root: BT, subRoot: BT): boolean {return false}

 * Tests:
 * I: root = [3,4,5,1,2], subRoot = [4,1,2] -> O: true
 * I: root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2] -> O: false
 * I: root = [1,1], subRoot = [1] -> O: true

 * Constraints:
 * - The number of nodes in the root tree is in the range [1, 2000].
 * - The number of nodes in the subRoot tree is in the range [1, 1000].
 * - -10^4 <= root.val <= 10^4
 * - -10^4 <= subRoot.val <= 10^4
 */

/**
 * Time Complexity: O(m * n), where m is the number of nodes in root and n the number of nodes in subRoot
 * Space Complexity: O(h), where h is the height of root

 * Runtime: 73ms (74.58%)
 * Memory: 49.68MB (79.57%)
 */
export function isSubtree(root: BT, subRoot: BT): boolean {
  if (root === null) {
    return false;
  } else if (isEqual(root, subRoot)) {
    return true;
  } else {
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
  }
}

/**
 * Time Complexity: O(min(m, n)), where m is the number of nodes in root1 and n is the number of nodes in root2
 *                                the function compares corresponding nodes until one of the trees is exhausted
 * Space Complexity: O(min(h, l)), where h is the height of root1 and l is the height of root2
 */
function isEqual(root1: BT, root2: BT): boolean {
  if (root1 === null && root2 === null) {
    return true;
  } else if (root1 === null || root2 === null) {
    return false;
  } else {
    return (
      root1.val === root2.val &&
      isEqual(root1.left, root2.left) &&
      isEqual(root1.right, root2.right)
    );
  }
}
