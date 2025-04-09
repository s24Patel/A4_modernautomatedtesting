import calculateCanvasDiagonal from "./calculateCanvasDiagonal";

describe("calculateCanvasDiagonal", () => {
  test("should calculate diagonal correctly for positive values", () => {
    expect(calculateCanvasDiagonal("3", "4")).toBeCloseTo(5);
    expect(calculateCanvasDiagonal("6", "8")).toBeCloseTo(10);
    expect(calculateCanvasDiagonal("5", "12")).toBeCloseTo(13);
  });

  test("should handle negative values correctly", () => {
    expect(calculateCanvasDiagonal("-3", "4")).toBeCloseTo(5);
    expect(calculateCanvasDiagonal("3", "-4")).toBeCloseTo(5);
    expect(calculateCanvasDiagonal("-3", "-4")).toBeCloseTo(5);
  });

  test("should handle non-numeric strings by returning NaN", () => {
    expect(calculateCanvasDiagonal("invalid", "4")).toBeNaN();
    expect(calculateCanvasDiagonal("3", "invalid")).toBeNaN();
  });
});