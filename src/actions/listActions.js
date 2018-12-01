import {
  ADD_TO_LIST,
  REMOVE_FROM_LIST,
  SAVE_NEW_LIST,
  RESET_SEARCH_PREVIEW
} from './types.js';

export const addToList = showID => ({
  type: ADD_TO_LIST,
  payload: showID
});

export const removeFromList = showID => ({
  type: REMOVE_FROM_LIST,
  payload: showID
});

export const saveNewList = newList => ({
  type: SAVE_NEW_LIST,
  payload: newList
});

export const resetSearchAndPreview = () => ({
  type: RESET_SEARCH_PREVIEW
});
