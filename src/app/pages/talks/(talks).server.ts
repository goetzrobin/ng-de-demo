import {queryTalksFromDatabase} from '../../../talk';

export const load = async () => {
  console.log('loading talks.server');
  return { talks: queryTalksFromDatabase() };
};
