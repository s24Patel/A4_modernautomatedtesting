import calculateCanvasPerimeter from "./calculateCanvasPerimeter";

describe("calculateCanvasPerimeter", () => {
  test("returns correct result", () => {
    const result = calculateCanvasPerimeter("10", "100");
    expect(result).toEqual(220);
  });

  test("throws error for invalid dimensions", () => {
    expect(() => calculateCanvasPerimeter("invalid", "100")).toThrow("Invalid dimensions provided.");
    expect(() => calculateCanvasPerimeter("10", "invalid")).toThrow("Invalid dimensions provided.");
  });
});