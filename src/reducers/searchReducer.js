import { SAVE_RESULTS } from '../actions/types';

const initialState = {
  items: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SAVE_RESULTS:
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
}
