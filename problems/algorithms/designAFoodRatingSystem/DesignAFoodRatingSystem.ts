// Source : https://leetcode.com/problems/design-a-food-rating-system/
// Author : francisco
// Date   : 2023-12-19

/*****************************************************************************************************
 *
 * Design a food rating system that can do the following:
 *
 * 	Modify the rating of a food item listed in the system.
 * 	Return the highest-rated food item for a type of cuisine in the system.
 *
 * Implement the FoodRatings class:
 *
 * 	FoodRatings(String[] foods, String[] cuisines, int[] ratings) Initializes the system. The
 * food items are described by foods, cuisines and ratings, all of which have a length of n.
 *
 * 		foods[i] is the name of the i^th food,
 * 		cuisines[i] is the type of cuisine of the i^th food, and
 * 		ratings[i] is the initial rating of the i^th food.
 *
 * 	void changeRating(String food, int newRating) Changes the rating of the food item with the
 * name food.
 * 	String highestRated(String cuisine) Returns the name of the food item that has the highest
 * rating for the given type of cuisine. If there is a tie, return the item with the lexicographically
 * smaller name.
 *
 * Note that a string x is lexicographically smaller than string y if x comes before y in dictionary
 * order, that is, either x is a prefix of y, or if i is the first position such that x[i] != y[i],
 * then x[i] comes before y[i] in alphabetic order.
 *
 * Example 1:
 *
 * Input
 * ["FoodRatings", "highestRated", "highestRated", "changeRating", "highestRated", "changeRating",
 * "highestRated"]
 * [[["kimchi", "miso", "sushi", "moussaka", "ramen", "bulgogi"], ["korean", "japanese", "japanese",
 * "greek", "japanese", "korean"], [9, 12, 8, 15, 14, 7]], ["korean"], ["japanese"], ["sushi", 16],
 * ["japanese"], ["ramen", 16], ["japanese"]]
 * Output
 * [null, "kimchi", "ramen", null, "sushi", null, "ramen"]
 *
 * Explanation
 * FoodRatings foodRatings = new FoodRatings(["kimchi", "miso", "sushi", "moussaka", "ramen",
 * "bulgogi"], ["korean", "japanese", "japanese", "greek", "japanese", "korean"], [9, 12, 8, 15, 14,
 * 7]);
 * foodRatings.highestRated("korean"); // return "kimchi"
 *                                     // "kimchi" is the highest rated korean food with a rating of 9.
 * foodRatings.highestRated("japanese"); // return "ramen"
 *                                       // "ramen" is the highest rated japanese food with a rating
 * of 14.
 * foodRatings.changeRating("sushi", 16); // "sushi" now has a rating of 16.
 * foodRatings.highestRated("japanese"); // return "sushi"
 *                                       // "sushi" is the highest rated japanese food with a rating
 * of 16.
 * foodRatings.changeRating("ramen", 16); // "ramen" now has a rating of 16.
 * foodRatings.highestRated("japanese"); // return "ramen"
 *                                       // Both "sushi" and "ramen" have a rating of 16.
 *                                       // However, "ramen" is lexicographically smaller than "sushi".
 *
 * Constraints:
 *
 * 	1 <= n <= 2 * 10^4
 * 	n == foods.length == cuisines.length == ratings.length
 * 	1 <= foods[i].length, cuisines[i].length <= 10
 * 	foods[i], cuisines[i] consist of lowercase English letters.
 * 	1 <= ratings[i] <= 10^8
 * 	All the strings in foods are distinct.
 * 	food will be the name of a food item in the system across all calls to changeRating.
 * 	cuisine will be a type of cuisine of at least one food item in the system across all calls
 * to highestRated.
 * 	At most 2 * 10^4 calls in total will be made to changeRating and highestRated.
 ******************************************************************************************************/

/* eslint-disable @typescript-eslint/no-non-null-assertion */
/**
 * Runtime: 1176ms (100.00%)
 * Memory: 109.27MB (100.00%)
 */
