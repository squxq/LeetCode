// Source : https://leetcode.com/problems/construct-string-from-binary-tree/
// Author : francisco
// Date   : 2023-12-08

/*****************************************************************************************************
 *
 * Given the root of a binary tree, construct a string consisting of parenthesis and integers from a
 * binary tree with the preorder traversal way, and return it.
 *
 * Omit all the empty parenthesis pairs that do not affect the one-to-one mapping relationship between
 * the string and the original binary tree.
 *
 * Example 1:
 *
 * Input: root = [1,2,3,4]
 * Output: "1(2(4))(3)"
 * Explanation: Originally, it needs to be "1(2(4)())(3()())", but you need to omit all the
 * unnecessary empty parenthesis pairs. And it will be "1(2(4))(3)"
 *
 * Example 2:
 *
 * Input: root = [1,2,3,null,4]
 * Output: "1(2()(4))(3)"
 * Explanation: Almost the same as the first example, except we cannot omit the first parenthesis pair
 * to break the one-to-one mapping relationship between the input and the output.
 *
 * Constraints:
 *
 * 	The number of nodes in the tree is in the range [1, 10^4].
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
 * BT -> string
 * given the root of a BT, root, construct a string consisting of parenthesis and integers and return it

 * Stub:
 function tree2str(root: BT): string {return ""}

 * Tests:
 * I: root = [1,2,3,4] -> O: "1(2(4))(3)"
 * I: root = [1,2,3,null,4] -> O: "1(2()(4))(3)"
 */

/**
 * Time Complexity: O(n), where n is the number of nodes in root
 * Space Complexity: O(h), where h is the root's height

 * Runtime: 61ms (94.59%)
 * Memory: 48.32MB (56.76%)
 */
export function tree2str(root: BT): string {
  if (root === null) {
    return "";
  } else if (root.right !== null) {
    return `${root.val}(${tree2str(root.left)})(${tree2str(root.right)})`;
  } else if (root.left !== null) {
    return `${root.val}(${tree2str(root.left)})`;
  } else {
    return String(root.val);
  }
}
