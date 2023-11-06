// Source : https://leetcode.com/problems/all-elements-in-two-binary-search-trees/
// Author : squxq
// Date   : 2023-11-06

/*****************************************************************************************************
 *
 * Given two binary search trees root1 and root2, return a list containing all the integers from both
 * trees sorted in ascending order.
 *
 * Example 1:
 *
 * Input: root1 = [2,1,4], root2 = [1,0,3]
 * Output: [0,1,1,2,3,4]
 *
 * Example 2:
 *
 * Input: root1 = [1,null,8], root2 = [8,1]
 * Output: [1,1,8,8]
 *
 * Constraints:
 *
 * 	The number of nodes in each tree is in the range [0, 5000].
 * 	-10^5 <= Node.val <= 10^5
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
 * function fn-for-bst(root: BST) {
     if (root === null) {return (...)}
     else {
         return (...
                (bst.val)
                (fn-for-bst(bst.left))
                (fn-for-bst(bst.right)))
     }
 }
 */

/**
 * BST BTS -> number[]
 * given two binary search trees, root1 and root2, return a list containing all the integers from both trees
 * sorted in ascending order

 * Stub:
 * function getAllElements(root1: BST, root2: BST): number[] {return []}

 * Tests:
 * I: root1 = [2,1,4], root2 = [1,0,3] -> O: [0,1,1,2,3,4]
 * I: root1 = [1,null,8], root2 = [8,1] -> O: [1,1,8,8]

 * Template: <used template from BST>

 * CONSTRAINTS:
 * - The number of nodes in each tree is in the range [0, 5000].
 * - -10^5 <= Node.val <= 10^5
 */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
export function getAllElements(root1: BST, root2: BST): number[] {
  const result: number[] = [];
  const stack1: BST[] = [];
  const stack2: BST[] = [];

  let current1: BST = root1;
  while (current1 !== null) {
    stack1.push(current1);
    current1 = current1.left;
  }
  let current2: BST = root2;
  while (current2 !== null) {
    stack2.push(current2);
    current2 = current2.left;
  }

  while (stack1.length > 0 || stack2.length > 0) {
    let currentNode1: BST = stack1.pop()!;
    let currentNode2: BST = stack2.pop()!;

    if (currentNode1 !== null && currentNode2 !== null) {
      if (currentNode1.val < currentNode2.val) {
        result.push(currentNode1.val);
        currentNode1 = currentNode1.right;
        while (currentNode1 !== null) {
          stack1.push(currentNode1);
          currentNode1 = currentNode1.left;
        }
        stack2.push(currentNode2);
      } else {
        result.push(currentNode2.val);
        currentNode2 = currentNode2.right;
        while (currentNode2 !== null) {
          stack2.push(currentNode2);
          currentNode2 = currentNode2.left;
        }
        stack1.push(currentNode1);
      }
    } else if (currentNode1 !== null) {
      result.push(currentNode1.val);
      currentNode1 = currentNode1.right;
      while (currentNode1 !== null) {
        stack1.push(currentNode1);
        currentNode1 = currentNode1.left;
      }
    } else {
      result.push(currentNode2.val);
      currentNode2 = currentNode2.right;
      while (currentNode2 !== null) {
        stack2.push(currentNode2);
        currentNode2 = currentNode2.left;
      }
    }
  }

  return result;
}

/**
 * PART OF SOLUTION 1 
 * BST -> number[]
 * given a binary search tree, root, return a list containing all its keys in ascending order

 * Stub:
 * function bstToArray(root: BST): number[] {return []}

 * Template: <used template from BST>
 */
export function bstToArray(root: BST): number[] {
  const result: number[] = [];
  function inOrderTraversal(node: BST): void {
    if (node !== null) {
      inOrderTraversal(node.left);
      result.push(node.val);
      inOrderTraversal(node.right);
    }
  }
  inOrderTraversal(root);
  return result;
}