export class FoodRatings {
  foods: Record<string, string>;
  cuisines: Record<string, Array<{ food: string; rating: number }>>;

  /**
   * @param {string[]} foods
   * @param {string[]} cuisines
   * @param {number[]} ratings
   * ASSUME: foods.length === cuisines.length === ratings.length
   */
  constructor(foods: string[], cuisines: string[], ratings: number[]) {
    this.foods = {};
    for (let index: number = 0; index < foods.length; index++) {
      this.foods[foods[index] as string] = cuisines[index] as string;
    }

    this.cuisines = {};
    for (let index: number = 0; index < cuisines.length; index++) {
      if (this.cuisines[cuisines[index] as string] !== undefined) {
        this.insert(
          this.cuisines[cuisines[index] as string]!,
          foods[index] as string,
          ratings[index] as number,
        );
      } else {
        this.cuisines[cuisines[index] as string] = [
          { food: foods[index] as string, rating: ratings[index] as number },
        ];
      }
    }
  }

  /**
     * @private
     * @param {Array<{ food: string, rating: number }>} heap
     * @param {string} food
     * @param {number} rating
     * @returns {void}
     * insert a given food and its rating into the heap

     * Stub:
     insert(heap: Array<{ food: string, rating: number }>, food: string, rating: number): void {(...)}
     */
  private insert(
    heap: Array<{ food: string; rating: number }>,
    food: string,
    rating: number,
  ): void {
    heap.push({ food, rating });
    this.heapifyUp(heap);
  }

