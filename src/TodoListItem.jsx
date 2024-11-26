import React from 'react';

const TodoListItem = (props) => {
  return (
    <li>{props.task.title}</li>
  );
};

export default TodoListItem;