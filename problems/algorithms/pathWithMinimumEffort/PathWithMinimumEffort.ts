// Source : https://leetcode.com/problems/path-with-minimum-effort/
// Author : squxq
// Date   : 2023-09-17

/*****************************************************************************************************
 *
 * You are a hiker preparing for an upcoming hike. You are given heights, a 2D array of size rows x
 * columns, where heights[row][col] represents the height of cell (row, col). You are situated in the
 * top-left cell, (0, 0), and you hope to travel to the bottom-right cell, (rows-1, columns-1) (i.e.,
 * 0-indexed). You can move up, down, left, or right, and you wish to find a route that requires the
 * minimum effort.
 *
 * A route's effort is the maximum absolute difference in heights between two consecutive cells of the
 * route.
 *
 * Return the minimum effort required to travel from the top-left cell to the bottom-right cell.
 *
 * Example 1:
 *
 * Input: heights = [[1,2,2],[3,8,2],[5,3,5]]
 * Output: 2
 * Explanation: The route of [1,3,5,3,5] has a maximum absolute difference of 2 in consecutive cells.
 * This is better than the route of [1,2,2,2,5], where the maximum absolute difference is 3.
 *
 * Example 2:
 *
 * Input: heights = [[1,2,3],[3,8,4],[5,3,5]]
 * Output: 1
 * Explanation: The route of [1,2,3,4,5] has a maximum absolute difference of 1 in consecutive cells,
 * which is better than route [1,3,5,3,5].
 *
 * Example 3:
 *
 * Input: heights = [[1,2,1,1,1],[1,2,1,2,1],[1,2,1,2,1],[1,2,1,2,1],[1,1,1,2,1]]
 * Output: 0
 * Explanation: This route does not require any effort.
 *
 * Constraints:
 *
 * 	rows == heights.length
 * 	columns == heights[i].length
 * 	1 <= rows, columns <= 100
 * 	1 <= heights[i][j] <= 10^6
 ******************************************************************************************************/

/* eslint-disable @typescript-eslint/no-non-null-assertion */
class PQueue {
  elements: number[][];
  constructor() {
    this.elements = [];
  }

  push(element: number[]): void {
    this.elements.push(element);
    this.elements.sort((a: number[], b: number[]) => a[2]! - b[2]!);
  }

  pop(): number[] {
    return this.elements.shift()!;
  }

  isEmpty(): boolean {
    return this.elements.length === 0;
  }
}

// number[][] -> number
// return the maximum absolute difference in heights between two consecutive cells of a 2D array

export function minimumEffortPath(heights: number[][]): number {
  // determine the number of rows and columns in the heights 2D array
  const rows: number = heights.length;
  const cols: number = heights[0]!.length;

  // create a 2D array called "dist" to store the minimum effors required to reach each cell from the starting cell
  // this array is initialized with Infinity for all cells because we want to find the minimum effort to reach each cell and Infinity represents an unexplored state
  const dist: number[][] = new Array(rows)
    .fill(null)
    .map(() => new Array(cols).fill(Infinity));

  // directions represents the possible moves from a cell by adjusting the row ("x") and column ("y") coordinates
  const directions: number[][] = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  // create a priority queue to efficiently explore the grid
  // the priority queue will store cells along with their respective effors, ordering them by ascending order
  const priorityQueue = new PQueue();

  // start at the top-left corner represented by the cell (0, 0) and effort 0, since we haven't moved yet, we update dist with effort 0: getting to cell (0, 0) from cell (0, 0) requires no effort
  priorityQueue.push([0, 0, 0]);
  dist[0]![0] = 0;

  while (!priorityQueue.isEmpty()) {
    // each iteration we pop the cell with lowest effort
    const [x, y, effort] = priorityQueue.pop()!;

    for (const [dx, dy] of directions) {
      // we calculate the new coordinates newX and newY by adding the direction offsets to the current position
      const newX = (x as number) + (dx as number);
      const newY = (y as number) + (dy as number);

      // check if the coordinates are withing the bounds of the grid
      if (newX >= 0 && newX < rows && newY >= 0 && newY < cols) {
        // calculate the new effort required to reach the neighboring cell
        const newEffort = Math.max(
          effort as number,
          Math.abs(heights[x as number]![y as number]! - heights[newX]![newY]!),
        );

        // if the newEffort is less than the previously recorded effort for the neighboring cell we update dist with new effort and push the neighboring cell into the priority queue
        if (newEffort < dist[newX]![newY]!) {
          dist[newX]![newY] = newEffort;
          priorityQueue.push([newX, newY, newEffort]);
        }
      }
    }
  }

  return dist[rows - 1]![cols - 1]!;
}
