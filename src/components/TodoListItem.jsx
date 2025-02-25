import React from 'react';
import style from './TodoListItem.module.css'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const TodoListItem = ({ task, onRemoveTodo }) => {

  return (
    <li className={style.ListItem}>
      <div>
        {task.title}
      </div>
      <div>
      <span className={style.btnRemove} onClick={() => onRemoveTodo(task.id)}> Remove </span>
      <span><Link to={`/view/${task.id}`}>view</Link></span>
      </div>
      

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