import React from 'react';
import {ThemeType, theme} from '../../infrastructure/theme';
import styled, {DefaultTheme} from 'styled-components/native';

const defaultTextStyles = (theme: ThemeType) => `
 
  font-weight: ${theme.fontWeights.medium};
  color: ${theme.colors.text.primary};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
  text-transform: capitalize;
`;

const body = (theme: ThemeType, color: string) => `
   font-size: ${theme.fontSizes.subtitle};
   
    font-weight: ${theme.fontWeights.regular};
    color: ${color}
`;

const hint = (theme: ThemeType, color: string) => `
    font-size: ${theme.fontSizes.body};
    color: ${color}
`;

const error = (theme: ThemeType, color: string) => `
    color: ${color ? color : theme.colors.text.error};

`;

const caption = (theme: ThemeType, color: string) => `

    font-size: ${theme.fontSizes.caption};
    font-weight: ${theme.fontWeights.bold};
    color: ${color}
`;
const subtitle = (theme: ThemeType, color: string) => `

    font-size: ${theme.fontSizes.subtitle};
    font-weight: ${theme.fontWeights.bold};
    color: ${color}
`;
const title = (theme: ThemeType, color: string) => `

    font-size: ${theme.fontSizes.title};
    font-weight: ${theme.fontWeights.bold};
    color: ${color}
`;

const label = (theme: ThemeType, color: string) => `

    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.fontWeights.medium};
    color: ${color}
`;
type VariantsType =
  | 'body'
  | 'label'
  | 'caption'
  | 'error'
  | 'hint'
  | 'title'
  | 'subtitle';
const variants = {
  body,
  label,
  caption,
  error,
  hint,
  subtitle,
  title,
};
interface TextProps {
  variant: VariantsType;
  color?: string;
  theme: DefaultTheme;
  children: React.ReactNode;
}
export const Text = styled.Text`
  ${({theme}) => defaultTextStyles(theme)}
  ${({variant, theme, color}: TextProps) => variants[variant](theme, color!)}
`;

Text.defaultProps = {
  variant: 'body',
  color: theme.colors.text.primary,
};
