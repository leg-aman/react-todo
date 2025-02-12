import React from 'react';
import style from './TodoListItem.module.css'
import PropTypes from 'prop-types';
const TodoListItem = ({ task, onRemoveTodo }) => {

  return (
    <li className={style.ListItem}>{task.title}
      <button className={style.btnRemove} onClick={() => onRemoveTodo(task.id)}> Remove </button>
    </li>
  );

};

TodoListItem.propTypes = {
  task: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
  onRemoveTodo: PropTypes.func.isRequired
}

export default TodoListItem;