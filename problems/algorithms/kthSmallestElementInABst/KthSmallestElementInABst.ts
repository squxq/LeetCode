// Source : https://leetcode.com/problems/kth-smallest-element-in-a-bst/
// Author : squxq
// Date   : 2023-11-06

/*****************************************************************************************************
 *
 * Given the root of a binary search tree, and an integer k, return the k^th smallest value
 * (1-indexed) of all the values of the nodes in the tree.
 *
 * Example 1:
 *
 * Input: root = [3,1,4,null,2], k = 1
 * Output: 1
 *
 * Example 2:
 *
 * Input: root = [5,3,6,2,4,null,null,1], k = 3
 * Output: 3
 *
 * Constraints:
 *
 * 	The number of nodes in the tree is n.
 * 	1 <= k <= n <= 10^4
 * 	0 <= Node.val <= 10^4
 *
 * Follow up: If the BST is modified often (i.e., we can do insert and delete operations) and you need
 * to find the kth smallest frequently, how would you optimize?
 ******************************************************************************************************/

/**
 * Binary Search Tree (BST) is one of:
 * - null
 * - NodeTree
 * interp. null means no BST, or empty BST; NodeTree is the BST's root
 */
export type BST = NodeTree | null;

/**
 * NodeTree is new NodeTree(number, BST, BST)
 * interp. new NodeTree(val, left, right) is a BST's node with:
 * - val, is the node's key
 * - left, is the node's left subtree
 * - right, is the node's right subtree
 * INVARIANT (for a given node):
 * - val is greater (>) than all the keys (val) in its left child (left)
 * - val is smaller (<) than all the keys (val) in its right child (right)
 * - the same key (val) never appears twice in the tree
 */
export class NodeTree {
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
 * Template:
 function fn-for-bst(root: BST) {
     if (bst === null) {return (...)}
     else {
         return (...
                (bst.val)
                (fn-for-bst(bst.left))
                (fn-for-bst(bst.right)))
     }
 }
 */

/**
 * BST number -> number
 * given the root of a binary search tree, root, and an integer, k
 * return the kth smallest value (1-indexed) of all the values of the nodes in the tree

 * Stub:
 function kthSmallest(root: BST, k: number): number {return 0}

 * Tests:
 * I: root = [3,1,4,null,2], k = 1 -> O: 1
 * I: root = [5,3,6,2,4,null,null,1], k = 3 -> 3

 * Template:
 function kthSmallesr(root: BST, k: number): number {
     if (root === null) {return (... (k))}
     else {
         return (... (k)
                (bst.val)
                (fn-for-bst(bst.left))
                (fn-for-bst(bst.right)))
     }
 }

 * CONSTRAINTS:
 * - The number of nodes in the tree is n.
 * - 1 <= k <= n <= 10^4
 * - 0 <= Node.val <= 10^4
 */
// function kthSmallest(root: BST, k: number): number {
//     let ans: number = NaN
//     function inOrderTraversal(node: BST): void {
//         if (node) {
//             inOrderTraversal(node.left)
//             if (k-- === 1) {
//                 ans = node.val
//                 return
//             }
//             inOrderTraversal(node.right)
//         }
//     }
//     inOrderTraversal(root)
//     return ans
// };

export function kthSmallest(root: BST, k: number): number {
  const stack: BST[] = [];

  while (root !== null || stack.length > 0) {
    while (root !== null) {
      stack.push(root);
      root = root.left;
    }

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    root = stack.pop()!;
    k--;
    if (k === 0) {
      return root.val;
    }

    root = root.right;
  }

  return NaN;
}
