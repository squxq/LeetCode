// Source : https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/
// Author : francisco
// Date   : 2024-01-23

import { maxLength } from "./MaximumLengthOfAConcatenatedStringWithUniqueCharacters";

describe("Maximum Length of a Concatenated String with Unique Characters", () => {
  test("example 1", () => {
    const result: number = maxLength(["un", "iq", "ue"]);

    expect(result).toBe(4);
  });

  test("example 2", () => {
    const result: number = maxLength(["cha", "r", "act", "ers"]);

    expect(result).toBe(6);
  });

  test("example 3", () => {
    const result: number = maxLength(["abcdefghijklmnopqrstuvwxyz"]);

    expect(result).toBe(26);
  });

  test("failed submission - 73 / 89 testcases passed", () => {
    const result: number = maxLength(["aa", "bb"]);

    expect(result).toBe(0);
  });

  test("additional testcase 4", () => {
    const result: number = maxLength(["vamiogw"]);

    expect(result).toBe(7);
  });

  test("additional testcase 5", () => {
    const result: number = maxLength(["pds", "net"]);

    expect(result).toBe(6);
  });

  test("additional testcase 6", () => {
    const result: number = maxLength(["abaik", "cdc", "e"]);

    expect(result).toBe(1);
  });

  test("additional testcase 7", () => {
    const result: number = maxLength([
      "djbjjncnjz",
      "lqhgplohfl",
      "mvvlyxhzxy",
      "tthftmhxiu",
    ]);

    expect(result).toBe(0);
  });

  test("additional testcase 8", () => {
    const result: number = maxLength([
      "llycjpkgu",
      "vogkpmjjx",
      "ldnkzmsrg",
      "huaijozvv",
      "yoxirhmgu",
      "hujqdhmts",
      "qarfpovkj",
      "ognjnrymi",
      "bnpngoruw",
      "mqyhdcxyl",
      "clwmjkxxx",
      "xiojwkbfy",
      "vqdyqufsv",
      "cvbvyzbft",
      "iuyiywzbq",
      "egrnjichc",
    ]);

    expect(result).toBe(9);
  });

  test("additional testcase 9", () => {
    const result: number = maxLength([
      "vut",
      "dgb",
      "day",
      "bss",
      "bdq",
      "jrl",
      "yvd",
      "yhf",
      "nco",
      "jvd",
      "ahh",
      "qll",
      "khw",
      "fny",
      "bko",
      "nxe",
    ]);

    expect(result).toBe(15);
  });

  test("additional testcase 10", () => {
    const result: number = maxLength([
      "bdl",
      "igd",
      "hto",
      "esj",
      "cfj",
      "wlb",
      "ynz",
      "vtw",
      "bun",
      "ruw",
      "iwq",
      "ady",
      "ldh",
      "nva",
      "fkd",
      "jkk",
    ]);

    expect(result).toBe(15);
  });

  test("additional testcase 11", () => {
    const result: number = maxLength([
      "npbgxp",
      "egtssu",
      "soadvn",
      "xvpkgp",
      "knvpbo",
      "nvlcrk",
      "rnazzy",
      "jxgzpz",
      "zmnpnz",
      "wrqdrp",
      "ptceyr",
      "ictuaf",
      "skzlkw",
      "cdenfr",
      "rcwvwb",
      "obhwjn",
    ]);

    expect(result).toBe(12);
  });
});
