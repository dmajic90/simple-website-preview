import { SAVE_RESULTS } from './types.js';
import axios from 'axios';

export const fetchResults = searchText => dispatch => {
  axios
    .get('http://api.tvmaze.com/search/shows?q=' + searchText)
    .then(response =>
      dispatch({
        type: SAVE_RESULTS,
        payload: response.data
      })
    );
};
