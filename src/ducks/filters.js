import deepFreeze from 'deep-freeze-es6';

// Actions

const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

// Action Creators

export const setVisibilityFilter = (filter) => ({
  type: SET_VISIBILITY_FILTER,
  filter,
});

// Reducers

const intitalState = deepFreeze({
  active: 'SHOW_ALL',
  options: [{
      key: 'SHOW_ALL',
      name: 'All',
    }, {
      key: 'SHOW_ACTIVE',
      name: 'Active',
    }, {
      key: 'SHOW_COMPLETED',
      name: 'Completed',
    }]
});

const filters = (state = intitalState, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return {
        ...state,
        active: action.filter,
      };
    default:
      return state;
  }
}

export default filters;
