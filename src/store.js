import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import todos from './ducks/todos';
import filters from './ducks/filters';

const rootReducer = combineReducers({
  todos,
  filters,
  routing: routerReducer,
});

const store = createStore(
  rootReducer,
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

export default store;
