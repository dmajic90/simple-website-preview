import {
  ADD_TO_LIST,
  ADD_TO_SAVED_LIST,
  DELETE_LIST,
  REMOVE_FROM_LIST,
  REMOVE_FROM_SAVED_LIST,
  RESET_SEARCH_PREVIEW,
  SAVE_NEW_LIST
} from './types.js';

let nextListID = 3;

export const addToList = showID => ({
  type: ADD_TO_LIST,
  payload: showID
});

export const addToSavedList = (showID, listID) => ({
  type: ADD_TO_SAVED_LIST,
  payload: {
    list: listID,
    show: showID
  }
});

export const deleteList = listID => ({
  type: DELETE_LIST,
  payload: listID
});

export const removeFromList = showID => ({
  type: REMOVE_FROM_LIST,
  payload: showID
});

export const removeFromSavedList = (listID, showID) => ({
  type: REMOVE_FROM_SAVED_LIST,
  payload: {
    list: listID,
    show: showID
  }
});

export const resetSearchAndPreview = () => ({
  type: RESET_SEARCH_PREVIEW
});

export const saveNewList = function(newList) {
  newList.listID = nextListID;
  nextListID++;
  return {
    type: SAVE_NEW_LIST,
    payload: newList
  };
};
