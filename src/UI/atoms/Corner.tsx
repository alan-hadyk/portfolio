import React, { memo } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import {
  CornerContainerProps,
  CornerProps,
  MapPositionToCornerProps
} from "<atoms>/__typings__/Corner";

const mapPositionToCornerProps: MapPositionToCornerProps = {
  bottomLeft: {
    left: 0,
    top: "calc(100% - 8px)",
    transform: "rotate(270deg)"
  },
  bottomRight: {
    left: "calc(100% - 8px)",
    top: "calc(100% - 8px)",
    transform: "rotate(180deg)"
  },
  topLeft: {
    left: 0,
    top: 0,
    transform: "rotate(0)"
  },
  topRight: {
    left: "calc(100% - 8px)",
    top: 0,
    transform: "rotate(90deg)"
  }
};

const mapActivePositionToCornerProps: MapPositionToCornerProps = {
  bottomLeft: {
    left: "-8px",
    top: "100%",
    transform: "rotate(270deg)"
  },
  bottomRight: {
    left: "100%",
    top: "100%",
    transform: "rotate(180deg)"
  },
  topLeft: {
    left: "-8px",
    top: "-8px",
    transform: "rotate(0)"
  },
  topRight: {
    left: "100%",
    top: "-8px",
    transform: "rotate(90deg)"
  }
};

function Corner({ isActive = false, position }: CornerProps): JSX.Element {
  const cornerProps: CornerContainerProps = isActive ? mapActivePositionToCornerProps[position] : mapPositionToCornerProps[position];
  const opacity: CornerContainerProps["opacity"] = isActive ? 1 : 0.5;

  return (
    <Corner.Container {...cornerProps} opacity={opacity} data-testid="Corner" />
  );
}

Corner.Container = styled.div<CornerContainerProps>`
  ${({
    top,
    left,
    transform,
    opacity,
    theme: {
      colorPalette: { white },
      transitionTimes: { fast },
      easing: { easeInOut },
      spacing: { spacing8 }
    }
  }): FlattenSimpleInterpolation => css`
    border-left: thin solid ${white};
    border-top: thin solid ${white};
    height: ${spacing8};
    left: ${left};
    opacity: ${opacity};
    position: absolute;
    top: ${top};
    transform: ${transform};
    transition: all ${fast} ${easeInOut};
    width: ${spacing8};
  `}
`;

export default memo(Corner);