import { combineReducers, createStore } from 'redux';

import * as ducks from './ducks';

const reducers = combineReducers(ducks);

const store = createStore(
  reducers,
  window &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

