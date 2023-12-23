// Source : https://leetcode.com/problems/path-crossing/
// Author : francisco
// Date   : 2023-12-23

/*****************************************************************************************************
 *
 * Given a string path, where path[i] = 'N', 'S', 'E' or 'W', each representing moving one unit north,
 * south, east, or west, respectively. You start at the origin (0, 0) on a 2D plane and walk on the
 * path specified by path.
 *
 * Return true if the path crosses itself at any point, that is, if at any time you are on a location
 * you have previously visited. Return false otherwise.
 *
 * Example 1:
 *
 * Input: path = "NES"
 * Output: false
 * Explanation: Notice that the path doesn't cross any point more than once.
 *
 * Example 2:
 *
 * Input: path = "NESWW"
 * Output: true
 * Explanation: Notice that the path visits the origin twice.
 *
 * Constraints:
 *
 * 	1 <= path.length <= 10^4
 * 	path[i] is either 'N', 'S', 'E', or 'W'.
 ******************************************************************************************************/

/** return true if the path in given string, path, crosses itself at any point; otherwise false
 * @param {string} path
 * @returns {boolean}

 * Tests:
 * I: path = "NES" -> O: false
 * I: path = "NESWW" -> O: true
 * I: path = "NENESSWN" -> O: true

 * Template:
 function isPathCrossing(path: string): boolean {
   pos = {x: 0, y: 0}
   set = new Set()
   hash = {"N": {coord: y, val: 1}, "S": {coord: y, val: -1},
           "E": {coord: x, val: 1}, "W": {coord: x, val: -1}}
   for (char of string) {
     pos[hash[char][coord]] += hash[char][val]
     if (set.has(pos)) return false
     else set.add(pos)
   }

   return true
 }
 
 * Time Complexity: O(n)
 * Space Complexity: O(n)

 * Runtime: 47ms (95.56%)
 * Memory: 43.60MB (93.33%)
 */
export type Direction = "N" | "S" | "E" | "W";

export function isPathCrossing(path: string): boolean {
  const pos: { x: number; y: number } = { x: 0, y: 0 };

  const set = new Set([`${pos.x},${pos.y}`]);
  const hash: Record<Direction, { coord: "x" | "y"; val: number }> = {
    N: { coord: "y", val: 1 },
    S: { coord: "y", val: -1 },
    E: { coord: "x", val: 1 },
    W: { coord: "x", val: -1 },
  };

  for (const char of path) {
    pos[hash[char as Direction].coord] += hash[char as Direction].val;
    const newPoint: string = `${pos.x},${pos.y}`;

    if (set.has(newPoint)) return true;
    else set.add(newPoint);
  }

  return false;
}
