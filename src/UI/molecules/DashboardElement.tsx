import React, { useCallback, useRef, useLayoutEffect, useState } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import Text from "<atoms>/Text";
import Corners from "<molecules>/Corners";
import PositionContainer from "<layout>/PositionContainer";
import FlexItem from "<layout>/FlexItem";
import SpacingContainer from "<layout>/SpacingContainer";

import Cross from "<assets>/svg/Cross.svg";

import spacing from "<styles>/variables/spacing";

import { DashboardElementProps } from "<molecules>/__typings__/DashboardElement.d.ts";

function DashboardElement({
  alignSelf = "auto",
  children,
  description,
  dataTestId,
  flex,
  overflow = "hidden",
  shouldDisplayBorder = false,
  shouldDisplayCorners = false,
  order = 0,
  title,
  titleFontSize = "font16"
}: DashboardElementProps): JSX.Element {
  const descriptionRef = useRef<HTMLDivElement>(null);
  const [childrenHeight, setChildrenHeight] = useState<string>(null);

  const calcChildrenHeight = useCallback((): string => {
    if (descriptionRef.current) {
      const { height }: DOMRect = descriptionRef.current.getBoundingClientRect();
      return `calc(100% - ${spacing.spacing36} - ${spacing.spacing28} - ${height}px)`;
    } else {
      return `calc(100% - ${spacing.spacing36})`;
    }
  }, []);

  useLayoutEffect(() => {
    const height: string = calcChildrenHeight();
    
    setChildrenHeight(height);
  }, [calcChildrenHeight]);

  return (
    <FlexItem
      alignSelf={alignSelf}
      dataTestId={dataTestId || "DashboardElement"}
      flex={flex}
      order={order}
      overflow="visible"
    >
      <Text 
        color={titleFontSize === "font28" ? "blue100" : "blue300"}
        ellipsis
        fontFamily="AnonymousPro"
        fontSize={titleFontSize}
        lineHeight="spacing36"
        textTransform="uppercase"
      >
        {title}
      </Text>

      {description && (
        <SpacingContainer
          dataTestId="DashboardElementDescription"
          marginBottom="spacing28"
        >
          <Text
            color="blue300"
            dataTestId="DashboardElementDescriptionText"
            fontSize="font8"
            lineHeight="spacing12"
            maxHeight="spacing36"
            overflow="hidden"
            textTransform="uppercase"
            ref={descriptionRef}
          >
            {description}
          </Text>
        </SpacingContainer>
      )}
      
      <SpacingContainer
        dataTestId="DashboardElementContentSpacingContainer"
        height={childrenHeight}
        marginTop={titleFontSize === "font28" ? "spacing8" : "spacing0"}
      >
        <PositionContainer
          height={childrenHeight}
          position="relative"
        >
          {shouldDisplayCorners && <Corners />}
          {renderInnerContainer()}
        </PositionContainer>
      </SpacingContainer>
    </FlexItem>
  );

  function renderInnerContainer(): JSX.Element {
    return (
      <DashboardElement.InnerContainer
        data-testid="DashboardElementInnerContainer"
        overflow={overflow}
        shouldDisplayBorder={shouldDisplayBorder}
        shouldDisplayCorners={shouldDisplayCorners}
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
    shouldDisplayBorder,
    shouldDisplayCorners,
    theme: {
      colorPalette: {
        blue100,
        blue300
      },
      spacing: {
        spacing8,
        spacing32
      }
    }
  }): FlattenSimpleInterpolation => css`
    height: 100%;
    overflow: ${overflow};
    
    ${shouldDisplayBorder && `
      border: thin solid ${blue300};
      box-shadow: 0px 0px ${spacing8} 0px ${blue100};
    `}
    
    ${(shouldDisplayCorners || shouldDisplayBorder) && `
      background: url(${Cross});
      background-position: center;
      background-repeat: space;
      background-size: ${spacing32} ${spacing32};
    `}
  `}
`;

export default DashboardElement;