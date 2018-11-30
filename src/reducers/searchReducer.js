import { SAVE_RESULTS, ADD_TO_LIST } from '../actions/types';

const initialState = {
  items: [],
  listItems: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SAVE_RESULTS:
      return {
        ...state,
        items: action.payload
      };
    case ADD_TO_LIST:
      return {
        ...state,
        listItems: state.items.filter(function(item) {
          return item.show.id == action.payload;
        }),
        id: action.id
      };
    default:
      return state;
  }
}
