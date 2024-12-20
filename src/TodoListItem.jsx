import React from 'react';

const TodoListItem = ({task, onRemoveTodo}) => {
  return (
    <li>{task.title}
    <button onClick={() => onRemoveTodo(task.id)}>done</button>
    </li>
  );
};

export default TodoListItem;