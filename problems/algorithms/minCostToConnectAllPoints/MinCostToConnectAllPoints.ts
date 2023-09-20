// Source : https://leetcode.com/problems/min-cost-to-connect-all-points/
// Author : squxq
// Date   : 2023-09-20

/*****************************************************************************************************
 *
 * You are given an array points representing integer coordinates of some points on a 2D-plane, where
 * points[i] = [xi, yi].
 *
 * The cost of connecting two points [xi, yi] and [xj, yj] is the manhattan distance between them: |xi
 * - xj| + |yi - yj|, where |val| denotes the absolute value of val.
 *
 * Return the minimum cost to make all points connected. All points are connected if there is exactly
 * one simple path between any two points.
 *
 * Example 1:
 *
 * Input: points = [[0,0],[2,2],[3,10],[5,2],[7,0]]
 * Output: 20
 * Explanation:
 *
 * We can connect the points as shown above to get the minimum cost of 20.
 * Notice that there is a unique path between every pair of points.
 *
 * Example 2:
 *
 * Input: points = [[3,12],[-2,5],[-4,1]]
 * Output: 18
 *
 * Constraints:
 *
 * 	1 <= points.length <= 1000
 * 	-10^6 <= xi, yi <= 10^6
 * 	All pairs (xi, yi) are distinct.
 ******************************************************************************************************/

/* eslint-disable @typescript-eslint/no-non-null-assertion */
class UnionFind {
  parent: number[];
  rank: number[];

  constructor(n: number) {
    this.parent = new Array(n).fill(0).map((_, i) => i);
    this.rank = new Array(n).fill(0);
  }

  find(x: number): number {
    if (x !== this.parent[x]) {
      this.parent[x] = this.find(this.parent[x] as number);
    }
    return this.parent[x] as number;
  }

  union(x: number, y: number): void {
    const rootX = this.find(x);
    const rootY = this.find(y);

    if (rootX !== rootY) {
      if ((this.rank[rootX] as number) < (this.rank[rootY] as number)) {
        this.parent[rootX] = rootY;
      } else if ((this.rank[rootX] as number) > (this.rank[rootY] as number)) {
        this.parent[rootY] = rootX;
      } else {
        this.parent[rootY] = rootX;
        this.rank[rootX]++;
      }
    }
  }
}

// number[][] -> number
// return the minimum cost to make all points connected

export function minCostConnectPoints(points: number[][]): number {
  // Sort all the edges in non-decreasing order of their weight.
  const edges: Array<[number, number, number]> = [];
  const n: number = points.length;

  for (let i: number = 0; i < n; i++) {
    for (let j: number = i + 1; j < n; j++) {
      const distance: number = calculateDistance(points[i]!, points[j]!);
      edges.push([i, j, distance]);
    }
  }
  edges.sort((a, b) => a[2] - b[2]);

  // Pick the smallest edge. Check if it forms a cycle with the spanning tree formed so far.
  // If the cycle is not formed, include this edge. Else, discard it.
  const unionFind = new UnionFind(n);
  let counter: number = 0;
  let e: number = 0;
  let i: number = 0;

  while (e < n - 1) {
    const [u, v, weight] = edges[i] as [number, number, number];
    i++;
    if (unionFind.find(u) !== unionFind.find(v)) {
      unionFind.union(u, v);
      counter += weight;
      e++;
    }
  }

  return counter;
}

// number[] number[] -> number
// return the manhattan distance (|xi - xj| + |yi - yj|) between the given points
function calculateDistance(point1: number[], point2: number[]): number {
  return Math.abs(point1[0]! - point2[0]!) + Math.abs(point1[1]! - point2[1]!);
}
