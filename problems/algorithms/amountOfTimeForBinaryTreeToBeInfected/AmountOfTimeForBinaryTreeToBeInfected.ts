// Source : https://leetcode.com/problems/amount-of-time-for-binary-tree-to-be-infected/
// Author : francisco
// Date   : 2024-01-10

/*****************************************************************************************************
 *
 * You are given the root of a binary tree with unique values, and an integer start. At minute 0, an
 * infection starts from the node with value start.
 *
 * Each minute, a node becomes infected if:
 *
 * 	The node is currently uninfected.
 * 	The node is adjacent to an infected node.
 *
 * Return the number of minutes needed for the entire tree to be infected.
 *
 * Example 1:
 *
 * Input: root = [1,5,3,null,4,10,6,9,2], start = 3
 * Output: 4
 * Explanation: The following nodes are infected during:
 * - Minute 0: Node 3
 * - Minute 1: Nodes 1, 10 and 6
 * - Minute 2: Node 5
 * - Minute 3: Node 4
 * - Minute 4: Nodes 9 and 2
 * It takes 4 minutes for the whole tree to be infected so we return 4.
 *
 * Example 2:
 *
 * Input: root = [1], start = 1
 * Output: 0
 * Explanation: At minute 0, the only node in the tree is infected so we return 0.
 *
 * Constraints:
 *
 * 	The number of nodes in the tree is in the range [1, 10^5].
 * 	1 <= Node.val <= 10^5
 * 	Each node has a unique value.
 * 	A node with a value of start exists in the tree.
 ******************************************************************************************************/

export type BT = NodeTree | null;

export class NodeTree {
  val: number;
  left: BT;
  right: BT;

  constructor(val: number, left: BT, right: BT) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

/**
 * @param {BT} root
 * @param {number} start
 * @returns {number}
 * return the number of minutes needed for the entire tree to be infected
 * TLE

 * Time Complexity: O(2n), where n is the number of nodes in root\
 * Space Complexity: O(n)
 */
export function amountOfTimeV1(root: BT, start: number): number {
  const graph = new Map<number, number[]>();
  treeToGraph(root, graph);

  let time: number = 0;
  const queue: number[] = [start];
  const visited: number[] = [start];

  while (queue.length > 0) {
    let currentLevel: number = queue.length;
    while (currentLevel > 0) {
      const current: number = queue.shift() as number;
      for (const child of graph.get(current) as number[]) {
        if (!visited.includes(child)) {
          visited.push(child);
          queue.push(child);
        }
      }
      currentLevel--;
    }
    time++;
  }

  return time - 1;
}

/**
 * @param {BT} node
 * @param {Map<number, number[]>} graph
 * @param {number} parent
 * @returns {void}
 * transform the given tree, node, in a graph

 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
function treeToGraph(
  node: BT,
  graph: Map<number, number[]>,
  parent: number = 0,
): void {
  if (node !== null) {
    const adjacentList: number[] = [];

    if (parent !== 0) adjacentList.push(parent);
    if (node.left !== null) adjacentList.push(node.left.val);
    if (node.right !== null) adjacentList.push(node.right.val);

    graph.set(node.val, adjacentList);

    treeToGraph(node.left, graph, node.val);
    treeToGraph(node.right, graph, node.val);
  }
}

/**
 * @param {BT} root
 * @param {number} start
 * @returns {number}
 * same purpose as amountOfTimeV1

 * Template: DFS + rsf acc

 * Time Complexity: O(n), where n is the number of nodes in root
 * Space Complexity: O(n)

 * Runtime: 161ms (100.00%)
 * Memory: 122.56MB (100.00%)
 */
export function amountOfTime(root: BT, start: number): number {
  let maximumDepth: number = 0;

  function dfs(node: BT): number {
    if (node === null) return 0;

    const leftNodes: number = dfs(node.left);
    const rightNodes: number = dfs(node.right);

    if (node.val === start) {
      maximumDepth = Math.max(leftNodes, rightNodes);
      return -1;
    } else if (leftNodes >= 0 && rightNodes >= 0) {
      return Math.max(leftNodes, rightNodes) + 1;
    } else {
      // one of them is negative
      maximumDepth = Math.max(
        maximumDepth,
        Math.abs(leftNodes) + Math.abs(rightNodes),
      );
      return Math.min(leftNodes, rightNodes) - 1;
    }
  }

  dfs(root);

  return maximumDepth;
}
