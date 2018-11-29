import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import reducers from '../reducers/reducers';
import thunk from 'redux-thunk';

const initialState = {};

const middleware = [thunk];

export const store = createStore(
  combineReducers({
    state: reducers
  }),
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
