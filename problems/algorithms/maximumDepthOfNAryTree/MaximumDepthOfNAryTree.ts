// Source : https://leetcode.com/problems/maximum-depth-of-n-ary-tree/
// Author : Francisco Tomas
// Date   : 2023-11-27

/*****************************************************************************************************
 *
 * Given a n-ary tree, find its maximum depth.
 *
 * The maximum depth is the number of nodes along the longest path from the root node down to the
 * farthest leaf node.
 *
 * Nary-Tree input serialization is represented in their level order traversal, each group of children
 * is separated by the null value (See examples).
 *
 * Example 1:
 *
 * Input: root = [1,null,3,2,4,null,5,6]
 * Output: 3
 *
 * Example 2:
 *
 * Input: root =
 * [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
 * Output: 5
 *
 * Constraints:
 *
 * 	The total number of nodes is in the range [0, 10^4].
 * 	The depth of the n-ary tree is less than or equal to 1000.
 ******************************************************************************************************/

type Tree = NodeTree | null;

export class NodeTree {
  val: number;
  children: NodeTree[];
  constructor(val?: number, children?: NodeTree[]) {
    this.val = val ?? 0;
    this.children = children ?? [];
  }
}

/**
 * Tree -> number
 * given a n-ary tree, root, find its maximum depth
 * NOTES: The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
 *        Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value

 * Stub:
 function maxDepth(root: Tree): number {return 0}

 * Tests:
 * I: root = [1,null,3,2,4,null,5,6] -> O: 3
 * I: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14] -> O: 5

 * Constraints:
 * - The total number of nodes is in the range [0, 10^4].
 * - The depth of the n-ary tree is less than or equal to 1000.
 */

/**
 * Time Complexity: O(n), where n is the given tree's, root, number of nodes
 * Space Complexity: O(h), where h is the given tree's, root, height (maximum depth of the recursion stack)

 * Runtime: 75ms (45.45%)
 * Memory: 45.33MB (92.21%)
 */
export function maxDepthV1(root: Tree): number {
  function maxDepthNode(node: NodeTree): number {
    return maxDepthListOfNodes(node.children) + 1;
  }

  function maxDepthListOfNodes(lon: NodeTree[]): number {
    if (lon.length === 0) {
      return 0;
    } else {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return Math.max(maxDepthNode(lon.shift()!), maxDepthListOfNodes(lon));
    }
  }

  return root !== null ? maxDepthNode(root) : 0;
}

/**
 * Time Complexity: O(n), where n is the given tree's, root, number of nodes
 * Space Complexity: O(h), where h is the given tree's, root, height (maximum depth of the recursion stack)

 * Runtime: 59ms (94.81%)
 * Memory: 45.82MB (77.92%)
 */
export function maxDepth(root: Tree): number {
  if (root === null) {
    return 0;
  } else {
    let depth: number = 1;
    for (let i: number = 0; i < root.children.length; i++) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const curr: number = maxDepth(root.children[i]!) + 1;
      depth = Math.max(depth, curr);
    }
    return depth;
  }
}
