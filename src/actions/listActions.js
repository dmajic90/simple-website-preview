import { ADD_TO_LIST, REMOVE_FROM_LIST } from './types.js';

export const addToList = showID => ({
  type: ADD_TO_LIST,
  payload: showID
});

export const removeFromList = showID => ({
  type: REMOVE_FROM_LIST,
  payload: showID
});
