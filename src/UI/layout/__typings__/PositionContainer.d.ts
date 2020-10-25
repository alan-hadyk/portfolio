import { Spacing, ZIndex } from "styles/variables/__typings__/variables";

export interface PositionContainerProps {
  bottom?: Spacing | string;
  children: JSX.Element | JSX.Element[];
  dataCy?: string;
  dataTestId?: string;
  height?: Spacing | string;
  left?: Spacing | string;
  position?: "static" | "relative" | "fixed" | "sticky" | "absolute";
  right?: Spacing | string;
  top?: Spacing | string;
  transform?: string;
  width?: string | Spacing;
  zIndex?: ZIndex;
}
