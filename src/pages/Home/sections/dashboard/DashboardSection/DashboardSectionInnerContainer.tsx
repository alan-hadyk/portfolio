import React from "react";

import FlexContainer from "UI/layout/FlexContainer";
import SpacingContainer from "UI/layout/SpacingContainer";

import { DashboardSectionInnerContainerProps } from "pages/Home/sections/dashboard/DashboardSection/__typings__/DashboardSectionInnerContainer";

const DashboardSectionInnerContainer = ({
  children,
  height,
  marginBottom = "0",
  marginTop = "0"
}: DashboardSectionInnerContainerProps): JSX.Element => (
  <SpacingContainer
    dataTestId="DashboardSectionInnerContainer"
    height={height}
    marginBottom={marginBottom}
    marginTop={marginTop}
    width="100%"
  >
    <FlexContainer
      alignItems="stretch"
      dataTestId="DashboardSectionInnerFlexContainer"
      flexFlow="row nowrap"
      gap="spacing48"
      height="100%"
      justifyContent="center"
    >
      {children}
    </FlexContainer>
  </SpacingContainer>
);

export default DashboardSectionInnerContainer;
