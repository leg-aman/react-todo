import React from 'react';
import TodoListItem from './TodoListItem';
const TodoList = ({todoList, onRemoveTodo}) => {
    return (
        <ul>
            {todoList.map((task) => (
                <TodoListItem key={task.id} task={task}  onRemoveTodo={onRemoveTodo} />
            ))}
        </ul>
    );
};
export default TodoList;