import React from "react";

import Icon from "<atoms>/Icon";
import Text from "<atoms>/Text";

import FlexContainer from "<layout>/FlexContainer";
import SpacingContainer from "<layout>/SpacingContainer";

import {
  IconWithLabelProps,
  MapSizeToIconHeight,
  MapSizeToTextFontSize
} from "<molecules>/__typings__/IconWithLabel.d.ts";

import {
  Spacing
} from "<styles>/variables/__typings__/variables.d.ts";

function IconWithLabel({
  color = "blue100",
  iconName,
  label,
  size = "medium"
}: IconWithLabelProps): JSX.Element {
  const mapSizeToIconHeight: MapSizeToIconHeight = {
    large: "spacing40",
    medium: "spacing32",
    small: "spacing28"
  };

  const mapSizeToTextFontSize: MapSizeToTextFontSize = {
    large: "font24",
    medium: "font20",
    small: "font16"
  };

  const iconPadding: Spacing = size === "small" ? "spacing8" : "spacing12";

  return (
    <FlexContainer
      alignItems="center" 
      dataTestId="IconWithLabel"
      flexFlow="row nowrap"
      height="100%"
      justifyContent="flex-start" 
    >
      <SpacingContainer
        paddingRight={iconPadding}
      >
        <Icon 
          height={mapSizeToIconHeight[size]}
          iconName={iconName}
          isHeightResponsive
        />
      </SpacingContainer>
      <Text
        color={color}
        ellipsis
        fontSize={mapSizeToTextFontSize[size]}
      >
        {label}
      </Text>
    </FlexContainer>
  );
}
  
export default IconWithLabel;