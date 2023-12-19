// Source : https://leetcode.com/problems/image-smoother/
// Author : francisco
// Date   : 2023-12-19

import { imageSmoother } from "./ImageSmoother";

describe("image smoother", () => {
  test("example 1", () => {
    const result: number[][] = imageSmoother([
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1],
    ]);

    expect(result).toStrictEqual([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);
  });

  test("example 2", () => {
    const result: number[][] = imageSmoother([
      [100, 200, 100],
      [200, 50, 200],
      [100, 200, 100],
    ]);

    expect(result).toStrictEqual([
      [137, 141, 137],
      [141, 138, 141],
      [137, 141, 137],
    ]);
  });
});
