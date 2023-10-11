export type FollowersStackNavigatorParamList = {
  Followers: undefined;
  FollowerDetails: undefined;
};

export default interface Follower {
  id?: string;
  birthYear: string;
  eyeColor?: string;
  films?: string[];
  gender: string;
  hairColor?: string;
  height?: string;
  homeworld?: string;
  mass?: string;
  name: string;
  skinColor?: string;
  species?: string[];
  starships?: string[];
  vehicles?: string[];
} // eslint-disable-line

export interface FollowersContextType {
  followers: Follower[] | null;
  isLoading: boolean;
}
