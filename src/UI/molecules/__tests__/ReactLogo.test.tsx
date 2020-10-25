import React from "react";
import { RenderResult } from "@testing-library/react";

import ReactLogo from "molecules/ReactLogo";

import renderWithTheme from "helpers/tests/renderWithTheme";

describe("molecules / ReactLogo", () => {
  test("should have correct structure", () => {
    const {
      FlexContainer,
      IconContainer,
      ReactLogoIcon,
      SpacingContainer
    } = setup();

    expect(SpacingContainer.children[0]).toEqual(FlexContainer);
    expect(FlexContainer.children[0]).toEqual(IconContainer);
    expect(IconContainer.children[0]).toEqual(ReactLogoIcon);
  });

  describe("SpacingContainer", () => {
    describe("Props", () => {
      describe("height", () => {
        test("should have 100%", () => {
          const { SpacingContainer } = setup();

          expect(SpacingContainer).toHaveStyleRule("height", "100%");
        });
      });

      describe("paddingBottom", () => {
        test("should have 1vh", () => {
          const { SpacingContainer } = setup();

          expect(SpacingContainer).toHaveStyleRule("padding-bottom", "1vh");
        });
      });

      describe("paddingLeft", () => {
        test("should have 1vw", () => {
          const { SpacingContainer } = setup();

          expect(SpacingContainer).toHaveStyleRule("padding-left", "1vw");
        });
      });

      describe("paddingRight", () => {
        test("should have 1vw", () => {
          const { SpacingContainer } = setup();

          expect(SpacingContainer).toHaveStyleRule("padding-right", "1vw");
        });
      });

      describe("paddingTop", () => {
        test("should have 1vh", () => {
          const { SpacingContainer } = setup();

          expect(SpacingContainer).toHaveStyleRule("padding-top", "1vh");
        });
      });

      describe("width", () => {
        test("should have 100%", () => {
          const { SpacingContainer } = setup();

          expect(SpacingContainer).toHaveStyleRule("width", "100%");
        });
      });
    });
  });

  describe("FlexContainer", () => {
    describe("Props", () => {
      describe("alignItems", () => {
        test("should have center", () => {
          const { FlexContainer } = setup();

          expect(FlexContainer).toHaveStyleRule("align-items", "center");
        });
      });

      describe("justifyContent", () => {
        test("should have center", () => {
          const { FlexContainer } = setup();

          expect(FlexContainer).toHaveStyleRule("justify-content", "center");
        });
      });

      describe("height", () => {
        test("should have 100%", () => {
          const { FlexContainer } = setup();

          expect(FlexContainer).toHaveStyleRule("height", "100%");
        });
      });
    });
  });

  describe("ReactLogoIcon", () => {
    test("should render correct SVG", () => {
      const { ReactLogoIcon } = setup();

      expect(ReactLogoIcon.textContent).toEqual("Icon-ReactLogo.svg");
    });

    describe("Props", () => {
      describe.skip("animationTime", () => {
        test("should have 3600ms", () => {
          const { IconContainer } = setup();

          expect(IconContainer).toHaveStyleRule("animation-duration", "3600ms");
        });
      });

      describe("height", () => {
        test("should have 100%", () => {
          const { IconContainer } = setup();

          expect(IconContainer).toHaveStyleRule("height", "100%");
        });
      });

      describe("isResponsive", () => {
        describe("height", () => {
          test("should have 100%", () => {
            const { IconContainer } = setup();

            expect(IconContainer).toHaveStyleRule("height", "100%", {
              modifier: "svg"
            });
          });
        });

        describe("width", () => {
          test("should have 100%", () => {
            const { IconContainer } = setup();

            expect(IconContainer).toHaveStyleRule("width", "100%", {
              modifier: "svg"
            });
          });
        });
      });

      describe.skip("shouldDisplayGlowAnimation", () => {
        describe("animation-delay", () => {
          test("should have 3600ms", () => {
            const { IconContainer } = setup();

            expect(IconContainer).toHaveStyleRule("animation-delay", "0ms", {
              modifier: "svg"
            });
          });
        });

        describe("animation-duration", () => {
          test("should have 3600ms", () => {
            const { IconContainer } = setup();

            expect(IconContainer).toHaveStyleRule(
              "animation-duration",
              "3600ms",
              {
                modifier: "svg"
              }
            );
          });
        });

        describe("animation-iteration-count", () => {
          test("should have infinite", () => {
            const { IconContainer } = setup();

            expect(IconContainer).toHaveStyleRule(
              "animation-iteration-count",
              "infinite",
              {
                modifier: "svg"
              }
            );
          });
        });

        describe("animation-timing-function", () => {
          test("should have ease-in-out", () => {
            const { IconContainer } = setup();

            expect(IconContainer).toHaveStyleRule(
              "animation-timing-function",
              "ease-in-out",
              {
                modifier: "svg"
              }
            );
          });
        });
      });

      describe.skip("shouldRotate", () => {
        describe("animation-duration", () => {
          test("should have 3600ms", () => {
            const { IconContainer } = setup();

            expect(IconContainer).toHaveStyleRule(
              "animation-duration",
              "3600ms"
            );
          });
        });

        describe("animation-iteration-count", () => {
          test("should have infinite", () => {
            const { IconContainer } = setup();

            expect(IconContainer).toHaveStyleRule(
              "animation-iteration-count",
              "infinite"
            );
          });
        });

        describe("animation-timing-function", () => {
          test("should have linear", () => {
            const { IconContainer } = setup();

            expect(IconContainer).toHaveStyleRule(
              "animation-timing-function",
              "linear"
            );
          });
        });
      });

      describe("width", () => {
        test("should have 100%", () => {
          const { IconContainer } = setup();

          expect(IconContainer).toHaveStyleRule("width", "100%");
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  FlexContainer: Element;
  IconContainer: Element;
  ReactLogoIcon: SVGSVGElement;
  SpacingContainer: Element;
}

function setup(): Setup {
  const utils: RenderResult = renderWithTheme(<ReactLogo />);

  const { queryByTestId }: RenderResult = utils;
  const FlexContainer: Element = queryByTestId("ReactLogoFlexContainer");
  const IconContainer: Element = queryByTestId("IconContainer");
  const ReactLogoIcon: SVGSVGElement = document.querySelector("svg");
  const SpacingContainer: Element = queryByTestId("ReactLogo");

  return {
    ...utils,
    FlexContainer,
    IconContainer,
    ReactLogoIcon,
    SpacingContainer
  };
}
