import React, { memo } from "react";

import DashboardElement from "<molecules>/DashboardElement";
import Performance from "<src>/UI/molecules/Performance";

const Navigator = (): JSX.Element => (
  <DashboardElement
    dataTestId="Navigator"
    flex="0 1 13.6%"
    shuffleDelay={4800}
    title="Navigator"
  >
    <Performance />
  </DashboardElement>
);

export default memo(Navigator);