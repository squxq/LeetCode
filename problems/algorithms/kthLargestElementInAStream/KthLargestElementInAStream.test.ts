// Source : https://leetcode.com/problems/kth-largest-element-in-a-stream/
// Author : squxq
// Date   : 2023-11-04

import { KthLargest } from "./KthLargestElementInAStream";

describe("KthLargest", () => {
  it("should return the kth largest element in the stream", () => {
    const kthLargest = new KthLargest(3, [4, 5, 8, 2]);
    expect(kthLargest.add(3)).toEqual(4);
    expect(kthLargest.add(5)).toEqual(5);
    expect(kthLargest.add(10)).toEqual(5);
    expect(kthLargest.add(9)).toEqual(8);
    expect(kthLargest.add(4)).toEqual(8);
  });

  it("should handle the edge case with k=1 and an empty array", () => {
    const kthLargest = new KthLargest(1, []);
    expect(kthLargest.add(3)).toEqual(3);
  });

  it("should handle adding elements smaller than the current kth largest", () => {
    const kthLargest = new KthLargest(2, [5, 6]);
    expect(kthLargest.add(3)).toEqual(5);
    expect(kthLargest.add(4)).toEqual(5);
  });

  it("should handle adding elements larger than the current kth largest", () => {
    const kthLargest = new KthLargest(2, [3, 4]);
    expect(kthLargest.add(5)).toEqual(4);
    expect(kthLargest.add(6)).toEqual(5);
  });

  it("should handle adding elements that are equal to the current kth largest", () => {
    const kthLargest = new KthLargest(2, [3, 4]);
    expect(kthLargest.add(4)).toEqual(4);
    expect(kthLargest.add(4)).toEqual(4);
  });

  it("should handle adding elements in descending order", () => {
    const kthLargest = new KthLargest(3, [5, 4, 3, 2, 1]);
    expect(kthLargest.add(6)).toEqual(4);
    expect(kthLargest.add(7)).toEqual(5);
    expect(kthLargest.add(8)).toEqual(6);
  });

  it("should handle adding negative elements", () => {
    const kthLargest = new KthLargest(2, [-3, -2]);
    expect(kthLargest.add(-1)).toEqual(-2);
    expect(kthLargest.add(0)).toEqual(-1);
  });

  it("should handle large values of k and nums", () => {
    const kthLargest = new KthLargest(
      10000,
      Array.from({ length: 10000 }, (_, i) => i),
    );
    expect(kthLargest.add(10001)).toEqual(9999);
  });

  it("should handle the maximum constraints", () => {
    const kthLargest = new KthLargest(
      10000,
      Array.from({ length: 10000 }, (_, i) => i),
    );
    expect(kthLargest.add(-10001)).toEqual(9999);
  });
});
