// Source : https://leetcode.com/problems/amount-of-time-for-binary-tree-to-be-infected/
// Author : francisco
// Date   : 2024-01-10

import {
  NodeTree,
  amountOfTime,
} from "./AmountOfTimeForBinaryTreeToBeInfected";

describe("amount of time for binary tree to be infected", () => {
  test("example 1", () => {
    const result: number = amountOfTime(
      new NodeTree(
        1,
        new NodeTree(
          5,
          null,
          new NodeTree(
            4,
            new NodeTree(9, null, null),
            new NodeTree(2, null, null),
          ),
        ),
        new NodeTree(
          3,
          new NodeTree(10, null, null),
          new NodeTree(6, null, null),
        ),
      ),
      3,
    );

    expect(result).toBe(4);
  });

  test("example 2", () => {
    const result: number = amountOfTime(new NodeTree(1, null, null), 1);

    expect(result).toBe(0);
  });

  test("failed submission - 73 / 80 testcases passed", () => {
    const result: number = amountOfTime(
      new NodeTree(
        1,
        null,
        new NodeTree(
          2,
          new NodeTree(3, null, new NodeTree(5, null, null)),
          new NodeTree(4, null, null),
        ),
      ),
      4,
    );

    expect(result).toBe(3);
  });

  test("failed submission - 32 / 80 testcases passed", () => {
    const result: number = amountOfTime(
      new NodeTree(
        1,
        new NodeTree(
          2,
          new NodeTree(
            3,
            new NodeTree(4, new NodeTree(5, null, null), null),
            null,
          ),
          null,
        ),
        null,
      ),
      1,
    );

    expect(result).toBe(4);
  });

  test("failed submission - 41 / 80 testcases passed", () => {
    const result: number = amountOfTime(
      new NodeTree(
        1,
        new NodeTree(
          2,
          new NodeTree(
            3,
            new NodeTree(4, new NodeTree(5, null, null), null),
            null,
          ),
          null,
        ),
        null,
      ),
      2,
    );

    expect(result).toBe(3);
  });
});
