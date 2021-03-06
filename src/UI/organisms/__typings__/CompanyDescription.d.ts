import { IconWithLabelProps } from "UI/molecules/__typings__/IconWithLabel";
import { UnorderedListProps } from "UI/molecules/__typings__/UnorderedList";

import { TextProps } from "UI/atoms/__typings__/Text";
import { Spacing } from "styles/variables/__typings__/variables";

export interface CompanyDescriptionProps {
  date: string;
  iconsWithLabels: IconWithLabelProps[];
  responsibilities: UnorderedListProps["items"];
  responsibilitiesPaddingBottom?: Spacing;
  textAlign?: TextProps["textAlign"];
  title: string;
}

export interface RenderResponsibilitiesArgs {
  responsibilities: UnorderedListProps["items"];
  responsibilitiesPaddingBottom?: Spacing;
}
