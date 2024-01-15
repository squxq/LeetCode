// Source : https://leetcode.com/problems/find-players-with-zero-or-one-losses/
// Author : francisco
// Date   : 2024-01-15

/*****************************************************************************************************
 *
 * You are given an integer array matches where matches[i] = [winneri, loseri] indicates that the
 * player winneri defeated player loseri in a match.
 *
 * Return a list answer of size 2 where:
 *
 * 	answer[0] is a list of all players that have not lost any matches.
 * 	answer[1] is a list of all players that have lost exactly one match.
 *
 * The values in the two lists should be returned in increasing order.
 *
 * Note:
 *
 * 	You should only consider the players that have played at least one match.
 * 	The testcases will be generated such that no two matches will have the same outcome.
 *
 * Example 1:
 *
 * Input: matches = [[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]]
 * Output: [[1,2,10],[4,5,7,8]]
 * Explanation:
 * Players 1, 2, and 10 have not lost any matches.
 * Players 4, 5, 7, and 8 each have lost one match.
 * Players 3, 6, and 9 each have lost two matches.
 * Thus, answer[0] = [1,2,10] and answer[1] = [4,5,7,8].
 *
 * Example 2:
 *
 * Input: matches = [[2,3],[1,3],[5,4],[6,4]]
 * Output: [[1,2,5,6],[]]
 * Explanation:
 * Players 1, 2, 5, and 6 have not lost any matches.
 * Players 3 and 4 each have lost two matches.
 * Thus, answer[0] = [1,2,5,6] and answer[1] = [].
 *
 * Constraints:
 *
 * 	1 <= matches.length <= 10^5
 * 	matches[i].length == 2
 * 	1 <= winneri, loseri <= 10^5
 * 	winneri != loseri
 * 	All matches[i] are unique.
 ******************************************************************************************************/

/**
 * @param {number[][]} matches
 * @returns {number[][]}
 * return a list of size 2 where: index 0 is a list of players that have 0 losses
 * index 1 is a list of players that have lost exactly one match

 * Tests:
 * I: matches = [[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]] -> O: [[1,2,10],[4,5,7,8]]
 * I: matches = [[2,3],[1,3],[5,4],[6,4]] -> O: [[1,2,5,6],[]]

 * Template: iteration, hash table, counting

 * Time Complexity: O(n + m), where n is matches.length and m is the # of unique players
 * Space Complexity: O(m)
 */
export function findWinners(matches: number[][]): number[][] {
  const playerLosses: Record<number, number> = {};

  for (const match of matches) {
    if (playerLosses[match[0] as number] === undefined)
      playerLosses[match[0] as number] = 0;

    playerLosses[match[1] as number] =
      (playerLosses[match[1] as number] ?? 0) + 1;
  }

  const ans: number[][] = [[], []];

  Object.entries(playerLosses).forEach(([player, losses]) => {
    if (losses === 0) ans[0]?.push(+player);
    else if (losses === 1) ans[1]?.push(+player);
  });

  return ans;
}