  /**
     * @private
     * @param {Array<{ food: string, rating: number }>} heap
     * @param {number} startIndex
     * @returns {void}
     * <...>

     * Stub:
     heapifyUp(heap: Array<{ food: string, rating: number }>, startIndex: number = heap.length - 1): void {(...)}
     */
  private heapifyUp(
    heap: Array<{ food: string; rating: number }>,
    startIndex: number = heap.length - 1,
  ): void {
    let currentIndex: number = startIndex;

    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);
      if (
        heap[currentIndex]!.rating > heap[parentIndex]!.rating ||
        (heap[currentIndex]!.rating === heap[parentIndex]!.rating &&
          this.lexicographicallySmaller(
            heap[currentIndex]!.food,
            heap[parentIndex]!.food,
          ))
      ) {
        this.swap(heap, currentIndex, parentIndex);
        currentIndex = parentIndex;
      } else break;
    }
  }

  /**
     * @private
     * @param {Array<{ food: string, rating: number }>} heap
     * @param {number} startIndex
     * @returns {void}
     * <...>

     * Stub:
     heapifyDown(heap: Array<{ food: string, rating: number }>, startIndex: number = 0): void {(...)}
     */
  private heapifyDown(
    heap: Array<{ food: string; rating: number }>,
    startIndex: number = 0,
  ): void {
    let currentIndex: number = startIndex;

    while (true) {
      const leftChildIndex: number = 2 * currentIndex + 1;
      const rightChildIndex: number = 2 * currentIndex + 2;
      let maxIndex: number = currentIndex;

      if (
        leftChildIndex < heap.length &&
        (heap[leftChildIndex]!.rating > heap[maxIndex]!.rating ||
          (heap[leftChildIndex]!.rating === heap[maxIndex]!.rating &&
            this.lexicographicallySmaller(
              heap[leftChildIndex]!.food,
              heap[maxIndex]!.food,
            )))
      ) {
        maxIndex = leftChildIndex;
      }

      if (
        rightChildIndex < heap.length &&
        (heap[rightChildIndex]!.rating > heap[maxIndex]!.rating ||
          (heap[rightChildIndex]!.rating === heap[maxIndex]!.rating &&
            this.lexicographicallySmaller(
              heap[rightChildIndex]!.food,
              heap[maxIndex]!.food,
            )))
      ) {
        maxIndex = rightChildIndex;
      }

      if (currentIndex !== maxIndex) {
        this.swap(heap, currentIndex, maxIndex);
        currentIndex = maxIndex;
      } else break;
    }
  }

  /**
     * @private
     * @param {Array<{ food: string, rating: number }>} heap
     * @param {string} food
     * @param {number} newRating
     * @returns {void}
     * <...>

     * Stub:
     changePriority(heap: Array<{ food: string, rating: number }>, food: string, newRating: number): void {(...)}
     */
  private changePriority(
    heap: Array<{ food: string; rating: number }>,
    food: string,
    newRating: number,
  ): void {
    const index: number = this.findIndex(heap, food);
    if (index !== -1) {
      heap[index]!.rating = newRating;
      this.heapifyUp(heap, index);
      this.heapifyDown(heap, index);
    }
  }

  /**
     * @private
     * @param {Array<{ food: string, rating: number }>} heap
     * @param {string} food
     * @returns {number}
     * find index of the given string, food, in the given heap, heap
     
     * Stub:
     findIndex(heap: Array<{ food: string, rating: number }>, food: string): number {(...) return 0}
     */
  private findIndex(
    heap: Array<{ food: string; rating: number }>,
    food: string,
  ): number {
    for (let index: number = 0; index < heap.length; index++) {
      if (heap[index]!.food === food) return index;
    }
    return -1;
  }

  /**
     * @private
     * @param {Array<{ food: string, rating: number }>} heap
     * @param {number} index1
     * @param {number} index2
     * @returns {void}
     * <...>

     * Stub:
     swap(heap: Array<{ food: string, rating: number }>, index1: number, index2: number): void {(...)}
     */
  private swap(
    heap: Array<{ food: string; rating: number }>,
    index1: number,
    index2: number,
  ): void {
    const temp: { food: string; rating: number } = heap[index1]!;
    heap[index1] = heap[index2] as { food: string; rating: number };
    heap[index2] = temp;
  }

  /**
     * @param {string} food
     * @param {number} newRating
     * @returns {void}
     * modify the rating of a food item listed in the system, with the given name food

     * Stub:
     changeRating(food: string, newRating: number): void {(...)}
     */
  changeRating(food: string, newRating: number): void {
    this.changePriority(
      this.cuisines[this.foods[food] as string]!,
      food,
      newRating,
    );
  }

  /**
     * @param {string} cuisine
     * return the name of the food item that has the highest rating fot the given type of cuisine
     * NOTE: if there is a tie return the item with the lexicographically smaller name

     * Stub:
     highestRated(cuisine: string): string {(...) return ""}

     * Tests:
     * for new FoodRatings(["kimchi","miso","sushi","moussaka","ramen","bulgogi"],["korean","japanese","japanese","greek","japanese","korean"],[9,12,8,15,14,7]):

     * I: cuisine = "greek" -> O: "moussaka"
     * I: cuisine = "japanese" -> O: "ramen"
     * I: cuisine = "korean" -> O: "kimchi"
     */
  highestRated(cuisine: string): string {
    return this.cuisines[cuisine]![0]!.food;
  }

  /**
     * @private
     * @param {string} a
     * @param {string} b
     * @returns {boolean}
     * given two strings, a & b, return true if a is lexicographically smaller than b
     * A string x is lexicographically smaller than string y if either x is a prefix of y
     * or if i is the first position such that x[i] !== y[i], then x[i] comes before y[i]

     * Stub:
     function lexicographicallySmaller(a: string, b: string): string {return ""}
     */
  private lexicographicallySmaller(a: string, b: string): boolean {
    const length: number = Math.min(a.length, b.length);
    for (let i: number = 0; i < length; i++) {
      if (a[i] !== b[i]) {
        return a[i]!.charCodeAt(0) < b[i]!.charCodeAt(0);
      }
    }

    return a.length <= b.length;
  }
}

/**
 * Your FoodRatings object will be instantiated and called as such:
 * var obj = new FoodRatings(foods, cuisines, ratings)
 * obj.changeRating(food,newRating)
 * var param_2 = obj.highestRated(cuisine)
 */
