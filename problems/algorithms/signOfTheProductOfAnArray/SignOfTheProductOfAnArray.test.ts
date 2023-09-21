// Source : https://leetcode.com/problems/sign-of-the-product-of-an-array/
// Author : squxq
// Date   : 2023-09-21

import { arraySign } from "./SignOfTheProductOfAnArray"; // Replace with your actual code file path

describe("arraySign", () => {
  it("should return the correct sign for valid inputs", () => {
    // Example 1
    expect(arraySign([-1, -2, -3, -4, 3, 2, 1])).toEqual(1);

    // Example 2
    expect(arraySign([1, 5, 0, 2, -3])).toEqual(0);

    // Example 3
    expect(arraySign([-1, 1, -1, 1, -1])).toEqual(-1);

    // Additional test cases
    expect(
      arraySign([
        1, 28, -91, -62, -36, -1, -84, -90, -92, 61, 6, -58, -60, 2, 51, -15,
        -18, -81, 87, 84, 100, -84, -13, -87, -33, 72, -72, -59, -79, 28, -69,
        -97, -93, 17, 67, 11, -12, 19, 5, 42, -85, 71, -77, -82, 26, -58, -51,
        -14, 63, -85, -86, 66, 47, 57, -86, -25, -75, 59, -17, -71, 89, -78,
        -42, 30, 39, 61, -96, -30, -29, -92, -90, 69, 20, 65, 32, 92, 44, -71,
        -18, 87, -86, 23, -96, -21, -49, -96, -98, 35, -11, -1, 81, -48, 68, 5,
        75, 57, -30, -7, 32, 86, -29, -86, -61, 45, -31, -93, -26, -9, 86, 57,
        -52, 75, 68, -58, 14, 27, -94, 47, -38, -44, 75, -83, 21, -83, 43, 62,
        74, 97, 78, 43, 54, 28, 64, -19, -89, 88, 68, 18, -96, -83, -25, -71,
        88, -84, -24, -61, 72, -90, -56, 29, 46, 56, 51, 16, 66, -2, 65, -95,
        16, 51, 42, 61, 99, 89, -93, 59, -99, 69, 26, -61, 21, 41, 40, -4, -49,
        3, -96, 57, 65, 72, -41, -77, -4, 61, 71, -88, 21, -95, 38, 64, 92, 0,
        -63,
      ]),
    ).toEqual(0);
  });

  it("should handle edge cases", () => {
    // Edge case: Single element array with 0
    expect(arraySign([0])).toEqual(0);

    // Edge case: Single element array with positive number
    expect(arraySign([5])).toEqual(1);

    // Edge case: Single element array with negative number
    expect(arraySign([-5])).toEqual(-1);

    // Edge case: Array with two elements with different signs
    expect(arraySign([-5, 5])).toEqual(1);

    // Edge case: Array with two elements with same sign
    expect(arraySign([5, 5])).toEqual(1);
  });

  it("should handle constraints", () => {
    // Constraint: 1 <= nums.length <= 1000
    const largeArray = Array.from({ length: 1000 }, (_, i) =>
      i % 2 === 0 ? i : -i,
    );
    expect(arraySign(largeArray)).toEqual(0);

    // Constraint: -100 <= nums[i] <= 100
    const largeRangeArray = Array.from({ length: 100 }, (_, i) => i - 50);
    expect(arraySign(largeRangeArray)).toEqual(-1);

    // Constraint: All integers are unique
    expect(arraySign([1, 2, 3])).toEqual(1);
  });
});
