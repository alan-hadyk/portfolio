import { Spacing } from "<styles>/variables/__typings__/variables.d.ts";

export interface LinkProps {
  children: JSX.Element;
  dataCy?: string;
  dataTestId?: string;
  display?: "block" | "inline";
  height?: Spacing | "unset" | "50%" | "100%";
  href: string;
  isExternal?: boolean;
  isHoverable?: boolean;
}

