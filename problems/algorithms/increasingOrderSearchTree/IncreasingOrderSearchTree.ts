// Source : https://leetcode.com/problems/increasing-order-search-tree/
// Author : squxq
// Date   : 2023-11-06

/*****************************************************************************************************
 *
 * Given the root of a binary search tree, rearrange the tree in in-order so that the leftmost node in
 * the tree is now the root of the tree, and every node has no left child and only one right child.
 *
 * Example 1:
 *
 * Input: root = [5,3,6,2,4,null,8,1,null,null,null,7,9]
 * Output: [1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]
 *
 * Example 2:
 *
 * Input: root = [5,1,7]
 * Output: [1,null,5,null,7]
 *
 * Constraints:
 *
 * 	The number of nodes in the given tree will be in the range [1, 100].
 * 	0 <= Node.val <= 1000
 ******************************************************************************************************/

/**
 * Binary Search Tree (BST) is one of:
 * - null
 * - NodeTree
 * interp. null means no BST, or empty BST; NodeTree is the BST's root
 */
type BST = NodeTree | null;

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
 * fn-for-bst(root: BST) {
     if (root === null) {return (...)}
     else {
         return (...
                (root.val)
                (fn-for-bst (root.left))
                (fn-for-bst (root.right)))
     }
 }
 */

/**
 * BST -> BST
 * given the root of a BST, rearrange and return the tree in in-order so that the leftmost node
 * in the tree is now the root of the tree, and every node has no left child

 * Stub:
 * function increasingBST(root: BST): BST {return null}

 * Tests:
 * I: root = [5,3,6,2,4,null,8,1,null,null,null,7,9] -> O: [1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]
 * I: root = [5,1,7] -> O: [1,null,5,null,7]

 * Template: <used template from BST>
 */
export function increasingBST(root: BST): BST {
  const dummyRoot: BST = new NodeTree(-1);
  let current: BST = dummyRoot;

  function inOrderTraversal(node: BST): void {
    if (node !== null) {
      inOrderTraversal(node.left);

      node.left = null;
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      current!.right = node;
      current = node;

      inOrderTraversal(node.right);
    }
  }
  inOrderTraversal(root);

  return dummyRoot.right;
}
