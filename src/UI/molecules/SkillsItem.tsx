import React from "react";

import IconsWithLabels from "molecules/IconsWithLabels";
import DashboardElement from "molecules/DashboardElement";

import SpacingContainer from "layout/SpacingContainer";

import { SkillsItemProps } from "molecules/__typings__/SkillsItem";

function SkillsItem({
  data: { iconsWithLabels, title }
}: SkillsItemProps): JSX.Element {
  const dataCyTitle = title.replace(/\s/g, "").replace("/", "");

  return (
    <DashboardElement
      dataCy={`Skills${dataCyTitle}`}
      dataTestId="SkillsItem"
      flex="1 1 100%"
      shouldDisplayBorder
      title={title}
      titleFontSize="font28"
    >
      <SpacingContainer
        dataTestId="SkillsItemSpacingContainer"
        paddingBottom="spacing32"
        paddingLeft="spacing32"
        paddingRight="spacing32"
        paddingTop="spacing32"
      >
        <IconsWithLabels
          iconsWithLabels={iconsWithLabels}
          position="vertical"
          size="medium"
        />
      </SpacingContainer>
    </DashboardElement>
  );
}

export default SkillsItem;
