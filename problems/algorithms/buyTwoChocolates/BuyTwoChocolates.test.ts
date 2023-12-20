// Source : https://leetcode.com/problems/buy-two-chocolates/
// Author : francisco
// Date   : 2023-12-20

import { buyChoco } from "./BuyTwoChocolates";

describe("buy two chocolates", () => {
  test("example 1", () => {
    const result: number = buyChoco([1, 2, 2], 3);

    expect(result).toBe(0);
  });

  test("example 2", () => {
    const result: number = buyChoco([3, 2, 3], 3);

    expect(result).toBe(3);
  });
});
