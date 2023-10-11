import {createContext, useEffect, useState} from 'react';
import Follower, {FollowersContextType} from '../../types/followers';
import {followersRequest, followersTransform} from './followers.service';

export const FollowersContext = createContext<FollowersContextType>(
  {} as FollowersContextType,
);
export const FollowersContextProvider = ({children}) => {
  const [followers, setFollowers] = useState<Follower[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const retrieveFollowers = (): void => {
    setIsLoading(true);
    followersRequest()
      .then(data => {
        const jsonData = data?.data.results;
        const transformedData = followersTransform(jsonData);
        setFollowers(transformedData);
        return transformedData;
      })
      .then((results: Follower[]): void => {
        setIsLoading(false);
        if (results) {
          setFollowers(results);
        }
      })

      .catch(() => {
        setIsLoading(false);
      });
  };
  useEffect(() => {
    if (followers.length === 0) {
      retrieveFollowers();
    }
  }, [followers]);

  return (
    <FollowersContext.Provider value={{followers, isLoading}}>
      {children}
    </FollowersContext.Provider>
  );
};
