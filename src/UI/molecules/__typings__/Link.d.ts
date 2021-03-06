import { Spacing } from "styles/variables/__typings__/variables";

export interface LinkProps {
  children: JSX.Element;
  dataCy?: string;
  dataTestId?: string;
  display?: "block" | "inline";
  height?: Spacing | "unset" | "50%" | "100%" | "auto";
  href: string;
  isExternal?: boolean;
  isHoverable?: boolean;
  width?: string | Spacing;
}

export type LinkContainerProps = Partial<LinkProps>;

export interface RenderChildrenArgs {
  children: LinkProps["children"];
  isHoverable?: LinkProps["isHoverable"];
}
