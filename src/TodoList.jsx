import React from 'react';
import TodoListItem from './TodoListItem';
const TodoList = ({todoList}) => {
    return (
        <ul>
            {todoList.map((task) => (
                <TodoListItem key={task.id} task={task} />
            ))}
        </ul>
    );
};
export default TodoList;