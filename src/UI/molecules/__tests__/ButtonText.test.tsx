import React from "react";
import { RenderResult } from "@testing-library/react";

import ButtonText from "molecules/ButtonText";

import renderWithTheme from "helpers/tests/renderWithTheme";

import { ButtonTextProps } from "molecules/__typings__/ButtonText";

describe("molecules / ButtonText", () => {
  test("should have correct structure", () => {
    const { Text, SpacingContainer } = setup();

    expect(SpacingContainer.children[0]).toEqual(Text);
  });

  describe("SpacingContainer", () => {
    describe("Styles", () => {
      describe("margin-right", () => {
        test("should have .8rem when size is small", () => {
          const { SpacingContainer } = setup({
            size: "small"
          });

          expect(SpacingContainer).toHaveStyleRule("margin-right", ".8rem");
        });

        test("should have 1.6rem when size is medium", () => {
          const { SpacingContainer } = setup({
            size: "medium"
          });

          expect(SpacingContainer).toHaveStyleRule("margin-right", "1.6rem");
        });

        test("should have 1.6rem when size is large", () => {
          const { SpacingContainer } = setup({
            size: "large"
          });

          expect(SpacingContainer).toHaveStyleRule("margin-right", "1.6rem");
        });
      });
    });
  });

  describe("Text", () => {
    test("should have correct content passed as buttonText", () => {
      const { Text } = setup({
        buttonText: "Button text"
      });

      expect(Text.textContent).toEqual("Button text");
    });

    describe("Styles", () => {
      describe("font-size", () => {
        test("should have 20px when size is small", () => {
          const { Text } = setup();

          expect(Text).toHaveStyleRule("font-size", "20px");
        });

        test("should have 24px when size is medium", () => {
          const { Text } = setup({
            size: "medium"
          });

          expect(Text).toHaveStyleRule("font-size", "24px");
        });

        test("should have 28px when size is large", () => {
          const { Text } = setup({
            size: "large"
          });

          expect(Text).toHaveStyleRule("font-size", "28px");
        });
      });

      describe("font-family", () => {
        test("should have font family Exan", () => {
          const { Text } = setup();

          expect(Text).toHaveStyleRule(
            "font-family",
            "ExanModifiedRegular,monospace"
          );
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  SpacingContainer: Element;
  Text: Element;
}

type ButtonTextTestProps = Partial<ButtonTextProps>;

function setup(additionalProps?: ButtonTextTestProps): Setup {
  const props: ButtonTextProps = {
    buttonText: "Text content",
    size: "small",
    ...additionalProps
  };

  const utils: RenderResult = renderWithTheme(<ButtonText {...props} />);

  const { container }: RenderResult = utils;
  const SpacingContainer: Element = container.children[0];
  const Text: Element = SpacingContainer.children[0];

  return {
    ...utils,
    SpacingContainer,
    Text
  };
}
