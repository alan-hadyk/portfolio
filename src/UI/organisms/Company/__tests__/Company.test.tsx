import React from "react";
import { RenderResult } from "@testing-library/react";

import Company from "<organisms>/Company";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

import { CompanyProps } from "<organisms>/Company/__typings__/Company.d.ts";

describe("organisms / Company", () => {
  test("should have correct structure", () => {
    const {
      CompanyContainer,
      CompanyDesktop,
      CompanyMobile,
      CompanyPositionContainer,
      CompanyTablet,
      CompanyTv
    } = setup();

    expect(CompanyContainer.children[0]).toEqual(CompanyPositionContainer);

    expect(CompanyPositionContainer.children[0]).toEqual(CompanyTv);
    expect(CompanyPositionContainer.children[1]).toEqual(CompanyDesktop);
    expect(CompanyPositionContainer.children[2]).toEqual(CompanyTablet);
    expect(CompanyPositionContainer.children[3]).toEqual(CompanyMobile);
  });
  
  describe("CompanyPositionContainer", () => {
    describe("Props", () => {
      describe("position", () => {
        test("should have relative", () => {
          const { CompanyPositionContainer } = setup();

          expect(CompanyPositionContainer).toHaveStyleRule("position", "relative");
        });
      });
    });
  });

  describe("CompanyTv, CompanyDesktop, CompanyTablet, CompanyMobile", () => {
    describe("Props", () => {
      describe("date", () => {
        test("should render label equal to date prop", () => {
          const { CompanyDescriptions } = setup({
            date: "July 2016 to present"
          });

          CompanyDescriptions.forEach((CompanyDescription: Element) => {
            expect(CompanyDescription.children[1].children[0].children[1].textContent).toEqual("July 2016 to present");
          });
        });
      });

      describe("iconsWithLabels", () => {
        test("should render correct icon and label passed via iconsWithLabels props", () => {
          const { CompanyDescriptions } = setup({
            iconsWithLabels: [
              {
                iconName: "brandWebpack",
                label: "Webpack"
              },
              {
                iconName: "node",
                label: "Node"
              }
            ]
          });

          let IconsWithLabels: Element;

          CompanyDescriptions.forEach((CompanyDescriptions: Element) => {
            IconsWithLabels = CompanyDescriptions.children[2].children[1].children[0];
          });

          expect(IconsWithLabels.children.length).toEqual(2);
          expect(IconsWithLabels.children[0].children[0].children[0].textContent).toEqual("Brand-Webpack.svg");
          expect(IconsWithLabels.children[0].children[1].textContent).toEqual("Webpack");
          expect(IconsWithLabels.children[1].children[0].children[0].textContent).toEqual("Icon-Node.svg");
          expect(IconsWithLabels.children[1].children[1].textContent).toEqual("Node");
        });
      });

      describe("responsibilities", () => {
        test("should render correct value passed via responsibilities props", () => {
          const responsibilities: CompanyProps["responsibilities"] = [
            "Create scalable and sane front-end architecture", 
            "Orchestrate and direct collaborative team operational objectives for front-end layer of an application designed to manage payment systems"    
          ];

          const { CompanyDescriptions } = setup({
            responsibilities
          });

          let UnorderedList: Element;

          CompanyDescriptions.forEach((CompanyDescription: Element) => {
            UnorderedList = CompanyDescription.children[3].children[1].children[0];
          });

          expect(UnorderedList.children.length).toEqual(2);
          responsibilities.forEach((responsibility: string, index: number) => {
            expect(UnorderedList.children[index].textContent).toEqual(responsibility);
          });
        });
      });

      describe("title", () => {
        test("should render correct value passed via title props", () => {
          const title: CompanyProps["title"] = "Front-end developer";

          const { CompanyDescriptions } = setup({
            title
          });

          let Title: string;

          CompanyDescriptions.forEach((CompanyDescription: Element) => {
            Title = CompanyDescription.children[0].textContent;
          });

          expect(Title).toEqual(title);
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  CompanyContainer: Element;
  CompanyDescriptions: Element[];
  CompanyDesktop: Element;
  CompanyLogos: Element[];
  CompanyMobile: Element;
  CompanyPositionContainer: Element;
  CompanyTablet: Element;
  CompanyTv: Element;
}

type CompanyTestProps = Partial<CompanyProps>;

function setup(additionalProps?: CompanyTestProps): Setup {
  const responsibilities: CompanyProps["responsibilities"] = [
    "Create scalable and sane front-end architecture", 
    "Orchestrate and direct collaborative team operational objectives for front-end layer of an application designed to manage payment systems"
  ];

  const iconsWithLabels: CompanyProps["iconsWithLabels"] = [
    {
      iconName: "brandJS",
      label: "Javascript"
    },
    {
      iconName: "brandReact",
      label: "React"
    }
  ];

  const props: CompanyProps = {
    date: "August 2018 to present",
    iconsWithLabels,
    logo: "companyOmise",
    responsibilities,
    title: "Front end developer",
    ...additionalProps
  };

  const utils: RenderResult = renderWithTheme(
    <Company {...props} />
  );

  const { queryAllByTestId } = utils || {};
  
  const CompanyContainer: Element = queryAllByTestId("Company")[0];
  const CompanyDescriptions: Element[] = queryAllByTestId("CompanyDescription");
  const CompanyDesktop: Element = queryAllByTestId("ResponsiveDesktop")[0];
  const CompanyLogos: Element[] = queryAllByTestId("CompanyLogoFlexContainer");
  const CompanyMobile: Element = queryAllByTestId("ResponsiveMobile")[0];
  const CompanyPositionContainer: Element = queryAllByTestId("CompanyPositionContainer")[0];
  const CompanyTablet: Element = queryAllByTestId("ResponsiveTablet")[0];
  const CompanyTv: Element = queryAllByTestId("ResponsiveTv")[0];

  return {
    ...utils,
    CompanyContainer,
    CompanyDescriptions,
    CompanyDesktop,
    CompanyLogos,
    CompanyMobile,
    CompanyPositionContainer,
    CompanyTablet,
    CompanyTv
  };
}
 