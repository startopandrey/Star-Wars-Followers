import {colors, ColorTypes} from './colors';
import {space, lineHeights, LineHeightsType, SpaceType} from './spacing';
import {sizes, SizesType} from './sizes';

import {DefaultTheme} from 'styled-components/native';
import {fontWeights, fontSizes, FontSizesType, FontWeightsType} from './fonts';
import {borderRadius, BorderRadiusType} from './borderRadius';
export interface ThemeType {
  colors: ColorTypes;
  space: SpaceType;
  lineHeights: LineHeightsType;
  sizes: SizesType;
  borderRadius: BorderRadiusType;
  fontSizes: FontSizesType;
  fontWeights: FontWeightsType;
}
export const theme: DefaultTheme = {
  colors,
  borderRadius,
  space,
  lineHeights,
  sizes,

  fontSizes,
  fontWeights,
};
