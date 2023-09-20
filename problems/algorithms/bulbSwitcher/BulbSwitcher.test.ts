// Source : https://leetcode.com/problems/bulb-switcher/
// Author : squxq
// Date   : 2023-09-20

import { bulbSwitch } from "./BulbSwitcher"; // Import the module where your function is defined.

describe("bulbSwitch function", () => {
  it("should return 31622 for n = 999999999", () => {
    expect(bulbSwitch(999999999)).toBe(31622);
  });

  it("should return 0 for n = 0", () => {
    expect(bulbSwitch(0)).toBe(0);
  });

  it("should return 1 for n = 1", () => {
    expect(bulbSwitch(1)).toBe(1);
  });

  it("should return 1 for n = 2", () => {
    expect(bulbSwitch(2)).toBe(1);
  });

  it("should return 2 for n = 3", () => {
    expect(bulbSwitch(3)).toBe(2);
  });

  it("should return 2 for n = 4", () => {
    expect(bulbSwitch(4)).toBe(2);
  });

  it("should return 2 for n = 5", () => {
    expect(bulbSwitch(5)).toBe(2);
  });

  it("should return 3 for n = 6", () => {
    expect(bulbSwitch(6)).toBe(3);
  });

  it("should return 3 for n = 7", () => {
    expect(bulbSwitch(7)).toBe(3);
  });

  it("should return 3 for n = 8", () => {
    expect(bulbSwitch(8)).toBe(3);
  });

  it("should return 3 for n = 9", () => {
    expect(bulbSwitch(9)).toBe(3);
  });

  it("should return 4 for n = 10", () => {
    expect(bulbSwitch(10)).toBe(4);
  });

  it("should handle very large values of n (performance test)", () => {
    const startTime = Date.now();
    expect(bulbSwitch(10000000)).toBeDefined();
    const endTime = Date.now();
    const executionTime = endTime - startTime;
    // Ensure the function executes in a reasonable time frame.
    expect(executionTime).toBeLessThan(100); // Adjust the threshold as needed.
  });
});
