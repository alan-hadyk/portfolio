import React, { memo } from "react";

import withCommitsState from "<state>/withCommitsState";

import DashboardElement from "<molecules>/DashboardElement";
import ListOfCommits from "<molecules>/ListOfCommits";

import {
  ListOfCommitsProps
} from "<molecules>/__typings__/ListOfCommits.d.ts";

export const Commits = ({ commitsList, hasError }: ListOfCommitsProps): JSX.Element => (
  <DashboardElement
    dataTestId="Commits"
    flex="1 0 20%"
    overflow="hidden"
    shouldDisplayCorners={hasError}
    title="Commits"
  >
    <ListOfCommits commitsList={commitsList} hasError={hasError} />
  </DashboardElement>
);

export default withCommitsState(memo(Commits));
