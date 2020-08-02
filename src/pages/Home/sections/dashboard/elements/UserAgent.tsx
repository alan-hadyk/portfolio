import React from "react";

import DashboardElement from "<molecules>/DashboardElement";
import BrowserInfo from "<molecules>/BrowserInfo";

export const UserAgent = (): JSX.Element => (
  <DashboardElement
    dataTestId="UserAgent"
    description={window && window.navigator && window.navigator.userAgent}
    flex="0 1 20%"
    shouldDisplayCorners
    title="User Agent" 
  >
    <BrowserInfo />
  </DashboardElement>
);
  
export default UserAgent;
