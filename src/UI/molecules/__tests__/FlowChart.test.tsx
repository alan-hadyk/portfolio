import React from "react";
import { RenderResult } from "@testing-library/react";

import FlowChart from "UI/molecules/FlowChart";

import renderWithTheme from "helpers/tests/renderWithTheme";

describe("molecules / FlowChart", () => {
  test("should have correct structure", () => {
    const { FlexContainer, FlowChartIcon, SpacingContainer } = setup();

    expect(FlexContainer.children[0]).toEqual(SpacingContainer);
    expect(SpacingContainer.children[0]).toEqual(FlowChartIcon);
  });

  describe("FlexContainer", () => {
    describe("Props", () => {
      describe("align-items", () => {
        test("should have center", () => {
          const { FlexContainer } = setup();

          expect(FlexContainer).toHaveStyleRule("align-items", "center");
        });
      });

      describe("justify-content", () => {
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

  describe("SpacingContainer", () => {
    describe("Props", () => {
      describe("height", () => {
        test("should have 100%", () => {
          const { SpacingContainer } = setup();

          expect(SpacingContainer).toHaveStyleRule("height", "100%");
        });
      });

      describe("paddingBottom", () => {
        test("should have .8rem", () => {
          const { SpacingContainer } = setup();

          expect(SpacingContainer).toHaveStyleRule("padding-bottom", ".8rem");
        });
      });

      describe("paddingLeft", () => {
        test("should have .8rem", () => {
          const { SpacingContainer } = setup();

          expect(SpacingContainer).toHaveStyleRule("padding-left", ".8rem");
        });
      });

      describe("paddingRight", () => {
        test("should have .8rem", () => {
          const { SpacingContainer } = setup();

          expect(SpacingContainer).toHaveStyleRule("padding-right", ".8rem");
        });
      });

      describe("paddingTop", () => {
        test("should have .8rem", () => {
          const { SpacingContainer } = setup();

          expect(SpacingContainer).toHaveStyleRule("padding-top", ".8rem");
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

  describe("FlowChartIcon", () => {
    describe("Styles", () => {
      describe("display", () => {
        test("should have block", () => {
          const { FlowChartIcon } = setup();

          expect(FlowChartIcon).toHaveStyleRule("display", "block");
        });
      });

      describe("height", () => {
        test("should have 100%", () => {
          const { FlowChartIcon } = setup();

          expect(FlowChartIcon).toHaveStyleRule("height", "100%");
        });
      });

      describe("margin", () => {
        test("should have 0 auto", () => {
          const { FlowChartIcon } = setup();

          expect(FlowChartIcon).toHaveStyleRule("margin", "0 auto");
        });
      });

      describe("width", () => {
        test("should have 100%", () => {
          const { FlowChartIcon } = setup();

          expect(FlowChartIcon).toHaveStyleRule("width", "100%");
        });
      });
    });

    describe("Props", () => {
      describe("id", () => {
        test("should have flow-chart", () => {
          const { FlowChartIcon } = setup();

          expect(FlowChartIcon.getAttribute("id")).toEqual("flow-chart");
        });
      });

      describe("src", () => {
        test("should have /images/svg/Flux-FlowChart.svg", () => {
          const { FlowChartIcon } = setup();

          expect(FlowChartIcon.getAttribute("src")).toEqual(
            "/images/svg/Flux-FlowChart.svg"
          );
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  FlexContainer: Element;
  FlowChartIcon: SVGSVGElement;
  SpacingContainer: Element;
}

function setup(): Setup {
  const utils: RenderResult = renderWithTheme(<FlowChart />);

  const { queryByTestId }: RenderResult = utils;
  const FlexContainer: Element = queryByTestId("FlowChart");
  const FlowChartIcon: SVGSVGElement = document.querySelector("img#flow-chart");
  const SpacingContainer: Element = queryByTestId("FlowChartSpacingContainer");

  return {
    ...utils,
    FlexContainer,
    FlowChartIcon,
    SpacingContainer
  };
}
