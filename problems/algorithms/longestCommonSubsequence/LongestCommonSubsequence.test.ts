// Source : https://leetcode.com/problems/longest-common-subsequence/
// Author : francisco
// Date   : 2024-01-25

import { longestCommonSubsequence } from "./LongestCommonSubsequence";

describe("Longest Common Subsequence", () => {
  test("example 1", () => {
    const result: number = longestCommonSubsequence("abcde", "ace");

    expect(result).toBe(3);
  });

  test("example 2", () => {
    const result: number = longestCommonSubsequence("abc", "abc");

    expect(result).toBe(3);
  });

  test("example 3", () => {
    const result: number = longestCommonSubsequence("abc", "def");

    expect(result).toBe(0);
  });

  test("failed submission - 17 / 47 testcases passed", () => {
    const result: number = longestCommonSubsequence(
      "pmjghexybyrgzczy",
      "hafcdqbgncrcbihkd",
    );

    expect(result).toBe(4);
  });

  test("additional testcase 4", () => {
    const result: number = longestCommonSubsequence("a", "ttta");

    expect(result).toBe(1);
  });

  test("additional testcase 5", () => {
    const result: number = longestCommonSubsequence("wggi", "g");

    expect(result).toBe(1);
  });

  test("additional testcase 6", () => {
    const result: number = longestCommonSubsequence("iitt", "tttttttttt");

    expect(result).toBe(2);
  });

  test("additional testcase 7", () => {
    const result: number = longestCommonSubsequence("jijiijjpji", "jjji");

    expect(result).toBe(4);
  });

  test("additional testcase 8", () => {
    const result: number = longestCommonSubsequence(
      "fnbeaucuyhgariizanpxffiiicvjcynwcvlqyvobxvmqpqelcqrdvggecbwrhrwyqbgafyrnmwqrbtugykagycteuusvkpthokeiqddumbgwzechfyxrqxwfzmcpkewebbhaowqjalzqpkwzfyymttnatmczxbnmydnzfongvdokxjwibilpitdxfwavtkftdenrzsktqlsptsccttizehxvellkmqnomfynnptzcwseragirexubilbnxddsmmwufhcijrsdmecixjbahrhhkrekuqqcdghnljlazvvvtziqaimkfqignlmmfzujeboaqqeswjseozaspgpbedwwheshjettreroubajeaqfbrzlpehcnurcdeimkofesjgcmtqrdjwvsuagtszyxaqmctdusuyjdlwedsjrdpnsdizoflilgvkjdbdxhqtnguqjzkjknpbvawoywklsfvnlkhlfmvbanxtypouejervclgkinohleenbsrvddvhjeelokbtuikrfilyyerqamcanglbdihfffociwoloifuipddpnccwzlpqblpohjstiygligyibclnewnhgdjjatspmtphgddgyfdpizyengteffdwrkswjwuznebeougvojdzzztaallammgskuzrjhwxonzogekpderhzdehbzgcxgveaxiyrptakpblbsmmuwwmtmiezgghvesvqtgdiazzkboitidoeeookdfvgcujpvixvzzzakbwkynicutzowvzfspxfkndfvodvpwadlrvswalmpdhllilhmofyoyaxhncjmhqghadfajienejnihwniubbajajyzpxvuraorjnkgonjvnmdboujfyoimsqdfebutbjcqgvdkkgczzwruinxsltspempsvclpzgqwybsquxubmvzygkpabvkchieqtvqdocjpufcmojehiwdnmvzgrsfgiwqmiahmozjzqzzfzrtxnqistceggdm",
      "vfkfjkpuyo",
    );

    expect(result).toBe(10);
  });

  test("additional testcase 9", () => {
    const result: number = longestCommonSubsequence(
      "fffkvfffkkkkkffffffkvfvvvfffvvvkffkfkfkvvvkkvfkvvvkvvffvvkvfvvfkffvfffkkffkfvkkkffffvfkvfvvvffvvkkvvkvvvfvfvvkfkfvfvvfvvffkvkfkkkkvvffkkfvvvkvkvvfvvvkkfkvffkfkffkfffvkvkfvkvfkvffkkvkfkffkfvkffvvkkfkkvvvkfffkfkvfkffvfvkfvkkvkvffvvfkvvffkvkkfkffkvfkffkkffkkkfkvfvfkfvvfkvfvkfvkkfkvvkkfkfvvfvkkffffkkkvffkfvvkkfkkvvvffffvvvvkffkffkvkvkvvkvfffvfkkfffkvvvkfvvfvvvfkfkfkfvfffkvkvfkvfkffkvkkvvkkfkkvkfkvvfvffkkkkkfffvkfvkfkkkkvkkvvkkfvvvfkvvfkvffvvfkkfkfkfvvkfkkvvkkfvvkvvkfffkvvvkffvfkkfkfvvkkkkfkvvfvkfkfkvvfvkkvfvfkfvvkvfkkkkvvffvfvffvvvvvfkkkfkvvfkvvffkkkvkfkkfkfkkkffffvvkvvvfkvkfkffffvfvvvfvkvvkkkkvkkkkvvfvfkvvkkkfkkvfkkfffvfkvkvffvkfvvkkfkfvvkfvkffkfvvkkvfkvfffffvkkfkfkkkkkfkvvvfkvvvffffkfffvfvkvvfvkkfkkvfkkkkfkfkvvkffkkvkkfvffvkvfvfffffvvfvvvvvvkfvvfvfkfvvvvkffffvkkfkkfvvkfffkkvvkkvfkvkkfvkkvffkfkvkffvfkkkfkkvvvvkkvvfvfkkkfvkvfkkkfkkfkvkvvvkvfffkvkfkvfkkvvvkkffkvfvfkkvkffffvfkkfvfkfvffvvvkkfvfvvvfkkkkkkvfvkvkkkfvfkkffvkvkkvfvkkkvfkkfvfffkvvvfkfffvvvfkffvvfkfvkfkfffkkkvffvvvkfkkkvvkkkkkfvvkvf",
      "vkkkkkffvk",
    );

    expect(result).toBe(10);
  });

  test("additional testcase 10", () => {
    const result: number = longestCommonSubsequence(
      "jduirerawykaiwuavukhrzhrkmrrsgvhkvorntvritqrikfrsowwvqqqmhlhotjhejvsqgcdooqxddogyuknrlircvibjrvpnagltihrkporzbpcopxshjpnotcrdtwomegqvlbbwhnaxgiiyojgzcdjzapcxsdjryotvpybpyrpomtbxtjmeionxqmypkhtwklicxoahrggebhisypyjepbehretsucyjbycemhochgexmjryiehrkvjpaflpkdeqzvmlxzfddgqfzpugqxufqgsdomwtwlulyzoghcadlkizvxxkjuucycgkaaiyxbtchgkrlmgoyiybooskaimdmbgdunnaetobnvdmafxflddipayovckxclvrhvcvwkxkzcchecswecdpjhbmgyqpvhbuvjefuqjryfiemmolboenvqebszzphxxircsreeyyybvkndakdtgbzfhprcxzzpvhwsqfjxxphgxirciruvlpzirfkengtlihkftqwbxxbizgdosnkorwdctuadclrdxpbtasewryelndvpbqeovpjxfkpsieauewhvourullpeeergppcajiglrpubywcngksnltjucbaapjpphcrbhdnldhobvtpgmzulzcfcrrwmqorxobnugdrspdxlcrahlsiadousabbneeasaxpwvkwkajiliqqjjbuautnmorrmhkpbagztvhotxlwrxxwfpwbamhjogguaubvyhtthjcgybyszjsazqtodwsshxargcydrbpdqgeehzpzjeckqjvuhdnkjffhmgbywhkcvzinqvhjqqtgvzildpjlnummlxmbqsrxtpwcpgezhxmphwoxzeruogaxytsyvrafqnowsskzhpfjruykkxftbxedznpmhcabdvwutnoyvwvzdhezagvlbbzihzpvrvvwnftgleyzyjldnfdwezzjsiinzqobgwevgifliyngizlkjyoawjlcmnkalyqfc",
      "bcrvkxirhlayhntityxpewodsaxukgleifcyfxzroxhekjqwhiltrahuwjjtqprhsaajtojzaabgykkylnebewxjkwcchejchefbikcltdrrvfqfjdzeyqkinufmebjankixhdsvtynzheihvhceyuuwrqhoagyeihaimxuodjnkryflzqirsgoiithsrdecijeuylfudpotgvhcmixjvlwnwdmpaukzmiatzvvbilydajfvhofewpxdzynchdcimywmunjhlndfaqecawmneinwazlvuafwghxqtbmunjbppgdpoklsqetuktjglkqelxknepxmpupteauyimcrwqzdofthulkoqhmjsnstdsvbsvtunoiytycfvzaazxflusdbbylrhbvbdzayjjhuzptbfgpzhhozotgbmnhstopclzamvxstoukmqaeqryxjylubkojpyhrofcngydxcurvncwbypfbqmhtflrfwdtckfowkjyareehfvkzjyhblenbimgjdtkgewmrzeuiojkuaqwfibfsbbbqinxxfuezzhgrndzcrjqdfxjwnqsrhukncrmapdvgyjeibmmewtwysuxddrtegebwpudmukgphrlwwopsyipooljpteojxyrkigtmhhntlhggdvgujpctycbebsszpwxzzxxmlwosoeerstgjwxdhctolxrfyeatdociyymxvqajikjxqxhfaegmudedtuiqmoouifvtxwhiyvkvpaljxhnfdgeraezjjthvktdibqtteaveqeikylkdoudjxwlgmuyapghfjodmsttvlgnjgfvtcrjunqckgicztpxhpsoracexdafcwkqpeyjwxmhyjctbmngzqjfvnveruvlbpbldhgofofdkmvwgsnnzutlpjbmsoszsycvuhgoobxwiqnvwmqgcvcvyexvoxciqgwrvpdjmogqbmmoeymcbxbynljfwpjbklxszouoxuuqrgmjwmq",
    );

    expect(result).toBe(321);
  });

  test("additional testcase 11", () => {
    const result: number = longestCommonSubsequence(
      "qqqzqzqzqzqqqqzqqqqqqzqqqqqqzqqzqqqqqzzqzzqqqqzqqzqqqqzzqqzzzqqqzzqzzzzqzqqqqzzqzqqqqqqqqzzqzzzzqzqzqqqqqzqzqzzqqqzqqzzqqqzqqzqqzqzqzqqqqqzqzzzzqqqqqqzzzqqzqzqqzqqqqzqqzqzzzqqzqzzzzqqqqzzqqqqqqqqqqzqqqzqzqzqqzqqqzqqqzzqzqqqqqzqzqqqqzqqqqqqqzzqzqzqqqzqqzzqzqqqzqqqzzqqqqqzqzqzqqqqqqqqqqzqqzqzqqqqqqqzqzzqqqqqqzqqzqqqqzqqqzqqqqqzqqqqqzqqqzqzqzqqqzzqqqqzqqzzqqqzzqqqqzzzqqqqqqzqqzqqzqqqzzqqqqzzqqzzqzqzzqqqzqqqqzzqzqzzzzqqqzqzqzzqqzzqqqqqqzqqqqqqqqqzzqzqqqzqzqqqqqqqqqzqzqqzqqqzzqqzzqqqqqqqqqqqqzzqqqzqzqzqqqqqzqqqqzzqqzqqqzqzqzqqqzzqqqqqqqqqzqzqzqqqzzzqqqzzqqqzqzzqzzzqqzqqqqzqzqqzqzqqqqqqqqzzqqqzqzzqqqqzzqzzqzqqqqqqqzqqqzqqqqqqqqzqqqqzqqqzqzqqzqqzzzzqqzzqqzqqzqqqzqqqqqqqqqqqzzqzzqqqzqqqzqzzqqzqqqzzzqzqqqqqqqqqqqzzqqzqqqqzzqqqzqqzqqqqqqzqqqqqzqqqqqzzqqqzqqqqzzzqqqqqqzzzzqqqzqzqzqqqqzqqzzzzqqqqzqqqzzzqqzqzqzqzzqzzzqqzqqqzqqqzqzqqqzqqqqqzqqqzzqqqqzqqqzqzzqzzqqzqzzqqqqzqqqqqzqqqqqqqqqqzqqzzqqzzqqqqqzqqzzzzqqqqqqqqzqzzqqzzqzqqqqqqqzqqzqqqqqzqqqzqqzqzqzzqqzqzqqqzqzzqqzqqqqqqzqqqzzzqzqqqqqqqzqqqzzzqq",
      "qzqqqqqzzqqqqzqqzqzqqqqqqqzqqqzqqzzqqqqzzzzqqqqzqqqqzzqqzqqqqqzqzqzqzqzqqqzqzqqqqqqzzqqqqqqzqzzqqqqzqqqzqzzqqzqzqqzqzqqqqzqqzzzzqqzzqzqqzqzqqqqqzqzqzzqqzqzqqqqzqzzqqqqzzqzqqqzqqzqqqzqzqzqqqzzqqqqzqqqzqqqzqqzqqzqqzqqqqzqqqzzqzzqzzzqqqqqzqzqqqqqqzqqqqzqqqqqzzqqqqqzqzzqqqzqqqqqqqzzzzqqzzqqqzzqzqzqqqqqqzzzqzqqqzzzzzqzqqqqzqqqzqqqqqqqqzzqqqqzqqqqqqqzqqzzzqqqqzqqqqzzqzzqqzqqzqqzqzqzqzqqqqqqqqzzzqqqqzqzqqqzzqqqqzzqqqzqqqqqqzzzqqzqzqzqqqzqqqzqqqqqzqqzzqzqqqqqzqqqqqqqzqqqzqqqqqzqzqqqqqqzqqqqqzqqqzqqqzzqzzqqqqqqqzqqzqqzzzqqqzqqqqqqqqqzzzqzqqqqqqzqzqzqqqqqzqqqqqqqqzzqqqzqzqzzqqqqqqzqqqzqqqzqzqqqqzqqzqqqzqzzqqzzqzqqzqqqqzqqzqqqqzqqzzqqqqqqqzzqqqqzqzzzqzzzzqzqqqqqqzqzqqzqzqqzzzqzqqzqqzqqzzqzqqqzqqqqzqqqqqqqzqzqzqzqzzqqzqqqqzqqzqqqqqzqzqqqqzqzzqqzqzzqzqqqqzzqqqqqzqqzqqqqqqqqqqqqzqqzqqqzqqqqqqqqzqqzzqqqqqzzqqzqqqqzqzqzqzqqqqqqqqzzqqqzqqqzzqqqzzqzqqqzqqqzqqqqqqqzqqzqzqqqzzqzqqqqzqzqqzzzzqqqqzqzqqzqqqqzqzzqqzzzqzqzzzzqqzqzqqqqqzzqqqzzqqzqzzqqzzqqqqqqqzzzzqqqqqqqqqqqzqqqqqzzqqzzqzqqzzqqqzzqqqzqqzzqqqqzq",
    );

    expect(result).toBe(831);
  });
});
