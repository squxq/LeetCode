// Source : https://leetcode.com/problems/add-binary/
// Author : Francisco Tomas
// Date   : 2023-11-27

import { addBinary } from "./AddBinary";

describe("add binary", () => {
  test("simple inputs", () => {
    const result: string = addBinary("11", "1");
    expect(result).toBe("100");
  });

  test("slightly more complex inputs", () => {
    const result: string = addBinary("1010", "1011");
    expect(result).toBe("10101");
  });

  test("large inputs", () => {
    const result: string = addBinary(
      "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101",
      "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011",
    );
    expect(result).toBe(
      "110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000",
    );
  });
});
