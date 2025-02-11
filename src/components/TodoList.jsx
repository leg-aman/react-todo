import React from 'react';
import TodoListItem from './TodoListItem';
import PropTypes from 'prop-types';
const TodoList = ({todoList, onRemoveTodo}) => {
    return (
        <ul>
            {todoList.map((task) => (
                <TodoListItem key={task.id} task={task}  onRemoveTodo={onRemoveTodo} />
            ))}
        </ul>
    );
};

TodoList.propTypes = {
    todoList: PropTypes.array.isRequired,
    onRemoveTodo: PropTypes.func.isRequired,
}

export default TodoList;