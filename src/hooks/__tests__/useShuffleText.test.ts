import React from "react";

import { renderHook, RenderHookResult } from "@testing-library/react-hooks";

import useShuffleText from "hooks/useShuffleText";

import ShuffleText from "shuffle-text";

import { ShuffleState, UseShuffleText } from "hooks/__typings__/useShuffleText";

interface RefElement {
  current: HTMLElement | null;
}

describe("hooks / useShuffleText", () => {
  describe("setText", () => {
    test("should fire with text", () => {
      jest.spyOn(ShuffleText.prototype, "setText");

      let shuffleText: ShuffleState | undefined;
      const setShuffleText = (arg: ShuffleState): ShuffleState =>
        (shuffleText = arg);

      const navItemElement: RefElement = {
        current: document.createElement("div")
      };

      setup({
        onShuffleReady: setShuffleText,
        ref: navItemElement,
        shuffleState: shuffleText,
        text: "Text"
      });

      expect(ShuffleText.prototype.setText).toHaveBeenCalledWith("Text");
    });

    test("should fire with number (converted to string)", () => {
      jest.spyOn(ShuffleText.prototype, "setText");

      let shuffleText: ShuffleState | undefined;
      const setShuffleText = (arg: ShuffleState): ShuffleState =>
        (shuffleText = arg);

      const navItemElement: RefElement = {
        current: document.createElement("div")
      };

      setup({
        onShuffleReady: setShuffleText,
        ref: navItemElement,
        shuffleState: shuffleText,
        text: 123
      });

      expect(ShuffleText.prototype.setText).toHaveBeenCalledWith("123");
    });

    test("should fire with JSX.Element (converted to string)", () => {
      jest.spyOn(ShuffleText.prototype, "setText");

      let shuffleText: ShuffleState | undefined;
      const setShuffleText = (arg: ShuffleState): ShuffleState =>
        (shuffleText = arg);

      const navItemElement: RefElement = {
        current: document.createElement("div")
      };

      const text: React.ReactElement = React.createElement(
        "div",
        [],
        "Custom text"
      );

      setup({
        onShuffleReady: setShuffleText,
        ref: navItemElement,
        shuffleState: shuffleText,
        text
      });

      expect(ShuffleText.prototype.setText).toHaveBeenCalledWith("Custom text");
    });

    test("should not fire if there is no ref", () => {
      jest.spyOn(ShuffleText.prototype, "setText");

      let shuffleText: ShuffleState | undefined;
      const setShuffleText = (arg: ShuffleState): ShuffleState =>
        (shuffleText = arg);

      const navItemElement: RefElement = {
        current: null
      };

      setup({
        onShuffleReady: setShuffleText,
        ref: navItemElement,
        shuffleState: shuffleText,
        text: "Text"
      });

      expect(ShuffleText.prototype.setText).toHaveBeenCalledTimes(0);
    });

    test("should not fire if shuffleState is defined", () => {
      jest.spyOn(ShuffleText.prototype, "setText");

      const shuffleText: ShuffleState = {
        start: jest.fn()
      };

      const navItemElement: RefElement = {
        current: document.createElement("div")
      };

      setup({
        onShuffleReady: jest.fn(),
        ref: navItemElement,
        shuffleState: shuffleText,
        text: "Text"
      });

      expect(ShuffleText.prototype.setText).toHaveBeenCalledTimes(0);
    });

    test("should not fire if shouldInitialize is false", () => {
      jest.spyOn(ShuffleText.prototype, "setText");

      let shuffleText: ShuffleState | undefined;
      const setShuffleText = (arg: ShuffleState): ShuffleState =>
        (shuffleText = arg);

      const navItemElement: RefElement = {
        current: document.createElement("div")
      };

      setup({
        onShuffleReady: setShuffleText,
        ref: navItemElement,
        shouldInitialize: false,
        shuffleState: shuffleText,
        text: "Text"
      });

      expect(ShuffleText.prototype.setText).toHaveBeenCalledTimes(0);
    });
  });

  describe("start", () => {
    test("should fire when that func is returned via onShuffleReady", () => {
      jest.spyOn(ShuffleText.prototype, "start");
      jest.useFakeTimers();

      let shuffleText: ShuffleState | undefined;
      const setShuffleText = (arg: ShuffleState): ShuffleState =>
        (shuffleText = arg);

      const navItemElement: RefElement = {
        current: document.createElement("div")
      };

      setup({
        onShuffleReady: setShuffleText,
        ref: navItemElement,
        shuffleState: shuffleText,
        text: "Text"
      });

      expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(0);

      shuffleText.start();

      jest.advanceTimersByTime(10);

      expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(1);
      jest.clearAllTimers();
    });

    test("should fire with a given delay", () => {
      jest.spyOn(ShuffleText.prototype, "start");
      jest.useFakeTimers();

      let shuffleText: ShuffleState | undefined;
      const setShuffleText = (arg: ShuffleState): ShuffleState =>
        (shuffleText = arg);

      const navItemElement: RefElement = {
        current: document.createElement("div")
      };

      setup({
        onShuffleReady: setShuffleText,
        ref: navItemElement,
        shuffleDelay: 456,
        shuffleState: shuffleText,
        text: "Text"
      });

      expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(0);

      shuffleText.start();

      jest.advanceTimersByTime(10);

      expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(0);

      jest.advanceTimersByTime(446);

      expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(1);
      jest.clearAllTimers();
    });

    test("should not fire if there is no ref", () => {
      jest.spyOn(ShuffleText.prototype, "start");
      jest.useFakeTimers();

      let shuffleText: ShuffleState | undefined;
      const setShuffleText = (arg: ShuffleState): ShuffleState =>
        (shuffleText = arg);

      const navItemElement: RefElement = {
        current: null
      };

      setup({
        onShuffleReady: setShuffleText,
        ref: navItemElement,
        shuffleState: shuffleText,
        text: "Text"
      });

      expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(0);

      shuffleText && shuffleText.start();

      jest.advanceTimersByTime(10);

      expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(0);
    });

    test("should not fire if shuffleState is defined", () => {
      jest.spyOn(ShuffleText.prototype, "start");
      jest.useFakeTimers();

      const shuffleText: ShuffleState = {
        start: jest.fn()
      };

      const navItemElement: RefElement = {
        current: document.createElement("div")
      };

      setup({
        onShuffleReady: jest.fn(),
        ref: navItemElement,
        shuffleState: shuffleText,
        text: "Text"
      });

      shuffleText && shuffleText.start();

      jest.advanceTimersByTime(10);

      expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(0);
    });

    test("should not fire if shouldInitialize is false", () => {
      jest.spyOn(ShuffleText.prototype, "start");
      jest.useFakeTimers();

      let shuffleText: ShuffleState | undefined;
      const setShuffleText = (arg: ShuffleState): ShuffleState =>
        (shuffleText = arg);

      const navItemElement: RefElement = {
        current: document.createElement("div")
      };

      setup({
        onShuffleReady: setShuffleText,
        ref: navItemElement,
        shouldInitialize: false,
        shuffleState: shuffleText,
        text: "Text"
      });

      expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(0);

      shuffleText && shuffleText.start();

      jest.advanceTimersByTime(10);

      expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(0);
    });
  });
});

function setup(args: UseShuffleText): RenderHookResult<unknown, void> {
  const result: RenderHookResult<unknown, void> = renderHook(() => {
    useShuffleText(args);
  });

  return result;
}
