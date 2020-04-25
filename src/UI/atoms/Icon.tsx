import React, { memo } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { transparentize } from "polished";

import { ReactComponent as BtnCodeSandbox } from "<assets>/svg/Btn-CodeSandbox.svg";
import { ReactComponent as BtnDownload } from "<assets>/svg/Btn-Download.svg";
import { ReactComponent as BtnExternalLink } from "<assets>/svg/Btn-ExternalLink.svg";
import { ReactComponent as BtnSend } from "<assets>/svg/Btn-Send.svg";
import { ReactComponent as IconApollo } from "<assets>/svg/Icon-Apollo.svg";
import { ReactComponent as IconCodeSandbox } from "<assets>/svg/Icon-CodeSandbox.svg";
import { ReactComponent as IconEarth } from "<assets>/svg/Icon-Earth.svg";
import { ReactComponent as IconGitHub } from "<assets>/svg/Icon-GitHub.svg";
import { ReactComponent as IconGraphql } from "<assets>/svg/Icon-Graphql.svg";
import { ReactComponent as IconJavascript } from "<assets>/svg/Icon-Javascript.svg";
import { ReactComponent as IconLinkedIn } from "<assets>/svg/Icon-LinkedIn.svg";
import { ReactComponent as IconLogo } from "<assets>/svg/Icon-Logo.svg";
import { ReactComponent as IconNode } from "<assets>/svg/Icon-Node.svg";
import { ReactComponent as IconReact } from "<assets>/svg/Icon-React.svg";
import { ReactComponent as IconTypescript } from "<assets>/svg/Icon-Typescript.svg";
import { ReactComponent as IconWebpack } from "<assets>/svg/Icon-Webpack.svg";

import {
  IconComponents,
  IconContainerProps,
  IconProps,
  SVGIcon
} from "<atoms>/__typings__/Icon.d.ts";

function Icon({
  animationDelay = "0ms",
  animationTime = "slow",
  height = "auto",
  iconName,
  isResponsive = false,
  shouldDisplayGlowAnimation = false,
  shouldGlowOnHover = false,
  width = "auto"
}: IconProps): JSX.Element {
  const iconComponents: IconComponents = {
    apollo: IconApollo,
    btnCodeSandbox: BtnCodeSandbox,
    btnDownload: BtnDownload,
    btnExternalLink: BtnExternalLink,
    btnSend: BtnSend,
    codeSandbox: IconCodeSandbox,
    earth: IconEarth,
    gitHub: IconGitHub,
    graphql: IconGraphql,
    javascript: IconJavascript,
    linkedIn: IconLinkedIn,
    logo: IconLogo,
    node: IconNode,
    react: IconReact,
    typescript: IconTypescript,
    webpack: IconWebpack
  };

  const IconComponent: SVGIcon = iconComponents[iconName];

  return (
    <Icon.Container
      data-testid="IconContainer"
      animationDelay={animationDelay}
      animationTime={animationTime}
      height={height}
      isResponsive={isResponsive}
      shouldDisplayGlowAnimation={shouldDisplayGlowAnimation}
      shouldGlowOnHover={shouldGlowOnHover}
      width={width}
    >
      <IconComponent />
    </Icon.Container>
  );
}

Icon.Container = styled.div<IconContainerProps>`
  ${({
    animationDelay,
    animationTime,
    height,
    isResponsive,
    shouldDisplayGlowAnimation,
    shouldGlowOnHover,
    theme: {
      colorPalette,
      easing,
      keyframes,
      spacing,
      transitionTimes
    },
    width
  }): FlattenSimpleInterpolation => css`
    height: ${(height in spacing && spacing[height]) || height};
    width: ${(width in spacing && spacing[width]) || width};

    ${isResponsive && `
      svg {
        height: 100%;
        width: 100%;
      }
    `}

    & > * {
      ${shouldDisplayGlowAnimation && css`
        animation-delay: ${animationDelay};
        animation-duration: ${transitionTimes[animationTime]};
        animation-iteration-count: infinite;
        animation-name: ${keyframes.glow};
        animation-timing-function: ${easing.easeInOut};
      `}
  
      ${shouldGlowOnHover && `
        transition: all ${transitionTimes[animationTime]} ${easing.easeInOut} ${animationDelay};
  
        &:hover {
          filter: drop-shadow(0px 0px ${spacing.spacing4} ${transparentize(0.5, colorPalette.white)});
        }
      `}
    }
  `}
`;

export default memo(Icon);