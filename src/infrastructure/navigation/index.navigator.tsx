import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {FollowersNavigator} from './followers.navigator';
import {FollowersContextProvider} from '../../services/followers/followers.context';
import {FavouritesContextProvider} from '../../services/favourites/favourites.context';

export const Navigation = (): React.JSX.Element | null => {
  const isAuthenticated = true;
  if (!isAuthenticated) {
    return null;
  }

  return (
    <NavigationContainer>
      <FavouritesContextProvider>
        <FollowersContextProvider>
          <FollowersNavigator />
        </FollowersContextProvider>
      </FavouritesContextProvider>
    </NavigationContainer>
  );
};
