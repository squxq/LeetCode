// Source : https://leetcode.com/problems/destination-city/
// Author : francisco
// Date   : 2023-12-19

/*****************************************************************************************************
 *
 * You are given the array paths, where paths[i] = [cityAi, cityBi] means there exists a direct path
 * going from cityAi to cityBi. Return the destination city, that is, the city without any path
 * outgoing to another city.
 *
 * It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be
 * exactly one destination city.
 *
 * Example 1:
 *
 * Input: paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]
 * Output: "Sao Paulo"
 * Explanation: Starting at "London" city you will reach "Sao Paulo" city which is the destination
 * city. Your trip consist of: "London" -> "New York" -> "Lima" -> "Sao Paulo".
 *
 * Example 2:
 *
 * Input: paths = [["B","C"],["D","B"],["C","A"]]
 * Output: "A"
 * Explanation: All possible trips are:
 * "D" -> "B" -> "C" -> "A".
 * "B" -> "C" -> "A".
 * "C" -> "A".
 * "A".
 * Clearly the destination city is "A".
 *
 * Example 3:
 *
 * Input: paths = [["A","Z"]]
 * Output: "Z"
 *
 * Constraints:
 *
 * 	1 <= paths.length <= 100
 * 	paths[i].length == 2
 * 	1 <= cityAi.length, cityBi.length <= 10
 * 	cityAi != cityBi
 * 	All strings consist of lowercase and uppercase English letters and the space character.
 ******************************************************************************************************/

/* eslint-disable @typescript-eslint/no-non-null-assertion */
/**
 * @param {string[][]} paths
 * @returns {string}
 * given the array, paths, where paths[i] = [cityA, cityB] means there exists a direct path going from cityA to cityB
 * return the city without any path outgoing to another city

 * Stub:
 function destCity(paths: string[][]): string {return ""}

 * Tests:
 * I: paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]] -> O: "Sao Paulo"
 * I: paths = [["B","C"],["D","B"],["C","A"]] -> O: "A"
 * I: paths = [["A","Z"]] -> O: "Z"
 * I: paths = [["qMTSlfgZlC","ePvzZaqLXj"],["xKhZXfuBeC","TtnllZpKKg"],["ePvzZaqLXj","sxrvXFcqgG"],["sxrvXFcqgG","xKhZXfuBeC"],["TtnllZpKKg","OAxMijOZgW"]] -> O: "OAxMijOZgW"

 * Time Complexity: O(n), where n is paths length
 * Space Complexity: O(n)
 * this is a space-time tradeoff: 
 *  - Space - O(1) -> O(n)
 *  - Time - O(n^2) -> O(n)

 * Runtime: 46ms (100.00%)
 * Memory: 44.36MB (97.62%)
 */
export function destCity(paths: string[][]): string {
  let city: string = paths[0]![1] as string;
  const hash: Record<string, string> = {};

  for (let path: number = 1; path < paths.length; path++) {
    hash[paths[path]![0] as string] = paths[path]![1] as string;
  }
  while (hash[city] !== undefined) city = hash[city] as string;

  return city;
}
