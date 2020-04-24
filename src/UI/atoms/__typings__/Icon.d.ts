import { FunctionComponent, SVGProps } from "react";

import { Spacing, TransitionTimes } from "<styles>/variables/__typings__/variables.d.ts";

export interface IconProps {
  animationDelay?: string;
  animationTime?: TransitionTimes;
  height?: string | Spacing;
  iconName:
    "apollo" |
    "btnCodeSandbox" |
    "btnDownload" |
    "btnExternalLink" |
    "btnSend" |
    "chrome" |
    "codeSandbox" |
    "firefox" |
    "gitHub" |
    "graphql" |
    "ie" |
    "javascript" |
    "logo" |
    "linkedIn" |
    "node" |
    "opera" |
    "react" |
    "safari" |
    "typescript" |
    "unknown" |
    "webpack";
  isActive?: boolean;
  isResponsive?: boolean;
  overflow?: "hidden" | "visible";
  shouldDisplayGlowAnimation?: boolean;
  shouldGlowOnHover?: boolean;
  width?: string | Spacing;
}

type SVGIcon = FunctionComponent<SVGProps<SVGSVGElement> & { title?: string }>;

export type IconContainerProps = Partial<IconProps>;
