import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {FollowersScreen} from '../../features/followers/screens/followers.screen';
import {FollowersDetailScreen} from '../../features/followers/screens/follower-details.screen';
import {FollowersStackNavigatorParamList} from '../../types/followers';
const FollowersStack = createStackNavigator<FollowersStackNavigatorParamList>();

export const FollowersNavigator = (): React.JSX.Element => {
  return (
    <FollowersStack.Navigator headerMode="none">
      <FollowersStack.Screen name="Followers" component={FollowersScreen} />
      <FollowersStack.Screen
        name="FollowerDetails"
        component={FollowersDetailScreen}
      />
    </FollowersStack.Navigator>
  );
};
