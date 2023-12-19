// Source : https://leetcode.com/problems/design-a-food-rating-system/
// Author : francisco
// Date   : 2023-12-19

import { FoodRatings } from "./DesignAFoodRatingSystem";

describe("design a food rating system", () => {
  test("example 1", () => {
    const obj: FoodRatings = new FoodRatings(
      ["kimchi", "miso", "sushi", "moussaka", "ramen", "bulgogi"],
      ["korean", "japanese", "japanese", "greek", "japanese", "korean"],
      [9, 12, 8, 15, 14, 7],
    );

    expect(obj.highestRated("korean")).toBe("kimchi");
    expect(obj.highestRated("japanese")).toBe("ramen");

    obj.changeRating("sushi", 16);

    expect(obj.highestRated("japanese")).toBe("sushi");

    obj.changeRating("ramen", 16);

    expect(obj.highestRated("japanese")).toBe("ramen");
  });

  test("example 2", () => {
    const obj: FoodRatings = new FoodRatings(
      ["kimchi", "miso", "sushi", "moussaka", "ramen", "bulgogi"],
      ["korean", "japanese", "japanese", "greek", "japanese", "korean"],
      [9, 12, 8, 15, 14, 7],
    );

    expect(obj.highestRated("greek")).toBe("moussaka");
    expect(obj.highestRated("japanese")).toBe("ramen");
    expect(obj.highestRated("korean")).toBe("kimchi");
  });
});
