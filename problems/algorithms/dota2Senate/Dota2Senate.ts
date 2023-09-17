// Source : https://leetcode.com/problems/dota2-senate/
// Author : squxq
// Date   : 2023-09-17

/*****************************************************************************************************
 *
 * In the world of Dota2, there are two parties: the Radiant and the Dire.
 *
 * The Dota2 senate consists of senators coming from two parties. Now the Senate wants to decide on a
 * change in the Dota2 game. The voting for this change is a round-based procedure. In each round,
 * each senator can exercise one of the two rights:
 *
 * 	Ban one senator's right: A senator can make another senator lose all his rights in this and
 * all the following rounds.
 * 	Announce the victory: If this senator found the senators who still have rights to vote are
 * all from the same party, he can announce the victory and decide on the change in the game.
 *
 * Given a string senate representing each senator's party belonging. The character 'R' and 'D'
 * represent the Radiant party and the Dire party. Then if there are n senators, the size of the given
 * string will be n.
 *
 * The round-based procedure starts from the first senator to the last senator in the given order.
 * This procedure will last until the end of voting. All the senators who have lost their rights will
 * be skipped during the procedure.
 *
 * Suppose every senator is smart enough and will play the best strategy for his own party. Predict
 * which party will finally announce the victory and change the Dota2 game. The output should be
 * "Radiant" or "Dire".
 *
 * Example 1:
 *
 * Input: senate = "RD"
 * Output: "Radiant"
 * Explanation:
 * The first senator comes from Radiant and he can just ban the next senator's right in round 1.
 * And the second senator can't exercise any rights anymore since his right has been banned.
 * And in round 2, the first senator can just announce the victory since he is the only guy in the
 * senate who can vote.
 *
 * Example 2:
 *
 * Input: senate = "RDD"
 * Output: "Dire"
 * Explanation:
 * The first senator comes from Radiant and he can just ban the next senator's right in round 1.
 * And the second senator can't exercise any rights anymore since his right has been banned.
 * And the third senator comes from Dire and he can ban the first senator's right in round 1.
 * And in round 2, the third senator can just announce the victory since he is the only guy in the
 * senate who can vote.
 *
 * Constraints:
 *
 * 	n == senate.length
 * 	1 <= n <= 10^4
 * 	senate[i] is either 'R' or 'D'.
 ******************************************************************************************************/

export function predictPartyVictory(senate: string): string {
  // first approach

  // const opposite: { R: string, D: string } = {R: "D", D: "R"}
  // let oppositeChar: string = ""
  // while (true) {
  //     // char === "R" || char === "D"
  //     for (let char of senate) {
  //         oppositeChar = opposite[char]
  //         // if there are no opposite party senators
  //         if (senate.indexOf(oppositeChar) === -1) {
  //             return char
  //         } else {
  //             senate = senate.replace(oppositeChar, "")
  //         }
  //     }
  // }

  // second approach - counting

  // const Rmatch: number = (senate.match(/R/g) || []).length
  // const Dmatch: number = (senate.match(/D/g) || []).length

  // if (Rmatch > Dmatch) return "Radiant"
  // else if (Dmatch > Rmatch) return "Dire"
  // else return senate[0] === "R" ? "Radiant" : "Dire"

  // first approach - better execution

  let oppositeChar: string = "";
  let oppositeParty: boolean = false;
  let oppositeIndex: number = 0;
  const senateArr: string[] = Array.from(senate);
  while (true) {
    for (const char of senateArr) {
      oppositeChar = char === "R" ? "D" : "R";
      oppositeIndex = senateArr.indexOf(oppositeChar, oppositeIndex);
      if (oppositeIndex === -1 && !senateArr.includes(oppositeChar)) {
        oppositeParty = true;
        break;
      } else {
        senateArr.splice(
          oppositeIndex === -1
            ? senateArr.indexOf(oppositeChar)
            : oppositeIndex,
          1,
        );
      }
    }

    if (oppositeParty) {
      return oppositeChar === "R" ? "Dire" : "Radiant";
    }
  }
}
