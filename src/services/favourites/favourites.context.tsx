import React, {createContext, useState} from 'react';
import Follower from '../../types/followers';

interface FavouritesContextType {
  favourites: Follower[];
  addToFavourites: (apartment: Follower) => void;
  removeFromFavourites: (apartment: Follower) => void;
  removeAllFavourites: () => void;
}
export const FavouritesContext = createContext<FavouritesContextType>(
  {} as FavouritesContextType,
);

export const FavouritesContextProvider = ({children}) => {
  const [favourites, setFavourites] = useState<Follower[]>([]);

  const add = (follower: Follower) => {
    setFavourites([...favourites, follower]);
  };

  const remove = (follower: Follower) => {
    const newFavourites = favourites.filter(x => x.id !== follower.id);

    setFavourites(newFavourites);
  };
  const removeAll = async () => {
    const newFavourites = [];
    setFavourites(newFavourites);
  };

  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        addToFavourites: add,
        removeFromFavourites: remove,
        removeAllFavourites: removeAll,
      }}>
      {children}
    </FavouritesContext.Provider>
  );
};
