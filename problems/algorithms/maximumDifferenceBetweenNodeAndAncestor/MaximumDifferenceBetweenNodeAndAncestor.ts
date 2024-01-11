// Source : https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/
// Author : francisco
// Date   : 2024-01-11

/*****************************************************************************************************
 *
 * Given the root of a binary tree, find the maximum value v for which there exist different nodes a
 * and b where v = |a.val - b.val| and a is an ancestor of b.
 *
 * A node a is an ancestor of b if either: any child of a is equal to b or any child of a is an
 * ancestor of b.
 *
 * Example 1:
 *
 * Input: root = [8,3,10,1,6,null,14,null,null,4,7,13]
 * Output: 7
 * Explanation: We have various ancestor-node differences, some of which are given below :
 * |8 - 3| = 5
 * |3 - 7| = 4
 * |8 - 1| = 7
 * |10 - 13| = 3
 * Among all possible differences, the maximum value of 7 is obtained by |8 - 1| = 7.
 *
 * Example 2:
 *
 * Input: root = [1,null,2,null,0,3]
 * Output: 3
 *
 * Constraints:
 *
 * 	The number of nodes in the tree is in the range [2, 5000].
 * 	0 <= Node.val <= 10^5
 ******************************************************************************************************/

export type BT = TreeNode | null;

export class TreeNode {
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
 * @param {BT} root
 * @returns {number}
 * return the maximum value v for which, different nodes a and b, v = |a.val - b.val| and a is an ancestor of b
 * NOTE: a is an ancestor of b if either: any child of a is equal to b or any child of a is ancestor of b

 * Tests:
 * I: root = [8,3,10,1,6,null,14,null,null,4,7,13] -> O: 7
 * I: root = [1,null,2,null,0,3] -> O: 3
 * I: root = [3,1,6,null,null,4,7] -> O: 4

 * Template: dfs - node && max and min values

 * Time Complexity: O(n), where n is the number of nodes in root
 * Space Complexity: O(n)

 * Runtime: 48ms (100.00%)
 */
export function maxAncestorDiff(root: BT): number {
  function dfs(node: BT, max: number, min: number): number {
    if (node === null) return max - min;

    const newMax: number = Math.max(max, node.val);
    const newMin: number = Math.min(min, node.val);

    return Math.max(
      dfs(node.left, newMax, newMin),
      dfs(node.right, newMax, newMin),
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return dfs(root, root!.val, root!.val); // number of nodes in the tree is in the range [2, 5000]
}
