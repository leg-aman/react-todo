import React from 'react';

const TodoListItem = ({task}) => {
  return (
    <li>{task.title}</li>
  );
};

export default TodoListItem;