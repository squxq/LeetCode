// Source : https://leetcode.com/problems/kth-largest-element-in-a-stream/
// Author : squxq
// Date   : 2023-11-04

/*****************************************************************************************************
 *
 * Design a class to find the k^th largest element in a stream. Note that it is the k^th largest
 * element in the sorted order, not the k^th distinct element.
 *
 * Implement KthLargest class:
 *
 * 	KthLargest(int k, int[] nums) Initializes the object with the integer k and the stream of
 * integers nums.
 * 	int add(int val) Appends the integer val to the stream and returns the element representing
 * the k^th largest element in the stream.
 *
 * Example 1:
 *
 * Input
 * ["KthLargest", "add", "add", "add", "add", "add"]
 * [[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]
 * Output
 * [null, 4, 5, 5, 8, 8]
 *
 * Explanation
 * KthLargest kthLargest = new KthLargest(3, [4, 5, 8, 2]);
 * kthLargest.add(3);   // return 4
 * kthLargest.add(5);   // return 5
 * kthLargest.add(10);  // return 5
 * kthLargest.add(9);   // return 8
 * kthLargest.add(4);   // return 8
 *
 * Constraints:
 *
 * 	1 <= k <= 10^4
 * 	0 <= nums.length <= 10^4
 * 	-10^4 <= nums[i] <= 10^4
 * 	-10^4 <= val <= 10^4
 * 	At most 10^4 calls will be made to add.
 * 	It is guaranteed that there will be at least k elements in the array when you search for
 * the k^th element.
 ******************************************************************************************************/

/** Previous submit:
class KthLargest {
    largest: number
    elements: number[]
    constructor(k: number, nums: number[]) {
        this.largest = k
        this.elements = nums
    }

    add(val: number): number {
        this.elements.push(val)
        this.elements.sort((a, b) => a - b)
        return this.elements[this.elements.length - this.largest]
    }
}
*/

export class KthLargest {
  k: number;
  heap: number[];
  constructor(k: number, nums: number[]) {
    this.k = k;
    this.heap = [];
    for (const num of nums) {
      this.add(num);
    }
  }

  add(val: number): number {
    if (this.heap.length < this.k) {
      this.heap.push(val);
      this.heapifyUp(this.heap.length - 1);
    } else if (val > (this.heap[0] as number)) {
      this.heap[0] = val;
      this.heapifyDown(0);
    }

    return this.heap[0] as number;
  }

  private heapifyUp(index: number): void {
    // get parent index of current element
    const parentIndex = Math.floor((index - 1) / 2);

    // compare the current element with its parent
    // if its smaller, swap them and continue heapifying
    if (
      parentIndex >= 0 &&
      (this.heap[index] as number) < (this.heap[parentIndex] as number)
    ) {
      [this.heap[index], this.heap[parentIndex]] = [
        this.heap[parentIndex] as number,
        this.heap[index] as number,
      ];
      this.heapifyUp(parentIndex);
    }
  }

  private heapifyDown(index: number): void {
    const leftChildIndex = 2 * index + 1;
    const rightChildIndex = 2 * index + 2;
    let smallest: number = index;

    // find the index of the smallest child (if smaller than current element)
    if (
      leftChildIndex < this.heap.length &&
      (this.heap[leftChildIndex] as number) < (this.heap[smallest] as number)
    ) {
      smallest = leftChildIndex;
    }
    if (
      rightChildIndex < this.heap.length &&
      (this.heap[rightChildIndex] as number) < (this.heap[smallest] as number)
    ) {
      smallest = rightChildIndex;
    }

    if (smallest !== index) {
      [this.heap[index], this.heap[smallest]] = [
        this.heap[smallest] as number,
        this.heap[index] as number,
      ];
      this.heapifyDown(smallest);
    }
  }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
