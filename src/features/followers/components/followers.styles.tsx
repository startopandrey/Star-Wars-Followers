import styled from 'styled-components/native';
import {Text} from '../../../components/typography/text.component';
import {Button} from 'react-native-paper';
import {ThemeType} from '../../../infrastructure/theme';

export const Header = styled.View<{theme: ThemeType}>`
  padding: ${props => props.theme.space[2]};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const Title = styled(Text)``;
export const ClearButton = styled(Button)`
  height: 35px;
`;
export const CounterWrapper = styled.View<{theme: ThemeType}>`
  padding: ${props => props.theme.space[2]};
  gap: 10px;
  flex-direction: row;
  justify-content: space-between;
`;
