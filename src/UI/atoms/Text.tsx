import React, { memo, useState, useRef } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import useShuffleText from "<hooks>/useShuffleText";
import useInterval from "<hooks>/useInterval";

import transitionTimes from "<styles>/variables/transitionTimes";

import { TextProps } from "<atoms>/__typings__/Text.d.ts";
import { ShuffleState } from "<hooks>/__typings__/useShuffleText.d.ts";

function Text({ 
  children, 
  color = "blue300",
  ellipsis = false,
  fontFamily = "AnonymousPro",
  fontSize = "font20",
  fontWeight = "normal",
  lineHeight = "1",
  paddingBottom = "spacing0",
  paddingLeft = "spacing0",
  paddingRight = "spacing0",
  paddingTop = "spacing0",
  shouldShuffle = false,
  shouldShuffleOnHover = false,
  shuffleDelay = 0,
  shuffleInterval = parseInt(transitionTimes.verySlow),
  textAlign = "left",
  textTransform = "none"
}: TextProps): JSX.Element {
  const [shuffleText, setShuffleText] = useState<ShuffleState | undefined>();
  const textElement = useRef<HTMLDivElement>(null);

  useShuffleText({
    onShuffleReady: setShuffleText,
    ref: textElement,
    shouldInitialize: shouldShuffleOnHover || shouldShuffle,
    shuffleDelay,
    shuffleState: shuffleText,
    text: children
  });

  useInterval(() => {
    if (!textElement.current || !shouldShuffle) {
      return;
    }
    shuffleText && shuffleText.start();
  }, shuffleInterval);

  return (
    <Text.Container
      color={color}
      data-testid="Text"
      ellipsis={ellipsis}
      fontFamily={fontFamily}
      fontSize={fontSize} 
      fontWeight={fontWeight} 
      lineHeight={lineHeight}
      onMouseOver={handleMouseOver}
      paddingBottom={paddingBottom}
      paddingLeft={paddingLeft}
      paddingRight={paddingRight}
      paddingTop={paddingTop}  
      ref={textElement}
      textAlign={textAlign}
      textTransform={textTransform}
    >
      {children}
    </Text.Container>
  );

  function handleMouseOver(): void {
    if (!textElement.current || !shouldShuffleOnHover) {
      return;
    }

    shuffleText && shuffleText.start();
  }
}

Text.Container = styled.div<TextProps>`
  ${({
    color,
    ellipsis,
    fontFamily,
    fontSize,
    fontWeight,
    lineHeight,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
    textAlign,
    textTransform,
    theme: {
      colorPalette,
      fontFamilies,
      fontSizes,
      fontWeights,
      spacing
    }
  }): FlattenSimpleInterpolation => css`
    color: ${color in colorPalette && colorPalette[color]};
    font-family: ${fontFamily in fontFamilies && fontFamilies[fontFamily]};
    font-size: ${fontSize in fontSizes && fontSizes[fontSize]};
    font-weight: ${fontWeight in fontWeights && fontWeights[fontWeight]};
    line-height: ${(lineHeight in spacing && spacing[lineHeight]) || lineHeight};
    padding-bottom: ${paddingBottom in spacing && spacing[paddingBottom]};
    padding-left: ${paddingLeft in spacing && spacing[paddingLeft]};
    padding-right: ${paddingRight in spacing && spacing[paddingRight]};
    padding-top: ${paddingTop in spacing && spacing[paddingTop]};
    text-align: ${textAlign};
    text-transform: ${textTransform};
    
    ${ellipsis && `
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    `}
  `}
`;

export default memo(Text);
