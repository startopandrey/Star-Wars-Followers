import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import Follower, {
  FollowersStackNavigatorParamList,
} from '../../../types/followers';
type Props = NativeStackScreenProps<
  FollowersStackNavigatorParamList,
  'Followers'
>;
import {
  ClearButton,
  CounterWrapper,
  Header,
  Title,
} from '../components/followers.styles';
import {Card} from '../components/card.component';
import {SafeArea} from '../../../components/safe-area/safe-area.component';
import {FollowersTable} from '../components/followers-table.component';
import {FavouritesContext} from '../../../services/favourites/favourites.context';
export const FollowersScreen = ({navigation}: Props) => {
  const {favourites, removeAllFavourites} = React.useContext(FavouritesContext);
  const femaleCount = favourites.filter(
    (el: Follower) => el.gender === 'female',
  ).length;
  const maleCount = favourites.filter(
    (el: Follower) => el.gender === 'male',
  ).length;
  const otherCount = favourites.filter(
    (el: Follower) => el.gender === 'n/a',
  ).length;
  return (
    <SafeArea>
      <Header>
        <Title variant="title">Fans</Title>
        <ClearButton mode="outlined" onPress={removeAllFavourites}>
          Clear fans
        </ClearButton>
      </Header>
      <CounterWrapper>
        <Card count={femaleCount} title={'Female Fans'} />
        <Card count={maleCount} title={'Male Fans'} />
        <Card count={otherCount} title={'Others'} />
      </CounterWrapper>
      <FollowersTable navigation={navigation}></FollowersTable>
    </SafeArea>
  );
};
