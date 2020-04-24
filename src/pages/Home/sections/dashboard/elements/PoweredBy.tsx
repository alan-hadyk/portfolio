import React, { memo } from "react";

import DashboardElement from "<molecules>/DashboardElement";
import ReactLogo from "<molecules>/ReactLogo";

const PoweredBy = (): JSX.Element => (
  <DashboardElement
    dataTestId="PoweredBy"
    flex="0 1 13.6%"
    shouldDisplayCorners
    shuffleDelay={4200}
    title="Powered by react" 
  >
    <ReactLogo />
  </DashboardElement>
);
  
export default memo(PoweredBy);