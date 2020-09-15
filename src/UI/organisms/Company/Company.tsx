import React from "react";

import CompanyTvDesktopAndTablet from "<organisms>/Company/CompanyTvDesktopAndTablet";
import CompanyMobile from "<organisms>/Company/CompanyMobile";

import FlexContainer from "<layout>/FlexContainer";
import PositionContainer from "<layout>/PositionContainer";

import { CompanyProps } from "<organisms>/Company/__typings__/Company.d.ts";

const Company = ({
  dataTestId,
  date,
  iconsWithLabels,
  logo,
  responsibilities,
  title
}: CompanyProps): JSX.Element => (
  <FlexContainer dataTestId={dataTestId || "Company"}>
    <PositionContainer
      dataTestId="CompanyPositionContainer"
      position="relative"
    >
      <CompanyTvDesktopAndTablet
        date={date}
        iconsWithLabels={iconsWithLabels}
        logo={logo}
        responsibilities={responsibilities}
        title={title}
      />

      <CompanyMobile
        date={date}
        iconsWithLabels={iconsWithLabels}
        logo={logo}
        responsibilities={responsibilities}
        title={title}
      />
    </PositionContainer>
  </FlexContainer>
);

export default Company;