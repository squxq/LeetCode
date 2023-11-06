// Source : https://leetcode.com/problems/insert-into-a-binary-search-tree/
// Author : squxq
// Date   : 2023-11-06

/*****************************************************************************************************
 *
 * You are given the root node of a binary search tree (BST) and a value to insert into the tree.
 * Return the root node of the BST after the insertion. It is guaranteed that the new value does not
 * exist in the original BST.
 *
 * Notice that there may exist multiple valid ways for the insertion, as long as the tree remains a
 * BST after insertion. You can return any of them.
 *
 * Example 1:
 *
 * Input: root = [4,2,7,1,3], val = 5
 * Output: [4,2,7,1,3,5]
 * Explanation: Another accepted tree is:
 *
 * Example 2:
 *
 * Input: root = [40,20,60,10,30,50,70], val = 25
 * Output: [40,20,60,10,30,50,70,null,null,25]
 *
 * Example 3:
 *
 * Input: root = [4,2,7,1,3,null,null,null,null,null,null], val = 5
 * Output: [4,2,7,1,3,5]
 *
 * Constraints:
 *
 * 	The number of nodes in the tree will be in the range [0, 10^4].
 * 	-10^8 <= Node.val <= 10^8
 * 	All the values Node.val are unique.
 * 	-10^8 <= val <= 10^8
 * 	It's guaranteed that val does not exist in the original BST.
 ******************************************************************************************************/

/**
 * Binary Search Tree (BST) is one of:
 * - null
 * - NodeTree
 * interp. null means no BST, or empty BST
 *         NodeTree is the BST's root
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

 * Examples:
 * const bst0: BST = null
 * const bst1: BST = new NodeTree(1, null, null)
 * const bst2: BST = new NodeTree(3, null, null)
 * const bst3: BST = new NodeTree(2, bst1, bst2)
 * const bst4: BST = new NodeTree(7, null, null)
 * const bst5: BST = new NodeTree(4, bst3, bst4)

 * Template:
 function fn-for-bst(root: BST) {
     if (root === null) {return (...)}
     else {
         return (...
                (root.val)
                (fn-for-bst(root.left))
                (fn-for-bst(root.right)))
     }
 }
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
 * BST number -> BST
 * given the root node of a BST, root, and a value to insert into the tree, val
 * return rooot after the insertion
 * ASSUME: the new value does not exist in the original BST
 * NOTE: there exist multiple valid ways for the insertion, return any of them

 * Stub:
 function insertIntoBST(root: BST, val: number): BST {return null}

 * Tests:
 * I: root = [4,2,7,1,3], val = 5 -> O: [4,2,7,1,3,5]
 * I: root = [40,20,60,10,30,50,70], val = 25 -> O: [40,20,60,10,30,50,70,null,null,25]
 * I: root = [4,2,7,1,3,null,null,null,null,null,null], val = 5 -> O: [4,2,7,1,3,5]

 * Template:
 function insertIntoBST(root: BST, val: number): BST {
     if (root === null) {return (... (val))}
     else {
         return (... (val)
                (root.val)
                (insertIntoBST(root.left) (... (val)))
                (insertIntoBST(root.right) (... (val))))
     }
 }

 * CONSTRAINTS:
 * - The number of nodes in the tree will be in the range [0, 10^4].
 * - -10^8 <= Node.val <= 10^8
 * - All the values Node.val are unique.
 * - -10^8 <= val <= 10^8
 * - It's guaranteed that val does not exist in the original BST.
 */
export function insertIntoBST(root: BST, val: number): BST {
  if (root === null) {
    return new NodeTree(val, null, null);
  } else {
    if (val < root.val) {
      root.left = insertIntoBST(root.left, val);
    } else {
      root.right = insertIntoBST(root.right, val);
    }
    return root;
  }
}
