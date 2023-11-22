// Source : https://leetcode.com/problems/binary-tree-paths/
// Author : Francisco Tomas
// Date   : 2023-11-22

/*****************************************************************************************************
 *
 * Given the root of a binary tree, return all root-to-leaf paths in any order.
 *
 * A leaf is a node with no children.
 *
 * Example 1:
 *
 * Input: root = [1,2,3,null,5]
 * Output: ["1->2->5","1->3"]
 *
 * Example 2:
 *
 * Input: root = [1]
 * Output: ["1"]
 *
 * Constraints:
 *
 * 	The number of nodes in the tree is in the range [1, 100].
 * 	-100 <= Node.val <= 100
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
 * BT -> string[]
 * given the root of a binary tree, root, return all root-to-leaf paths in any order.
 * NOTE: A leaf is a node with no children

 * Stub:
 function binaryTreePaths(root: BT): string[] {return []}

 * Tests:
 * I: root = [1,2,3,null,5] -> O: ["1->2->5","1->3"]
 * I: root = [1] -> O: ["1"]
 * I: root = [37,-34,-48,null,-100,-100,48,null,null,null,null,-54,null,-71,-22,null,null,null,8] -> O: ["37->-34->-100","37->-48->-100","37->-48->48->-54->-71","37->-48->48->-54->-22->8"]
 
 * Template:
 function binaryTreePaths(root: BT): string[] {
     if (root === null) {return []}
     else {
         return (... root.val
                     (binaryTreePaths(root.left))
                     (binaryTreePaths(root.right)))
     }
 }

 * CONSTRAINTS:
 * - The number of nodes in the tree is in the range [1, 100].
 * - -100 <= Node.val <= 100
 */
export function binaryTreePaths(root: BT): string[] {
  const paths: string[] = [];
  const path: string[] = [];

  function preorder(node: BT): void {
    if (node !== null) {
      path.push(node.val.toString());
      if (node.left === null && node.right === null) {
        paths.push(path.join("->"));
      } else {
        preorder(node.left);
        preorder(node.right);
      }
      path.pop();
    }
  }
  preorder(root);

  return paths;
}
