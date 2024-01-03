// Source : https://leetcode.com/problems/minimum-difficulty-of-a-job-schedule/
// Author : francisco
// Date   : 2024-01-03

import { minDifficulty } from "./MinimumDifficultyOfAJobSchedule";

describe("minimum difficulty of a job schedule", () => {
  test("example 1", () => {
    const result: number = minDifficulty([6, 5, 4, 3, 2, 1], 2);

    expect(result).toBe(7);
  });

  test("example 2", () => {
    const result: number = minDifficulty([9, 9, 9], 4);

    expect(result).toBe(-1);
  });

  test("example 3", () => {
    const result: number = minDifficulty([1, 1, 1], 3);

    expect(result).toBe(3);
  });

  test("failed submission - testcase 30/34", () => {
    const result: number = minDifficulty(
      [
        976, 662, 877, 135, 175, 628, 856, 855, 807, 769, 200, 223, 527, 36,
        399, 409, 468, 884, 229, 311, 41, 350, 734, 472, 480, 77, 299, 821, 534,
        776, 965, 926, 867, 45, 108, 504, 468, 910, 594, 355, 193, 905, 211,
        719, 191, 961, 940, 176, 737, 591, 831, 22, 550, 822, 840, 295, 643, 1,
        591, 227, 345, 298, 918, 561, 962, 977, 871, 610, 39, 247, 453, 405,
        306, 994, 782, 395, 92, 81, 956, 691, 692, 395, 249, 351, 342, 752, 709,
        521, 936, 997, 651, 559, 760, 796, 286, 531, 187, 515, 550, 470, 879,
        747, 3, 966, 933, 696, 164, 547, 278, 272, 343, 552, 355, 303, 15, 384,
        870, 85, 515, 959, 168, 160, 77,
      ],
      7,
    );

    expect(result).toBe(2531);
  });
});
