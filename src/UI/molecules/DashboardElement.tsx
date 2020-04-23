import React from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import Text from "<atoms>/Text";
import Corners from "<molecules>/Corners";
import PositionContainer from "<layout>/PositionContainer";
import FlexItem from "<layout>/FlexItem";
import SpacingContainer from "<layout>/SpacingContainer";

import Cross from "<assets>/svg/Cross.svg";

import transitionTimes from "<styles>/variables/transitionTimes";
import spacing from "<styles>/variables/spacing";

import { DashboardElementProps } from "<molecules>/__typings__/DashboardElement.d.ts";

function DashboardElement({
  alignSelf = "auto",
  children,
  dataTestId,
  flex,
  overflow = "hidden",
  shouldDisplayCorners = false,
  shuffleDelay = 0,
  order = 0,
  title
}: DashboardElementProps): JSX.Element {
  return (
    <FlexItem
      alignSelf={alignSelf}
      dataTestId={dataTestId || "DashboardElement"}
      flex={flex}
      order={order}
      overflow="visible"
    >
      <Text 
        color="blue300"
        fontFamily="AnonymousPro"
        fontSize="font16"
        lineHeight="spacing36"
        shouldShuffle
        shuffleDelay={shuffleDelay}
        shuffleInterval={parseInt(transitionTimes.superSlow)}
        textTransform="uppercase"
      >
        {title}
      </Text>
      <PositionContainer
        height={`calc(100% - ${spacing.spacing36})`}
        position="relative"
      >
        {shouldDisplayCorners && <Corners />}
        {renderInnerContainer()}
      </PositionContainer>
    </FlexItem>
  );

  function renderInnerContainer(): JSX.Element {
    return (
      <DashboardElement.InnerContainer
        overflow={overflow}
        shouldDisplayCorners={shouldDisplayCorners}
        data-testid="DashboardElementInnerContainer"
      >
        {
          shouldDisplayCorners ? (
            <SpacingContainer 
              height="100%"
              paddingRight="spacing8" 
              paddingLeft="spacing8" 
              paddingTop="spacing8" 
              paddingBottom="spacing8"
            >
              {children}
            </SpacingContainer>
          ) : children
        }
      </DashboardElement.InnerContainer>
    );
  }
}

type DashboardElementInnerContainer = Partial<DashboardElementProps>;

DashboardElement.InnerContainer = styled.div<DashboardElementInnerContainer>`
  ${({
    overflow,
    shouldDisplayCorners,
    theme: {
      spacing: { 
        spacing32
      }
    }
  }): FlattenSimpleInterpolation => css`
      height: 100%;
      overflow: ${overflow};
      
      ${shouldDisplayCorners && `
        background: url(${Cross});
        background-repeat: space;
        background-position: center;
        background-size: ${spacing32} ${spacing32};
    `}
  `}
`;

export default DashboardElement;