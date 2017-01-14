import React from 'react';
import ToDoItem from '../primitives/ToDoItem';

const Todo = (props) => (
  <ToDoItem
    onClick={props.onClick}
    completed={props.completed}
  >
    {props.text}
  </ToDoItem>
)

export default Todo;
