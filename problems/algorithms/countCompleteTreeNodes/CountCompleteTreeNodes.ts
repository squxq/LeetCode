// Source : https://leetcode.com/problems/count-complete-tree-nodes/
// Author : Francisco Tomas
// Date   : 2023-11-22

/*****************************************************************************************************
 *
 * Given the root of a complete binary tree, return the number of the nodes in the tree.
 *
 * According to Wikipedia, every level, except possibly the last, is completely filled in a complete
 * binary tree, and all nodes in the last level are as far left as possible. It can have between 1 and
 * 2^h nodes inclusive at the last level h.
 *
 * Design an algorithm that runs in less than O(n) time complexity.
 *
 * Example 1:
 *
 * Input: root = [1,2,3,4,5,6]
 * Output: 6
 *
 * Example 2:
 *
 * Input: root = []
 * Output: 0
 *
 * Example 3:
 *
 * Input: root = [1]
 * Output: 1
 *
 * Constraints:
 *
 * 	The number of nodes in the tree is in the range [0, 5 * 10^4].
 * 	0 <= Node.val <= 5 * 10^4
 * 	The tree is guaranteed to be complete.
 ******************************************************************************************************/

/* eslint-disable @typescript-eslint/no-non-null-assertion */
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
 * given the root of a complete binary tree, root, return the number of the nodes in the tree (its size)
 * NOTES: - every level, expect possibly the last, is completely filled in a complete binary tree
 *        - all nodes in the last level are as far left as possible
 *        - it can have between 1 and 2^h nodes inclusive at the last level h

 * Stub:
 function countNodes(root: BT): number {return 0}

 * Tests:
 * I: root = [1,2,3,4,5,6] -> O: 6
 * I: root = [] -> O: 0
 * I: root = [1] -> O: 1

 * Template:
 function countNodes(root: BT): number {
     if (root === null) {return (...)}
     else {
         return (... root.val
                    (countNodes(root.left))
                    (countNodes(root.right)))
     }
 }

 * CONSTRAINTS:
 * - The number of nodes in the tree is in the range [0, 5 * 10^4].
 * - 0 <= Node.val <= 5 * 10^4
 * - The tree is guaranteed to be complete.
 */

/**
 * Time Complexity: O(N) as in preorder traversal all the nodes are visited.
 * Auxiliary Space: O(h) = O(log N) as height of complete BT is LogN.
 */
export function countNodesV1(root: BT): number {
  const stack: BT[] = [];
  let count: number = 0;
  let current: BT = root;
  while (stack.length > 0 || current !== null) {
    if (current !== null) {
      count++;
      stack.push(current);
      current = current.left;
    } else {
      current = stack.pop()!.right;
    }
  }
  return count;
}

function height(node: BT, children: "left" | "right"): number {
  let answer: number = 0;
  while (node !== null) {
    answer++;
    node = node[children];
  }
  return answer;
}

export function countNodes(root: BT): number {
  const leftHeight: number = height(root, "left");
  if (leftHeight === height(root, "right")) {
    return 2 ** leftHeight - 1;
  }
  return 1 + countNodes(root!.left) + countNodes(root!.right);
}
