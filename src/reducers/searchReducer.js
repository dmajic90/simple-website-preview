import {
  SAVE_RESULTS,
  ADD_TO_LIST,
  REMOVE_FROM_LIST,
  UPDATE_SEARCH_RESULTS
} from '../actions/types';

const initialState = {
  items: [],
  listItems: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SAVE_RESULTS:
      const addVisible = [...action.payload];
      return {
        ...state,
        items: addVisible.map(el => ({ ...el, visible: true }))
      };
    case ADD_TO_LIST:
      return {
        ...state,
        listItems: [
          ...state.listItems,
          ...state.items.filter(function(item) {
            return item.show.id === Number(action.payload);
          })
        ]
      };
    case REMOVE_FROM_LIST:
      return {
        ...state,
        listItems: state.listItems.filter(function(item) {
          return item.show.id !== Number(action.payload);
        })
      };
    case UPDATE_SEARCH_RESULTS:
      return {
        ...state,
        items: state.items.map(item =>
          item.show.id === Number(action.payload)
            ? { ...item, visible: true }
            : item
        )
      };

    default:
      return state;
  }
}
