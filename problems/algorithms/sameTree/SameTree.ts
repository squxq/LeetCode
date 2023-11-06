// Source : https://leetcode.com/problems/same-tree/
// Author : squxq
// Date   : 2023-11-06

/*****************************************************************************************************
 *
 * Given the roots of two binary trees p and q, write a function to check if they are the same or not.
 *
 * Two binary trees are considered the same if they are structurally identical, and the nodes have the
 * same value.
 *
 * Example 1:
 *
 * Input: p = [1,2,3], q = [1,2,3]
 * Output: true
 *
 * Example 2:
 *
 * Input: p = [1,2], q = [1,null,2]
 * Output: false
 *
 * Example 3:
 *
 * Input: p = [1,2,1], q = [1,1,2]
 * Output: false
 *
 * Constraints:
 *
 * 	The number of nodes in both trees is in the range [0, 100].
 * 	-10^4 <= Node.val <= 10^4
 ******************************************************************************************************/

/**
 * Binary Tree (BT) is one of:
 * - null
 * - NodeTree
 * interp. null means no BT, or empty BT
 *         NodeTree is the BT's root
 */
export type BT = NodeTree | null;

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
 * BT BT -> boolean
 * given the roots of two binary trees, p and q, if they are equal return true else false
 * NOTE: two binary saerch trees are considered the sameif they are structurally identical, and the nodes have the same value

 * Stub:
 function isSameTree(p: BT, q:BT): boolean {return false}

 * Tests:
 * I: p = [1,2,3], q = [1,2,3] -> O: true
 * I: p = [1,2], q = [1,null,2] -> O: false
 * I: p = [1,2,1], q = [1,1,2] -> O: false

 * CONSTRAINTS:
 * - The number of nodes in both trees is in the range [0, 100].
 * - -10^4 <= Node.val <= 10^4
 */

/**
 * RECURSIVE SOLUTION 1:
 function isSameTree(p: BT, q: BT): boolean {
     if (p === null && q === null) {return true}
     else {
         if (p?.val === q?.val) {
             return isSameTree(p.left, q.left) 
                 && isSameTree(p.right, q.right)
         }
         else {return false}
     }
 };
 */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
export function isSameTree(p: BT, q: BT): boolean {
  const stackP: BT[] = [p];
  const stackQ: BT[] = [q];

  while (stackP.length > 0 && stackQ.length > 0) {
    const nodeP: BT = stackP.pop()!;
    const nodeQ: BT = stackQ.pop()!;
    if (nodeP === null && nodeQ === null) {
      continue;
    }
    if (nodeP === null || nodeQ === null || nodeP.val !== nodeQ.val) {
      return false;
    }
    stackP.push(nodeP.left, nodeP.right);
    stackQ.push(nodeQ.left, nodeQ.right);
  }

  return true;
}
