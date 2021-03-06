import React from "react";
import { act, fireEvent, RenderResult } from "@testing-library/react";
import ShuffleText from "shuffle-text";

import Text from "UI/atoms/Text";

import renderWithTheme from "helpers/tests/renderWithTheme";

import { TextProps } from "UI/atoms/__typings__/Text";

describe("atoms / Text", () => {
  test("should render children (string)", () => {
    const { TextContainer } = setup({
      children: "Custom children"
    });

    expect(TextContainer.textContent).toEqual("Custom children");
  });

  test("should render children (number)", () => {
    const { TextContainer } = setup({
      children: 123
    });

    expect(TextContainer.textContent).toEqual("123");
  });

  test("should render children (JSX.Element)", () => {
    const { TextContainer } = setup({
      children: <div>Custom children</div>
    });

    expect(TextContainer.textContent).toEqual("Custom children");
  });

  describe("Styles", () => {
    describe("color", () => {
      test("should have #78b0b5 by default", () => {
        const { TextContainer } = setup();

        expect(TextContainer).toHaveStyleRule("color", "#78b0b5");
      });

      test("should have correct color passed via color prop", () => {
        const { TextContainer } = setup({
          color: "blue500"
        });

        expect(TextContainer).toHaveStyleRule("color", "#2b595e");
      });

      test("should have #fff if is hoverable", () => {
        const { TextContainer } = setup({
          isHoverable: true
        });

        expect(TextContainer).toHaveStyleRule("color", "#fff", {
          modifier: "&:hover"
        });
      });

      describe("strong", () => {
        describe("color", () => {
          test("should have #bcd8db if color prop is blue300", () => {
            const { TextContainer } = setup({
              color: "blue300"
            });

            expect(TextContainer).toHaveStyleRule("color", "#bcd8db", {
              modifier: "strong"
            });
          });
        });
      });
    });

    describe("ellipsis", () => {
      describe("text-overflow", () => {
        test("should have ellipsis if ellipsis is true", () => {
          const { TextContainer } = setup({
            ellipsis: true
          });

          expect(TextContainer).toHaveStyleRule("text-overflow", "ellipsis");
        });

        test("should not have if ellipsis is false", () => {
          const { TextContainer } = setup({
            ellipsis: false
          });

          expect(TextContainer).not.toHaveStyleRule("text-overflow");
        });
      });

      describe("overflow", () => {
        test("should have hidden if ellipsis is true", () => {
          const { TextContainer } = setup({
            ellipsis: true
          });

          expect(TextContainer).toHaveStyleRule("overflow", "hidden");
        });

        test("should not have if ellipsis is false", () => {
          const { TextContainer } = setup({
            ellipsis: false
          });

          expect(TextContainer).not.toHaveStyleRule("overflow");
        });
      });

      describe("white-space", () => {
        test("should have nowrap if ellipsis is true", () => {
          const { TextContainer } = setup({
            ellipsis: true
          });

          expect(TextContainer).toHaveStyleRule("white-space", "nowrap");
        });

        test("should not have if ellipsis is false", () => {
          const { TextContainer } = setup({
            ellipsis: false
          });

          expect(TextContainer).not.toHaveStyleRule("white-space");
        });
      });
    });

    describe("font-family", () => {
      test("should have AnonymousPro by default", () => {
        const { TextContainer } = setup();

        expect(TextContainer).toHaveStyleRule(
          "font-family",
          "'Anonymous Pro',monospace"
        );
      });

      test("should have correct value passed via fontFamily prop", () => {
        const { TextContainer } = setup({
          fontFamily: "Exan"
        });

        expect(TextContainer).toHaveStyleRule(
          "font-family",
          "ExanModifiedRegular,monospace"
        );
      });
    });

    describe("font-size", () => {
      test("should have 20px by default", () => {
        const { TextContainer } = setup();

        expect(TextContainer).toHaveStyleRule("font-size", "20px");
      });

      test("should have correct value passed via fontSize prop", () => {
        const { TextContainer } = setup({
          fontSize: "font72"
        });

        expect(TextContainer).toHaveStyleRule("font-size", "72px");
      });
    });

    describe("font-weight", () => {
      test("should have 400 by default", () => {
        const { TextContainer } = setup();

        expect(TextContainer).toHaveStyleRule("font-weight", "400");
      });

      test("should have correct value passed via fontWeight prop", () => {
        const { TextContainer } = setup({
          fontWeight: "bold"
        });

        expect(TextContainer).toHaveStyleRule("font-weight", "700");
      });
    });

    describe("line-height", () => {
      test("should have 1 by default", () => {
        const { TextContainer } = setup();

        expect(TextContainer).toHaveStyleRule("line-height", "1");
      });

      test("should have correct value passed via lineHeight prop - spacing", () => {
        const { TextContainer } = setup({
          lineHeight: "spacing24"
        });

        expect(TextContainer).toHaveStyleRule("line-height", "2.4rem");
      });
    });

    describe("max-height", () => {
      test("should have correct value passed via maxHeight prop", () => {
        const { TextContainer } = setup({
          maxHeight: "spacing24"
        });

        expect(TextContainer).toHaveStyleRule("max-height", "2.4rem");
      });
    });

    describe("overflow", () => {
      test("should have visible by default", () => {
        const { TextContainer } = setup();

        expect(TextContainer).toHaveStyleRule("overflow", "visible");
      });

      test("should have correct value passed via overflow prop", () => {
        const { TextContainer } = setup({
          overflow: "hidden"
        });

        expect(TextContainer).toHaveStyleRule("overflow", "hidden");
      });
    });

    describe("padding-bottom", () => {
      test("should have 0 by default", () => {
        const { TextContainer } = setup();

        expect(TextContainer).toHaveStyleRule("padding-bottom", "0");
      });

      test("should have correct value passed via paddingBottom prop", () => {
        const { TextContainer } = setup({
          paddingBottom: "spacing24"
        });

        expect(TextContainer).toHaveStyleRule("padding-bottom", "2.4rem");
      });
    });

    describe("padding-left", () => {
      test("should have 0 by default", () => {
        const { TextContainer } = setup();

        expect(TextContainer).toHaveStyleRule("padding-left", "0");
      });

      test("should have correct value passed via paddingLeft prop", () => {
        const { TextContainer } = setup({
          paddingLeft: "spacing24"
        });

        expect(TextContainer).toHaveStyleRule("padding-left", "2.4rem");
      });
    });

    describe("padding-right", () => {
      test("should have 0 by default", () => {
        const { TextContainer } = setup();

        expect(TextContainer).toHaveStyleRule("padding-right", "0");
      });

      test("should have correct value passed via paddingRight prop", () => {
        const { TextContainer } = setup({
          paddingRight: "spacing24"
        });

        expect(TextContainer).toHaveStyleRule("padding-right", "2.4rem");
      });
    });

    describe("padding-top", () => {
      test("should have 0 by default", () => {
        const { TextContainer } = setup();

        expect(TextContainer).toHaveStyleRule("padding-top", "0");
      });

      test("should have correct value passed via paddingTop prop", () => {
        const { TextContainer } = setup({
          paddingTop: "spacing24"
        });

        expect(TextContainer).toHaveStyleRule("padding-top", "2.4rem");
      });
    });

    describe("text-align", () => {
      test("should have left by default", () => {
        const { TextContainer } = setup();

        expect(TextContainer).toHaveStyleRule("text-align", "left");
      });

      test("should have center passed via textAlign prop", () => {
        const { TextContainer } = setup({
          textAlign: "center"
        });

        expect(TextContainer).toHaveStyleRule("text-align", "center");
      });

      test("should have right passed via textAlign prop", () => {
        const { TextContainer } = setup({
          textAlign: "right"
        });

        expect(TextContainer).toHaveStyleRule("text-align", "right");
      });
    });

    describe("text-transform", () => {
      test("should have none by default", () => {
        const { TextContainer } = setup();

        expect(TextContainer).toHaveStyleRule("text-transform", "none");
      });

      test("should have lowercase passed via textTransform prop", () => {
        const { TextContainer } = setup({
          textTransform: "lowercase"
        });

        expect(TextContainer).toHaveStyleRule("text-transform", "lowercase");
      });

      test("should have uppercase passed via textTransform prop", () => {
        const { TextContainer } = setup({
          textTransform: "uppercase"
        });

        expect(TextContainer).toHaveStyleRule("text-transform", "uppercase");
      });

      test("should have capitalize passed via textTransform prop", () => {
        const { TextContainer } = setup({
          textTransform: "capitalize"
        });

        expect(TextContainer).toHaveStyleRule("text-transform", "capitalize");
      });
    });

    describe("transition", () => {
      test("should have all 150ms ease-in-out", () => {
        const { TextContainer } = setup();

        expect(TextContainer).toHaveStyleRule(
          "transition",
          "all 150ms ease-in-out"
        );
      });
    });

    describe("width", () => {
      test("should have auto by default", () => {
        const { TextContainer } = setup();

        expect(TextContainer).toHaveStyleRule("width", "auto");
      });

      test("should have correct value passed via width prop", () => {
        const { TextContainer } = setup({
          width: "spacing48"
        });

        expect(TextContainer).toHaveStyleRule("width", "4.8rem");
      });

      test("should have 50% passed via width prop", () => {
        const { TextContainer } = setup({
          width: "50%"
        });

        expect(TextContainer).toHaveStyleRule("width", "50%");
      });

      test("should have 100% passed via width prop", () => {
        const { TextContainer } = setup({
          width: "100%"
        });

        expect(TextContainer).toHaveStyleRule("width", "100%");
      });
    });
  });

  describe("Event handlers", () => {
    test("should fire shuffleText.start onMouseOver if shouldShuffleOnHover: true", () => {
      jest.spyOn(ShuffleText.prototype, "start");
      jest.useFakeTimers();

      const { TextContainer } = setup({
        shouldShuffleOnHover: true
      });

      expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(0);

      act(() => {
        fireEvent.mouseOver(TextContainer);
      });

      jest.advanceTimersByTime(10);

      expect(ShuffleText.prototype.start).toHaveBeenCalled();
    });

    test("should fire shuffleText.start onMouseOver with given delay (shuffleDelay)", () => {
      jest.spyOn(ShuffleText.prototype, "start");
      jest.useFakeTimers();

      const { TextContainer } = setup({
        shouldShuffleOnHover: true,
        shuffleDelay: 300
      });

      expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(0);

      act(() => {
        fireEvent.mouseOver(TextContainer);
      });

      jest.advanceTimersByTime(10);

      expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(0);

      jest.advanceTimersByTime(290);

      expect(ShuffleText.prototype.start).toHaveBeenCalled();
      jest.clearAllTimers();
    });

    test("should not fire shuffleText.start onMouseOver if shouldShuffleOnHover: false", () => {
      jest.spyOn(ShuffleText.prototype, "start");
      jest.useFakeTimers();

      const { TextContainer } = setup({
        shouldShuffleOnHover: false
      });

      act(() => {
        fireEvent.mouseOver(TextContainer);
      });

      jest.advanceTimersByTime(10);

      expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(0);
      jest.clearAllTimers();
    });

    test("should fire shuffleText.start in intervals if shouldShuffle: true (3600ms by default)", () => {
      jest.spyOn(ShuffleText.prototype, "start");
      jest.useFakeTimers();

      setup({
        shouldShuffle: true
      });

      expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(0);

      jest.advanceTimersByTime(3600);

      expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(1);

      jest.advanceTimersByTime(3600);

      expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(2);

      jest.clearAllTimers();
    });

    test("should fire shuffleText.start in intervals if shouldShuffle: true with custom delay (shuffleDelay)", () => {
      jest.spyOn(ShuffleText.prototype, "start");
      jest.useFakeTimers();

      setup({
        shouldShuffle: true,
        shuffleDelay: 150,
        shuffleInterval: 300
      });

      expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(0);

      jest.advanceTimersByTime(150);

      expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(0);

      jest.advanceTimersByTime(300);

      expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(1);

      jest.advanceTimersByTime(150);

      expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(1);

      jest.advanceTimersByTime(300);

      expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(2);

      jest.clearAllTimers();
    });

    test("should fire shuffleText.start in intervals if shouldShuffle: true (custom shuffleInterval value)", () => {
      jest.spyOn(ShuffleText.prototype, "start");
      jest.useFakeTimers();

      setup({
        shouldShuffle: true,
        shuffleInterval: 150
      });

      expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(0);

      jest.advanceTimersByTime(150);

      expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(1);

      jest.advanceTimersByTime(150);

      expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(2);

      jest.advanceTimersByTime(150);

      expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(3);

      jest.clearAllTimers();
    });

    test("should not fire shuffleText.start in intervals if shouldShuffle: false ", () => {
      jest.spyOn(ShuffleText.prototype, "start");
      jest.useFakeTimers();

      setup({
        shouldShuffle: false
      });

      expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(0);

      jest.advanceTimersByTime(7200);

      expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(0);

      jest.clearAllTimers();
    });
  });
});

interface Setup extends RenderResult {
  TextContainer: Element;
}

type TextTestProps = Partial<TextProps>;

export function setup(additionalProps?: TextTestProps): Setup {
  const props: TextProps = {
    children: "Text",
    ...additionalProps
  };

  const utils: RenderResult = renderWithTheme(
    <Text {...props}>{props.children}</Text>
  );

  const { container } = utils || {};

  return {
    ...utils,
    TextContainer: container.children[0]
  };
}
