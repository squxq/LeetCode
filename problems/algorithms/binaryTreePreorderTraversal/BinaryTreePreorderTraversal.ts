// Source : https://leetcode.com/problems/binary-tree-preorder-traversal/
// Author : squxq
// Date   : 2023-11-13

/*****************************************************************************************************
 *
 * Given the root of a binary tree, return the preorder traversal of its nodes' values.
 *
 * Example 1:
 *
 * Input: root = [1,null,2,3]
 * Output: [1,2,3]
 *
 * Example 2:
 *
 * Input: root = []
 * Output: []
 *
 * Example 3:
 *
 * Input: root = [1]
 * Output: [1]
 *
 * Constraints:
 *
 * 	The number of nodes in the tree is in the range [0, 100].
 * 	-100 <= Node.val <= 100
 *
 * Follow up: Recursive solution is trivial, could you do it iteratively?
 ******************************************************************************************************/

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
 * BT -> number[]
 * given the root of a binary tree, root, return the pre-order traversal of its node's values

 * Stub:
 function preorderTraversal(root: BT): number[] {return []}

 * Tests:
 * I: root = [1,null,2,3] -> O: [1,2,3]
 * I: root = [] -> O: []
 * I: root = [1] -> O: [1]

 * Template:
 function preorderTraversal(root: BT): number[] {
     if (root === null) {return (...)}
     else {
         return (... (root.val)
                (preorderTraversal(root.left))
                (preorderTraversal(root.right)))
     }
 }

 * CONSTRAINTS:
 * - The number of nodes in the tree is in the range [0, 100].
 * - -100 <= Node.val <= 100
 */

/**
 * RECURSIVE SOLUTION 1
 function preorderTraversal(root: BT): number[] {
     const ans: number[] = []
     function traversal(node: BT): void {
         if (node !== null) {
             ans.push(node.val)
             traversal(node.left)
             traversal(node.right)
         }
     }
     traversal(root)
     return ans
 };
 */

/**
 * RECURSIVE SOLUTION 2
 function preorderTraversal(root: BT): number[] {
     if (root === null) {return []}
     return [root.val, ...preorderTraversal(root.left),
                       ...preorderTraversal(root.right)]
 }
 */

/**
 * RECURSIVE SOLUTION 3
 function preorderTraversal(root: BT, ans: number[] = []): number [] {
     if (root === null) {return ans}
     else {
         ans.push(root.val)
         ans = preorderTraversal(root.left, ans)
         ans = preorderTraversal(root.right, ans)
         return ans
     }
 }
 */

export function preorderTraversal(root: BT): number[] {
  const ans: number[] = [];
  const stack: BT[] = [];
  let current: BT = root;
  while (stack.length > 0 || current !== null) {
    if (current !== null) {
      ans.push(current.val);
      stack.push(current);
      current = current.left;
    } else {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      current = stack.pop()!.right;
    }
  }
  return ans;
}
