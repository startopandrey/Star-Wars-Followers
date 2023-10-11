import axios from 'axios';
import {serverUrl} from '../../utils/env.utils';
import camelize from 'camelize';
export const followersRequest = async () => {
  try {
    return await axios.get(`${serverUrl}/api/people/`).then(res => res);
  } catch (error) {
    console.log('cannot request followers');
    return null;
  }
};
export const followersTransform = data => {
  if (data) {
    const camelizedFollowers = camelize(data);
    const followerWithId = camelizedFollowers.map(el => ({
      ...el,
      id: el.created,
    }));
    return followerWithId;
  }
  return [];
};
