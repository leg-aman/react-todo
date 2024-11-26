import React from 'react';
import TodoListItem from './TodoListItem';
const todoList = [
    {
        id: 1,
        title: "💪 gym",
    },
    {
        id: 2,
        title: "📖 studying"
    },
    {
        id: 3,
        title: " 💻practice coding"
    },
    {
        id: 4,
        title: "🧑‍🤝‍🧑 meeting with mentor"
    }
]

const TodoList = () => {
    return (
        <>
            <ul>
                {todoList.map((task) => (
                    <TodoListItem key={task.id} task={task} />
                ))}
            </ul>
        </>
    );
};

export default TodoList;