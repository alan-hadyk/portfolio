import React, { memo, useRef } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import PositionContainer from "<layout>/PositionContainer";

import useInterval from "<hooks>/useInterval";

export const code = `import { useLayoutEffect } from "react";

import {
  IntersectionObserverWithPolyfill,
  UseIntersectionObserver
} from "<hooks>/__typings__/useIntersectionObserver";

export default function useIntersectionObserver({
  onElementVisible,
  selectors
}: UseIntersectionObserver): void {
  useLayoutEffect(() => {
    const observer: IntersectionObserverWithPolyfill = new window.IntersectionObserver((entries: IntersectionObserverEntry[]): void => { 
      const intersectingElements: IntersectionObserverEntry[] = entries
        .filter(({ isIntersecting }) => isIntersecting);
      const highestIntersection: IntersectionObserverEntry = (intersectingElements.length > 0) && 
        intersectingElements.reduce((prev, current) => (prev.intersectionRatio > current.intersectionRatio) ? prev : current);
  
      if (highestIntersection) {
        onElementVisible(\`#\${highestIntersection.target.id}\`);
      } else {
        onElementVisible("");
      }
    }, { 
      threshold: [0, 0.4]
    });

    observer.POLL_INTERVAL = 100;

    selectors.forEach((selector: string): void => {
      document.querySelector(selector) && observer.observe(document.querySelector(selector));
    });

    return (): void => observer.disconnect();
  }, [onElementVisible, selectors]);`;

function TypingAnimation(): JSX.Element {
  const codeContainer = useRef<HTMLDivElement>(null);
  const currentChar = useRef<number>(0);

  useInterval(() => {
    updateText();
  }, 50);

  return (
    <PositionContainer
      dataTestId="TypingAnimation"
      height="100%"
      position="relative"
    >
      <TypingAnimation.Pre data-testid="TypingAnimationPre">
        <TypingAnimation.Code 
          data-testid="TypingAnimationCode"
          ref={codeContainer} 
        />
      </TypingAnimation.Pre>
    </PositionContainer>
  );

  function updateText(): void {
    if (currentChar.current <= code.length) {
      codeContainer.current.innerHTML += code.charAt(currentChar.current);

      currentChar.current++;
    } else {
      codeContainer.current.innerHTML = "";

      currentChar.current = 0;
    }
  }
}

TypingAnimation.Pre = styled.pre``;

TypingAnimation.Code = styled.code`
  ${({
    theme: {
      colorPalette: { blue100, blue300 },
      easing: { easeInOut },
      fontSizes: { font8 },
      fontFamilies: { AnonymousPro },
      keyframes: { blink },
      spacing: { spacing4, spacing8, spacing12 },
      transitionTimes
    }
  }): FlattenSimpleInterpolation => css`
    bottom: 0;
    color: ${blue300};
    font-family: ${AnonymousPro};
    font-size: ${font8};
    left: 0;
    line-height: ${spacing12};
    min-height: 100%;
    position: absolute;
    right: 0;

    &::after {
      animation-duration: ${transitionTimes.default};
      animation-iteration-count: infinite;
      animation-name: ${blink};
      animation-timing-function: ${easeInOut};
      background-color: ${blue100};
      content: '';
      display: inline-block;
      height: ${spacing8};
      margin-left: ${spacing4};
      transform: translateY(1px);
      width: ${spacing4};
    }
  `}
`;

export default memo(TypingAnimation);