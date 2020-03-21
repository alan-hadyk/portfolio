import spacing from "<styles>/variables/spacing";

describe("styles / variables / spacing", () => {
  test("should have correct spacings", () => {
    expect(spacing).toEqual({
      spacing0: "0",
      spacing1: ".1rem",
      spacing2: ".2rem",
      spacing4: ".4rem",
      spacing8: ".8rem",
      spacing12: "1.2rem",
      spacing16: "1.6rem",
      spacing24: "2.4rem",
      spacing28: "2.8rem",
      spacing32: "3.2rem",
      spacing36: "3.6rem",
      spacing40: "4rem",
      spacing48: "4.8rem",
      spacing56: "5.6rem",
      spacing60: "6rem",
      spacing64: "6.4rem",
      spacing72: "7.2rem",
      spacing80: "8rem",
      spacing96: "9.6rem",
      spacing120: "12rem",
      spacing184: "18.4rem",
      spacing220: "22rem",
      spacing240: "24rem",
      spacing248: "24.8rem"
    });
  });
});