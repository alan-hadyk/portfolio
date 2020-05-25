import breakpoints from "<styles>/variables/breakpoints";

describe("styles / variables / breakpoints", () => {
  test("should have correct breakpoints", () => {
    expect(breakpoints).toEqual({
      breakpoint1056: "1056px",
      breakpoint1920: "1920px"
    });
  });
});