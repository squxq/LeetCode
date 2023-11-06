// Source : https://leetcode.com/problems/balance-a-binary-search-tree/
// Author : squxq
// Date   : 2023-11-06

/*****************************************************************************************************
 *
 * Given the root of a binary search tree, return a balanced binary search tree with the same node
 * values. If there is more than one answer, return any of them.
 *
 * A binary search tree is balanced if the depth of the two subtrees of every node never differs by
 * more than 1.
 *
 * Example 1:
 *
 * Input: root = [1,null,2,null,3,null,4,null,null]
 * Output: [2,1,3,null,null,null,4]
 * Explanation: This is not the only correct answer, [3,1,4,null,2] is also correct.
 *
 * Example 2:
 *
 * Input: root = [2,1,3]
 * Output: [2,1,3]
 *
 * Constraints:
 *
 * 	The number of nodes in the tree is in the range [1, 10^4].
 * 	1 <= Node.val <= 10^5
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
 * BST -> BST
 * given the root of a BST, root, return a balanced BST with the same node values
 * NOTE: a BST is balanced if the depth of the two subtrees of every node never differs by more than 1
 * ASSUME: if there's more than one answer return any of them

 * Stub:
 * function balanceBST(root: BST): BST {return null}

 * Tests:
 * I: root = [1,null,2,null,3,null,4,null,null] -> O: [2,1,3,null,null,null,4]
 * EXPLANATION: This is not the only correct answer, [3,1,4,null,2] is also correct.
 * I: root = [2,1,3] -> O: root = [2,1,3]

 * Template: <used template from BST>

 * CONSTRAINTS:
 * - The number of nodes in the tree is in the range [1, 10^4].
 * - 1 <= Node.val <= 10^5
 */
export function balanceBST(root: BST): BST {
  return arrayToBST(inOrderTraversal(root));
}

/**
 * BST -> number[]
 * given the root of a BST, root, return an array with all the keys from root
 * NOTE: the array would be sorted as in-order traversal always produces a sorted sequence

 * Stub:
 * function inOrderTraversal(root: BST): number[] {return []}

 * Template: <used template from BST>
 */
export function inOrderTraversal(root: BST): number[] {
  const result = [];
  const stack = [];
  let current = root;

  while (current !== null || stack.length > 0) {
    while (current !== null) {
      stack.push(current);
      current = current.left;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    current = stack.pop()!;
    result.push(current.val);
    current = current.right;
  }

  return result;
}

/**
 * number[] -> BST
 * produce a BST with all the keys in the given array, keys
 * ASSUME: the given array is sorted (a - b)

 * Stub:
 * function arrayToBST(keys: number[]): BST {return null}

 * Template: <used template from BST>
 */
function arrayToBST(keys: number[]): BST {
  if (keys.length === 0) {
    return null;
  } else {
    const middleIndex: number = Math.floor(keys.length / 2);
    return new NodeTree(
      keys[middleIndex],
      arrayToBST(keys.slice(0, middleIndex)),
      arrayToBST(keys.slice(middleIndex + 1)),
    );
  }
}
