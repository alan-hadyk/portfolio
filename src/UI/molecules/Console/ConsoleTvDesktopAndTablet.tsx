import React from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import transparentize from "polished/lib/color/transparentize";

import ConsoleText from "UI/atoms/ConsoleText";
import Text from "UI/atoms/Text";

import PositionContainer from "UI/layout/PositionContainer";

const ConsoleTvDesktopAndTabletContainer = styled.div`
  ${({
    theme: {
      colorPalette: { blue100, blue300, blue700 },
      spacing: { spacing8 }
    }
  }): FlattenSimpleInterpolation => css`
    align-items: center;
    background-color: ${transparentize(0.25, blue700)};
    border: 1px solid ${blue300};
    box-shadow: 0px 0px ${spacing8} 0px ${blue100};
    display: flex;
    height: 26.6%;
    justify-content: center;
    min-height: 26.6vh;
    padding: 1.11vh 0.62vw;
    position: relative;
    width: 100%;

    /* IE10+ CSS */
    @media (-ms-high-contrast: none) {
      &::after {
        content: "";
        font-size: 0;
        min-height: inherit;
      }
    }

    @media (-ms-high-contrast: active) {
      &::after {
        content: "";
        font-size: 0;
        min-height: inherit;
      }
    }
  `};
`;

const ConsoleTvDesktopAndTablet = (): JSX.Element => (
  <PositionContainer
    dataCy="ConsoleTvDesktopAndTablet"
    dataTestId="ConsoleTvDesktopAndTabletOuterPositionContainer"
    left="spacing0"
    position="absolute"
    right="spacing0"
    top="50%"
    transform="translateY(-50%)"
    zIndex="layer3"
  >
    <ConsoleTvDesktopAndTabletContainer data-testid="ConsoleTvDesktopAndTabletContainer">
      <PositionContainer
        dataTestId="ConsoleTvDesktopAndTabletInnerPositionContainer"
        left="spacing0"
        position="absolute"
        top="spacing0"
        transform="translateY(-100%)"
      >
        <Text
          fontSize="font12"
          lineHeight="spacing28"
          textTransform="uppercase"
        >
          GNU bash, version 3.2.57(1)-release (x86_64-apple-darwin19)
        </Text>
      </PositionContainer>

      <ConsoleText
        dataTestId="ConsoleTvDesktopAndTabletText"
        fontSize="6vh"
        height="6vh"
        lineHeight="7.4vh"
        transform="translateY(1vh)"
        width="3vh"
      />
    </ConsoleTvDesktopAndTabletContainer>
  </PositionContainer>
);

export default ConsoleTvDesktopAndTablet;
