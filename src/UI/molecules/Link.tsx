import React, { Fragment } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { Link as RouterLink } from "react-router-dom";

import Line from "UI/atoms/Line";

import PositionContainer from "UI/layout/PositionContainer";

import { LinkProps, LinkContainerProps } from "UI/molecules/__typings__/Link";

const Link = ({
  children,
  dataCy,
  dataTestId,
  display = "inline",
  height = "unset",
  href,
  isExternal = false,
  isHoverable = false
}: LinkProps): JSX.Element =>
  isExternal ? (
    <Link.ExternalLink
      data-cy={dataCy}
      data-testid={dataTestId || "Link"}
      display={display}
      height={height}
      href={href}
      target="_blank"
    >
      <Fragment>
        {children}

        {isHoverable && (
          <PositionContainer position="relative">
            <Line direction="left" />
            <Line direction="right" />
          </PositionContainer>
        )}
      </Fragment>
    </Link.ExternalLink>
  ) : (
    <RouterLink to={href}>
      <Link.RouterLink
        data-cy={dataCy}
        data-testid={dataTestId || "Link"}
        display={display}
        height={height}
      >
        <Fragment>
          {children}

          {isHoverable && (
            <PositionContainer position="relative">
              <Line direction="left" />
              <Line direction="right" />
            </PositionContainer>
          )}
        </Fragment>
      </Link.RouterLink>
    </RouterLink>
  );

Link.ExternalLink = styled.a<LinkContainerProps>`
  ${({
    display,
    height,
    theme: { spacing }
  }): FlattenSimpleInterpolation => css`
    display: ${display};
    height: ${(height in spacing && spacing[height]) || height};
    line-height: 1;

    &:hover .line {
      opacity: 1;
      visibility: visible;
      width: 50%;
    }
  `};
`;

Link.RouterLink = styled.span<LinkContainerProps>`
  ${({
    display,
    height,
    theme: { spacing }
  }): FlattenSimpleInterpolation => css`
    display: ${display};
    height: ${(height in spacing && spacing[height]) || height};
    line-height: 1;

    &:hover .line {
      opacity: 1;
      visibility: visible;
      width: 50%;
    }
  `};
`;

export default Link;
