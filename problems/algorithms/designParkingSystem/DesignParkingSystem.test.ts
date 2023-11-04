// Source : https://leetcode.com/problems/design-parking-system/
// Author : squxq
// Date   : 2023-11-04

import { ParkingSystem } from "./DesignParkingSystem";

describe("ParkingSystem", () => {
  it("should allow parking for the first car of each type", () => {
    const parkingSystem = new ParkingSystem(1, 1, 1);
    expect(parkingSystem.addCar(1)).toBe(true); // Park a big car
    expect(parkingSystem.addCar(2)).toBe(true); // Park a medium car
    expect(parkingSystem.addCar(3)).toBe(true); // Park a small car
  });

  it("should allow parking multiple cars of the same type", () => {
    const parkingSystem = new ParkingSystem(2, 3, 2);
    expect(parkingSystem.addCar(2)).toBe(true); // Park a medium car
    expect(parkingSystem.addCar(2)).toBe(true); // Park another medium car
  });

  it("should return false when no more parking space is available for a specific type", () => {
    const parkingSystem = new ParkingSystem(1, 1, 1);
    expect(parkingSystem.addCar(1)).toBe(true); // Park a big car
    expect(parkingSystem.addCar(1)).toBe(false); // No more space for a big car
  });

  it("should handle the case when there is no parking space for a particular type", () => {
    const parkingSystem = new ParkingSystem(0, 1, 0);
    expect(parkingSystem.addCar(1)).toBe(false); // No space for a big car
    expect(parkingSystem.addCar(2)).toBe(true); // Park a medium car
  });

  it("should handle large values for parking space", () => {
    const parkingSystem = new ParkingSystem(1000, 1000, 1000);
    for (let i = 0; i < 1000; i++) {
      expect(parkingSystem.addCar(1)).toBe(true); // Park 1000 big cars
    }
  });

  it("should handle the maximum number of calls", () => {
    const parkingSystem = new ParkingSystem(1000, 1000, 1000);
    for (let i = 0; i < 1000; i++) {
      expect(parkingSystem.addCar(1)).toBe(true);
      expect(parkingSystem.addCar(2)).toBe(true);
      expect(parkingSystem.addCar(3)).toBe(true);
    }
    expect(parkingSystem.addCar(1)).toBe(false); // No more space for a big car
  });
});
