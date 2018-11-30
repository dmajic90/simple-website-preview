import { ADD_TO_LIST } from './types.js';

let nextListID = 0;
export const addToList = showID => ({
  type: ADD_TO_LIST,
  payload: showID,
  id: nextListID++
});
