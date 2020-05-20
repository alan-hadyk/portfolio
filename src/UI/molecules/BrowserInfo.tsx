import React from "react";
import styled from "styled-components";
import { detect } from "detect-browser";

import FlexContainer from "<layout>/FlexContainer";
import FlexItem from "<layout>/FlexItem";
import SpacingContainer from "<layout>/SpacingContainer";

import Icon from "<atoms>/Icon";

import { IconProps } from "<atoms>/__typings__/Icon.d.ts";

const BROWSER_ICONS: IconProps["iconName"][] = ["chrome", "firefox", "ie", "opera", "safari", "unknown"];

function BrowserInfo(): JSX.Element {
  return (
    <SpacingContainer
      dataTestId="BrowserInfo"
      height="100%"
      paddingBottom="1.25vh"
      paddingLeft="1.25vw"
      paddingRight="1.25vw"
      paddingTop="1.25vh"
      width="100%"
    >
      <BrowserInfo.IconsContainer data-testid="BrowserInfoIconsContainer">
        <FlexContainer 
          alignItems="center" 
          dataTestId="BrowserInfoFlexContainer"
          flexFlow="row wrap"
          height="100%"
          justifyContent="space-between"
        >
          {renderIcons()}
        </FlexContainer>
      </BrowserInfo.IconsContainer>
    </SpacingContainer>
  );

  function renderIcons(): JSX.Element[] {
    return BROWSER_ICONS.map((icon: IconProps["iconName"]): JSX.Element => {
      const { name } = detect();

      const isUnknown = !BROWSER_ICONS.find((icon: IconProps["iconName"]) => icon === name);
      const isActive: boolean = icon === "ie" ? (name === "ie" || name === "edge") : name === icon;

      return (
        <FlexItem
          className={isActive ? "isActive" : "isInactive"}
          flex="0 1 28%"
          height="50%"
          key={icon}
          paddingBottom="4.8%"
          paddingTop="4.8%"
        >
          <Icon 
            animationTime="verySlow"
            height="100%"
            iconName={icon}
            isActive={isActive || isUnknown}
            isResponsive
            overflow="hidden"
            shouldDisplayGlowAnimation={isActive || isUnknown}
            width="100%"
          />
        </FlexItem>
      );
    });
  }
}

BrowserInfo.IconsContainer = styled.div`
  height: 100%;

  @media (max-height: 640px) {
    .isInactive {
      display: none;
    }

    .isActive {
      display: block;
      height: 100%;
      margin: 0 auto;
    }
  }
`;

export default BrowserInfo;