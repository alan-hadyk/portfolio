import React, { Fragment, useCallback } from "react";

import Text from "UI/atoms/Text";

import SpacingContainer from "UI/layout/SpacingContainer";
import Responsive from "UI/layout/Responsive";

import { RenderTitle, SectionProps } from "UI/molecules/__typings__/Section";

import isIE11 from "helpers/browser/isIE11";

function Section({
  children,
  dataCy,
  dataTestId,
  id,
  marginBottom = "spacing0",
  minHeight,
  title
}: SectionProps): JSX.Element {
  const renderTitle = useCallback(
    ({ fontSize, marginBottom }: RenderTitle): JSX.Element => {
      if (!title) {
        return;
      }

      return (
        <SpacingContainer
          dataTestId="TitleSpacingContainer"
          marginBottom={marginBottom}
        >
          <Text
            color="blue100"
            fontFamily={isIE11() ? "AnonymousPro" : "Exan"}
            fontSize={fontSize}
            lineHeight="spacing80"
            textAlign="center"
            textTransform={isIE11() ? "uppercase" : "lowercase"}
          >
            {title}
          </Text>
        </SpacingContainer>
      );
    },
    [title]
  );

  return (
    <SpacingContainer
      dataCy={dataCy}
      dataTestId={dataTestId || "Section"}
      id={id}
      marginBottom={marginBottom}
      minHeight={minHeight}
      paddingTop={title ? "spacing96" : "spacing0"}
    >
      <Responsive devices={["tv", "desktop", "tablet"]}>
        {renderTitle({
          fontSize: "font72",
          marginBottom: "spacing96"
        })}
      </Responsive>

      <Responsive devices={["mobile"]}>
        {renderTitle({
          fontSize: "font48",
          marginBottom: "spacing48"
        })}
      </Responsive>

      <Fragment>{children}</Fragment>
    </SpacingContainer>
  );
}

export default Section;
