import React from 'react';

const TodoListItem = ({task, onRemoveTodo}) => {
  return (
    <li>{task.title}
    <button onClick={() => onRemoveTodo(task.id)}> Remove </button>
    </li>
  );
};

export default TodoListItem;