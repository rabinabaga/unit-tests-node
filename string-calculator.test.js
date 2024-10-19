const { stringCalculator } = require("./string-calculator");

describe("string-calculator", () => {
  test("should return 0 for the input ''", () => {
    expect(stringCalculator("")).toBe(0);
  });
});
