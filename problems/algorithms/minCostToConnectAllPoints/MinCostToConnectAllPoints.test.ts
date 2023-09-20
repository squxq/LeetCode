// Source : https://leetcode.com/problems/min-cost-to-connect-all-points/
// Author : squxq
// Date   : 2023-09-20

import { minCostConnectPoints } from "./MinCostToConnectAllPoints"; // Import the module where your function is defined.

describe("minCostConnectPoints function", () => {
  it("should return 0 for a single point", () => {
    expect(minCostConnectPoints([[0, 0]])).toBe(0);
  });

  it("should return 0 for two points", () => {
    expect(
      minCostConnectPoints([
        [0, 0],
        [1, 1],
      ]),
    ).toBe(0);
  });

  it("should return the correct cost for three points in a line", () => {
    expect(
      minCostConnectPoints([
        [0, 0],
        [1, 1],
        [2, 2],
      ]),
    ).toBe(2);
  });

  it("should return the correct cost for three points in a triangle", () => {
    expect(
      minCostConnectPoints([
        [0, 0],
        [1, 0],
        [0, 1],
      ]),
    ).toBe(2);
  });

  it("should return the correct cost for four points in a square", () => {
    expect(
      minCostConnectPoints([
        [0, 0],
        [1, 0],
        [1, 1],
        [0, 1],
      ]),
    ).toBe(4);
  });

  it("should return the correct cost for the provided example 1", () => {
    expect(
      minCostConnectPoints([
        [0, 0],
        [2, 2],
        [3, 10],
        [5, 2],
        [7, 0],
      ]),
    ).toBe(20);
  });

  it("should return the correct cost for the provided example 2", () => {
    expect(
      minCostConnectPoints([
        [3, 12],
        [-2, 5],
        [-4, 1],
      ]),
    ).toBe(18);
  });

  it("should return the correct cost for a large number of points", () => {
    const points = [];
    const n = 1000; // Adjust n as needed.
    for (let i = 0; i < n; i++) {
      points.push([i, i]);
    }
    // Expected cost for connecting points in a line: 1998000
    expect(minCostConnectPoints(points)).toBe(1998000);
  });

  it("should handle very large values of n (performance test)", () => {
    const points = [];
    const n = 1000; // Adjust n as needed.
    for (let i = 0; i < n; i++) {
      points.push([i, i]);
    }
    const startTime = Date.now();
    expect(minCostConnectPoints(points)).toBeDefined();
    const endTime = Date.now();
    const executionTime = endTime - startTime;
    // Ensure the function executes in a reasonable time frame.
    expect(executionTime).toBeLessThan(1000); // Adjust the threshold as needed.
  });
});
