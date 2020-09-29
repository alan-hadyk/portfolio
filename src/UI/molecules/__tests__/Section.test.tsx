import React from "react";
import {
  RenderResult
} from "@testing-library/react";

import Section from "<molecules>/Section";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

import {
  SectionProps
} from "<molecules>/__typings__/Section.d.ts";

describe("molecules / Section", () => {
  test("should have correct structure", () => {
    const { 
      ResponsiveDesktop,
      ResponsiveMobile,
      ResponsiveTablet,
      ResponsiveTv,
      SectionContainer,
      Texts,
      TitleSpacingContainers
    } = setup();

    expect(SectionContainer.children[0]).toEqual(ResponsiveTv);
    expect(SectionContainer.children[1]).toEqual(ResponsiveDesktop);
    expect(SectionContainer.children[2]).toEqual(ResponsiveTablet);
    expect(SectionContainer.children[3]).toEqual(ResponsiveMobile);

    expect(ResponsiveTv.children[0]).toEqual(TitleSpacingContainers[0]);
    expect(TitleSpacingContainers[0].children[0]).toEqual(Texts[0]);

    expect(ResponsiveDesktop.children[0]).toEqual(TitleSpacingContainers[1]);
    expect(TitleSpacingContainers[1].children[0]).toEqual(Texts[1]);

    expect(ResponsiveTablet.children[0]).toEqual(TitleSpacingContainers[2]);
    expect(TitleSpacingContainers[2].children[0]).toEqual(Texts[2]);

    expect(ResponsiveMobile.children[0]).toEqual(TitleSpacingContainers[3]);
    expect(TitleSpacingContainers[3].children[0]).toEqual(Texts[3]);
  });
 
  test("should render children", () => {
    const { 
      queryByTestId
    } = setup({
      children: <div data-testid="customChildren">Custom children</div>
    });

    expect(queryByTestId("customChildren")).toBeTruthy();
  });

  test("should not render TitleSpacingContainer and Text if there is no title", () => {
    const { 
      Texts,
      TitleSpacingContainers
    } = setup({
      title: undefined
    });

    TitleSpacingContainers.forEach((TitleSpacingContainer: Element) => {
      expect(TitleSpacingContainer).toBeFalsy();
    });

    Texts.forEach((Text: Element) => {
      expect(Text).toBeFalsy();
    });
  });

  describe("SpacingContainers", () => { 
    describe("SectionContainer", () => { 
      describe("Props", () => {
        describe("minHeight", () => {      
          test("should not have min-height by default", () => {
            const { SectionContainer } = setup();

            expect(SectionContainer).not.toHaveStyleRule("min-height");
          });

          test("should have min-height equal to minHeight prop - spacing value", () => {
            const { SectionContainer } = setup({
              minHeight: "spacing36"
            });

            expect(SectionContainer).toHaveStyleRule("min-height", "3.6rem");
          });

          test("should have min-height equal to minHeight prop - vh", () => {
            const { SectionContainer } = setup({
              minHeight: "100vh"
            });

            expect(SectionContainer).toHaveStyleRule("min-height", "100vh");
          });
        });
      });

      describe("Props", () => {
        describe("id", () => {      
          test("should have id equal to id prop", () => {
            const { SectionContainer } = setup({
              id: "SectionID"
            });

            expect(SectionContainer.getAttribute("id")).toEqual("SectionID");
          });
        });
      });
    });

    describe("TitleSpacingContainer", () => { 
      describe("Props", () => {
        describe("marginBottom", () => {      
          test("should have 9.6rem for tv, desktop and tablet", () => {
            const { TitleSpacingContainers } = setup();

            expect(TitleSpacingContainers[0]).toHaveStyleRule("margin-bottom", "9.6rem");
            expect(TitleSpacingContainers[1]).toHaveStyleRule("margin-bottom", "9.6rem");
            expect(TitleSpacingContainers[2]).toHaveStyleRule("margin-bottom", "9.6rem");
          });

          test("should have 4.8rem for mobile", () => {
            const { TitleSpacingContainers } = setup();

            expect(TitleSpacingContainers[3]).toHaveStyleRule("margin-bottom", "4.8rem");
          });
        });

        describe("paddingTop", () => {      
          test("should have 12rem for tv, desktop and tablet", () => {
            const { TitleSpacingContainers } = setup();

            expect(TitleSpacingContainers[0]).toHaveStyleRule("padding-top", "12rem");
            expect(TitleSpacingContainers[1]).toHaveStyleRule("padding-top", "12rem");
            expect(TitleSpacingContainers[2]).toHaveStyleRule("padding-top", "12rem");
          });

          test("should have 9.6rem for mobile", () => {
            const { TitleSpacingContainers } = setup();

            expect(TitleSpacingContainers[3]).toHaveStyleRule("padding-top", "9.6rem");
          });
        });
      });
    });
  });

  describe("Texts", () => { 
    describe("Props", () => {
      describe("color", () => {      
        test("should have #bcd8db", () => {
          const { Texts } = setup();

          Texts.forEach((Text: Element) => {
            expect(Text).toHaveStyleRule("color", "#bcd8db");
          });
        });
      });

      describe("fontFamily", () => {      
        test("should have ExanModifiedRegular,monospace", () => {
          const { Texts } = setup();

          Texts.forEach((Text: Element) => {
            expect(Text).toHaveStyleRule("font-family", "ExanModifiedRegular,monospace");
          });
        });
      });

      describe("fontSize", () => {      
        test("should have 72px for tv, desktop and tablet", () => {
          const { Texts } = setup();

          expect(Texts[0]).toHaveStyleRule("font-size", "72px");
          expect(Texts[1]).toHaveStyleRule("font-size", "72px");
          expect(Texts[2]).toHaveStyleRule("font-size", "72px");
        });

        test("should have 48px for mobile", () => {
          const { Texts } = setup();

          expect(Texts[3]).toHaveStyleRule("font-size", "48px");
        });
      });

      describe("lineHeight", () => {      
        test("should have 8rem", () => {
          const { Texts } = setup();

          Texts.forEach((Text: Element) => {
            expect(Text).toHaveStyleRule("line-height", "8rem");
          });
        });
      });

      describe("textAlign", () => {      
        test("should have center", () => {
          const { Texts } = setup();

          Texts.forEach((Text: Element) => {
            expect(Text).toHaveStyleRule("text-align", "center");
          });
        });
      });

      describe("textTransform", () => {      
        test("should have lowercase", () => {
          const { Texts } = setup();

          Texts.forEach((Text: Element) => {
            expect(Text).toHaveStyleRule("text-transform", "lowercase");
          });
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  ResponsiveDesktop: Element;
  ResponsiveMobile: Element;
  ResponsiveTablet: Element;
  ResponsiveTv: Element;
  SectionContainer: Element;
  Texts: Element[];
  TitleSpacingContainers: Element[];
}

type SectionTestProps = Partial<SectionProps>;


function setup(additionalProps?: SectionTestProps): Setup {
  const props: SectionProps = {
    children: <div data-testid="children">Children</div>,
    id: "ID",
    title: "Title",
    ...additionalProps
  };

  const utils: RenderResult = renderWithTheme(
    <Section {...props} />
  );

  const { queryByTestId, queryAllByTestId }: RenderResult = utils;

  const ResponsiveDesktop: Element = queryByTestId("ResponsiveDesktop");
  const ResponsiveMobile: Element = queryByTestId("ResponsiveMobile");
  const ResponsiveTablet: Element = queryByTestId("ResponsiveTablet");
  const ResponsiveTv: Element = queryByTestId("ResponsiveTv");
  const SectionContainer: Element = queryByTestId("Section");
  const TitleSpacingContainers: Element[] = queryAllByTestId("TitleSpacingContainer");
  const Texts: Element[] = queryAllByTestId("Text");

  return {
    ...utils,
    ResponsiveDesktop,
    ResponsiveMobile,
    ResponsiveTablet,
    ResponsiveTv,
    SectionContainer,
    Texts,
    TitleSpacingContainers
  };
}