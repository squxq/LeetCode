// Source : https://leetcode.com/problems/binary-tree-inorder-traversal/
// Author : squxq
// Date   : 2023-11-06

/*****************************************************************************************************
 *
 * Given the root of a binary tree, return the inorder traversal of its nodes' values.
 *
 * Example 1:
 *
 * Input: root = [1,null,2,3]
 * Output: [1,3,2]
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

/**
 * Binary Tree (BT) is one of:
 * - null
 * - NodeTree
 * interp. null means no BT, or empty BT
 *         NodeTree is the BT's root
 */
export type BT = NodeTree | null;

/**
 * NodeTree is new NodeTree(number, BT, BT)
 * interp. new NodeTree(val, left, right) is a BT's node with:
 * - val, is the node's key
 * - left, is the node's left subtree
 * - right, is the node's right subtree
 * INVARIANT:
 * - each node can have at most two children

 * Examples:
 * const BT0: BT = null
 * const BT1: BT = new NodeTree(3, null, null)
 * const BT2: BT = new NodeTree(2, BT1, null)
 * const BT3: BT = new NodeTree(1, null, BT2)

 * Template:
 function fn-for-BT(root: BT) {
     if (root === null) {return (...)}
     else {
         return (... (root.val)
                (fn-for-BT(root.left))
                (fn-for-BT(root.right)))
     }
 }
 */
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
 * BT -> number[]
 * given the root of a Binary Tree, root, return the inorder traversal of its nodes's values
 
 * Stub:
 function inorderTraversal(root: BT): number[] {return []}

 * Tests:
 * I: root = [1,null,2,3] -> O: [1,3,2]
 * I: root = [] -> O: []
 * I: root = [1] -> O: [1]

 * Template: <used template from BT>

 * CONSTRAINTS:
 * - The number of nodes in the tree is in the range [0, 100].
 * - -100 <= Node.val <= 100
 */

/**
 * RECURSIVE SOLUTION 1:
 function inorderTraversal(root: BT): number[] {
     if (root === null) {return []}
     else {
         return [...inorderTraversal(root.left), root.val, 
                 ...inorderTraversal(root.right)]
     }
 };
 */

/**
 * RECURSIVE SOLUTION 2:
 function inorderTraversal(root: BT, result: number[] = []): number[] {
     if (root === null) {return result}
     else {
         result = inorderTraversal(root.left, result)
         result.push(root.val)
         result = inorderTraversal(root.right, result)
         return result
     }
 }
 */

export function inorderTraversal(root: BT): number[] {
  const ans: number[] = [];
  const stack: BT[] = [];
  let current: BT = root;
  while (current !== null || stack.length > 0) {
    while (current !== null) {
      stack.push(current);
      current = current.left;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    current = stack.pop()!;
    ans.push(current.val);
    current = current.right;
  }
  return ans;
}
