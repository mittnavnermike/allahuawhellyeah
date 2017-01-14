import deepFreeze from 'deep-freeze-es6';

// Actions

const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';

// Action Creators

let nextTodoId = 0;

export const addTodoItem = (text) => {
  return {
    type: ADD_TODO,
    id: nextTodoId++,
    text,
  }
};

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id,
});

// Reducers

const todos = (state = deepFreeze([]), action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state, {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case TOGGLE_TODO:
      const newState = state.map(todo => {
        if (todo.id !== action.id) {
          return todo
        };
        return {
            ...todo,
           completed : !todo.completed,
        };
      });
      return newState;
    default:
      return state;
  }
}

export default todos;
