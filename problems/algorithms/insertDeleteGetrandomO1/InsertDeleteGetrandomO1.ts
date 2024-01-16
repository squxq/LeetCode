// Source : https://leetcode.com/problems/insert-delete-getrandom-o1/
// Author : francisco
// Date   : 2024-01-16

/*****************************************************************************************************
 *
 * Implement the RandomizedSet class:
 *
 * 	RandomizedSet() Initializes the RandomizedSet object.
 * 	bool insert(int val) Inserts an item val into the set if not present. Returns true if the
 * item was not present, false otherwise.
 * 	bool remove(int val) Removes an item val from the set if present. Returns true if the item
 * was present, false otherwise.
 * 	int getRandom() Returns a random element from the current set of elements (it's guaranteed
 * that at least one element exists when this method is called). Each element must have the same
 * probability of being returned.
 *
 * You must implement the functions of the class such that each function works in average O(1) time
 * complexity.
 *
 * Example 1:
 *
 * Input
 * ["RandomizedSet", "insert", "remove", "insert", "getRandom", "remove", "insert", "getRandom"]
 * [[], [1], [2], [2], [], [1], [2], []]
 * Output
 * [null, true, false, true, 2, true, false, 2]
 *
 * Explanation
 * RandomizedSet randomizedSet = new RandomizedSet();
 * randomizedSet.insert(1); // Inserts 1 to the set. Returns true as 1 was inserted successfully.
 * randomizedSet.remove(2); // Returns false as 2 does not exist in the set.
 * randomizedSet.insert(2); // Inserts 2 to the set, returns true. Set now contains [1,2].
 * randomizedSet.getRandom(); // getRandom() should return either 1 or 2 randomly.
 * randomizedSet.remove(1); // Removes 1 from the set, returns true. Set now contains [2].
 * randomizedSet.insert(2); // 2 was already in the set, so return false.
 * randomizedSet.getRandom(); // Since 2 is the only number in the set, getRandom() will always return
 * 2.
 *
 * Constraints:
 *
 * 	-2^31 <= val <= 2^31 - 1
 * 	At most 2 * 10^5 calls will be made to insert, remove, and getRandom.
 * 	There will be at least one element in the data structure when getRandom is called.
 ******************************************************************************************************/

export class RandomizedSet {
  list: number[];
  map: Map<number, number>;

  constructor() {
    this.list = [];
    this.map = new Map();
  }

  search(val: number): boolean {
    return this.map.has(val);
  }

  insert(val: number): boolean {
    if (this.search(val)) return false;

    this.list.push(val);
    this.map.set(val, this.list.length - 1);

    return true;
  }

  remove(val: number): boolean {
    if (!this.search(val)) return false;

    const index: number = this.map.get(val) as number;

    this.list[index] = this.list[this.list.length - 1] as number;
    this.map.set(this.list[index] as number, index);
    this.list.pop();
    this.map.delete(val);

    return true;
  }

  getRandom(): number {
    const randomIndex: number = Math.floor(Math.random() * this.list.length);

    return this.list[randomIndex] as number;
  }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
