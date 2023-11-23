// Source : https://leetcode.com/problems/sum-of-left-leaves/
// Author : Francisco Tomas
// Date   : 2023-11-23

/*****************************************************************************************************
 *
 * Given the root of a binary tree, return the sum of all left leaves.
 *
 * A leaf is a node with no children. A left leaf is a leaf that is the left child of another node.
 *
 * Example 1:
 *
 * Input: root = [3,9,20,null,null,15,7]
 * Output: 24
 * Explanation: There are two left leaves in the binary tree, with values 9 and 15 respectively.
 *
 * Example 2:
 *
 * Input: root = [1]
 * Output: 0
 *
 * Constraints:
 *
 * 	The number of nodes in the tree is in the range [1, 1000].
 * 	-1000 <= Node.val <= 1000
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
 * given the root of a binary tree, root, return the sum of all left leaves
 * NOTES: A leaf is a node with no children.
 *        A left leaf is a leaf that is the left child of another node.

 * Stub:
 function sumOfLeftLeaves(root: BT): number {return 0}

 * Tests:
 * I: root = [3,9,20,null,null,15,7] -> O: 24
   Explanation: There are two left leaves in the binary tree, with values 9 and 15 respectively.]
 * I: root =[1] -> O: 0

 * Template:
 function sumOfLeftLeaves(root: BT): number {
     if (root === null) {return (...)}
     else {
         return (... root.val
                     (sumOfLeftLeaves(root.left))
                     (sumOfLeftLeaves(root.right)))
     }
 }

 * Constraints:
 * - The number of nodes in the tree is in the range [1, 1000].
 * - -1000 <= Node.val <= 1000
 */

/**
 * Method 1:
 * Time Complexity: O(n), where n is the number of nodes in the given binary tree, root. It is a standart DFS traversal technique where each node is visited once (preorder).
 * Space Complexity: O(h), where h is the height of the given binary tree, root. h = logn in case of a complete binary tree and h = n in case of a skewed tree.

 * Runtime: 59ms (72.18%)
 * Memory: 45.31MB (31.58%)
 */
export function sumOfLeftLeavesV1(root: BT): number {
  const stack: BT[] = [];
  let current: BT = root;
  let left: boolean = false;
  let ans: number = 0;
  while (current !== null || stack.length > 0) {
    if (current !== null) {
      if (current.left === null && current.right === null && left) {
        ans += current.val;
      }
      stack.push(current);
      left = true;
      current = current.left;
    } else {
      left = false;
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      current = stack.pop()!.right;
    }
  }
  return ans;
}

/**
 * Method 2:
 * Time Complexity: O(n)
 * Space Complexity: O(h)

 * Runtime: 51ms (93.98%)
 * Memory: 45.03MB (62.41%)
 */
export function sumOfLeftLeaves(root: BT): number {
  if (root === null) {
    return 0;
  }
  let ans: number = 0;
  if (
    root.left !== null &&
    root.left.left === null &&
    root.left.right === null
  ) {
    ans += root.left.val;
  }

  ans += sumOfLeftLeaves(root.left);
  ans += sumOfLeftLeaves(root.right);
  return ans;
}
