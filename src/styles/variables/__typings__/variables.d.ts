import colorPalette from "<styles>/variables/colorPalette";
import fontSizes from "<styles>/variables/fontSizes";
import fontFamilies from "<styles>/variables/fontFamilies";
import spacing from "<styles>/variables/spacing";
import zIndex from "<styles>/variables/zIndex";

export type ColorPalette = keyof typeof colorPalette;
export type FontSizes = keyof typeof fontSizes;
export type FontFamilies = keyof typeof fontFamilies;
export type Spacing = keyof typeof spacing;
export type ZIndex = keyof typeof zIndex;
