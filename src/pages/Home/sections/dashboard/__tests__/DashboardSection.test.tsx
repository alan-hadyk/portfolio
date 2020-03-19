import React from "react";
import { RenderResult } from "@testing-library/react";

import DashboardSection from "<pages>/Home/sections/dashboard/DashboardSection";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

jest.mock("vivus");

describe("pages / Home / sections / dashboard / DashboardSection", () => {
  test("should have correct structure", () => {
    const { 
      Code,
      Console,
      Coords,
      FlexContainers,
      Section,
      SpacingContainers,
      TechStack,
      Flux
    } = setup();

    expect(Section.children[0]).toEqual(SpacingContainers[0]);
    expect(SpacingContainers[0].children[0]).toEqual(FlexContainers[0]);
    expect(FlexContainers[0].children[0]).toEqual(TechStack);
    expect(FlexContainers[0].children[1]).toEqual(Coords);
    expect(FlexContainers[0].children[2]).toEqual(Flux);
    expect(FlexContainers[0].children[3]).toEqual(Code);

    expect(Section.children[1]).toEqual(SpacingContainers[1]);
    expect(SpacingContainers[1].children[0]).toEqual(FlexContainers[1]);
    expect(FlexContainers[1].children[0]).toEqual(Console);
  });

  describe("Section", () => {    
    describe("Props", () => {
      describe("id", () => {
        test("should equal dashboard", () => {
          const { Section } = setup();

          expect(Section.getAttribute("id")).toEqual("dashboard");
        });
      });

      describe("minHeight", () => {
        test("should have 100vh", () => {
          const { Section } = setup();

          expect(Section).toHaveStyleRule("min-height", "100vh");
        });
      });
    });
  });

  describe("SpacingContainers", () => {    
    describe("SpacingContainers[0]", () => {    
      describe("Props", () => {
        describe("paddingTop", () => {      
          test("should have 2.4rem", () => {
            const { SpacingContainers } = setup();

            expect(SpacingContainers[0]).toHaveStyleRule("padding-top", "2.4rem");
          });
        });
        
        describe("height", () => {      
          test("should have calc(17vh + 3.6rem)", () => {
            const { SpacingContainers } = setup();

            expect(SpacingContainers[0]).toHaveStyleRule("height", "calc(17vh + 3.6rem)");
          });
        });
      
      });
    });

    describe("SpacingContainers[1]", () => {    
      describe("Props", () => {
        describe("marginTop", () => {      
          test("should have 5.6rem", () => {
            const { SpacingContainers } = setup();

            expect(SpacingContainers[1]).toHaveStyleRule("margin-top", "5.6rem");
          });
        });
        
        describe("marginBottom", () => {      
          test("should have 4rem", () => {
            const { SpacingContainers } = setup();

            expect(SpacingContainers[1]).toHaveStyleRule("margin-bottom", "4rem");
          });
        });
      });
    });
  });

  describe("FlexContainers", () => {    
    describe("FlexContainers[0]", () => {    
      describe("Props", () => {
        describe("align-items", () => {      
          test("should have flex-start", () => {
            const { FlexContainers } = setup();
      
            expect(FlexContainers[0]).toHaveStyleRule("align-items", "flex-start");
          });
        });

        describe("flex-flow", () => {      
          test("should have row nowrap", () => {
            const { FlexContainers } = setup();
      
            expect(FlexContainers[0]).toHaveStyleRule("flex-flow", "row nowrap");
          });
        });

        describe("gap", () => {
          test("each child should have padding-left: 4.8rem (except the first item)", () => {
            const { FlexContainers } = setup();

            expect(FlexContainers[0]).toHaveStyleRule("padding-left", "4.8rem", {
              modifier: "& > *"
            });
            expect(FlexContainers[0]).toHaveStyleRule("padding-left", "0", {
              modifier: "& > *:first-child"
            });
          });
        });

        describe("height", () => {
          test("should have row 22rem", () => {
            const { FlexContainers } = setup();

            expect(FlexContainers[0]).toHaveStyleRule("height", "22rem");
          });
        });

        describe("justify-content", () => {      
          test("should have center", () => {
            const { FlexContainers } = setup();
      
            expect(FlexContainers[0]).toHaveStyleRule("justify-content", "center");
          });
        });
      });
    });

    describe("FlexContainers[1]", () => {    
      describe("Props", () => {
        describe("align-items", () => {      
          test("should have center", () => {
            const { FlexContainers } = setup();
      
            expect(FlexContainers[1]).toHaveStyleRule("align-items", "center");
          });
        });

        describe("flex-flow", () => {      
          test("should have row nowrap", () => {
            const { FlexContainers } = setup();
      
            expect(FlexContainers[1]).toHaveStyleRule("flex-flow", "row nowrap");
          });
        });

        describe("justify-content", () => {      
          test("should have center", () => {
            const { FlexContainers } = setup();
      
            expect(FlexContainers[1]).toHaveStyleRule("justify-content", "center");
          });
        });
      });
    });

  });
});

interface Setup extends RenderResult {
  Code: Element;
  Console: Element;
  Coords: Element;
  FlexContainers: Element[];
  Flux: Element;
  Section: Element;
  SpacingContainers: Element[];
  TechStack: Element;
}

function setup(): Setup {
  const utils: RenderResult = renderWithTheme(
    <DashboardSection />
  );

  const { queryByTestId, queryAllByTestId }: RenderResult = utils;
  const Code: Element = queryByTestId("Code");
  const Coords: Element = queryByTestId("Coords");
  const Console: Element = queryByTestId("Console");
  const FlexContainers: Element[] = queryAllByTestId("DashboardSectionFlexContainer");
  const Section: Element = queryByTestId("Section");
  const SpacingContainers: Element[] = queryAllByTestId("DashboardSectionSpacingContainer");
  const TechStack: Element = queryByTestId("TechStack");
  const Flux: Element = queryByTestId("Flux");

  return {
    ...utils,
    Code,
    Console,
    Coords,
    FlexContainers,
    Flux,
    Section,
    SpacingContainers,
    TechStack
  };
}
