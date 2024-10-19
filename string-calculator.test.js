const { stringCalculator } = require("./string-calculator");

describe("string-calculator", () => {
  test("should return 0 for the input ''", () => {
    expect(stringCalculator("")).toBe(0);
  });

  test("should return 3 for the input '3'", () => {
    expect(stringCalculator("3")).toBe(3);
  });
});
