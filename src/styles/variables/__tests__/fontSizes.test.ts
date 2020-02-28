import fontSizes from "<styles>/variables/fontSizes";

describe("styles / variables / fontSizes", () => {
  test("should have correct fonts", () => {
    expect(fontSizes).toEqual({
      font16: "16px",
      font20: "20px",
      font24: "24px",
      font28: "28px",
      font72: "72px"
    });
  });
});