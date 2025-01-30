import React from 'react';
import style from './TodoListItem.module.css'

const TodoListItem = ({task, onRemoveTodo}) => {
  return (
    <li className={style.ListItem}>{task.title}
    <button className={style.btnRemove} onClick={() => onRemoveTodo(task.id)}> Remove </button>
    </li>
  );
};

export default TodoListItem;