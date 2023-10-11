import React from 'react';
import {Card as CardPaper} from 'react-native-paper';
import styled from 'styled-components/native';
const CardWrapper = styled(CardPaper)`
  flex: 1;
`;
interface Props {
  count: number;
  title: 'Female Fans' | 'Male Fans' | 'Others';
}
export const Card = ({count, title}: Props) => {
  return (
    <CardWrapper>
      <CardPaper.Title title={`${count}`} subtitle={title} />
    </CardWrapper>
  );
};
