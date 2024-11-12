import React from 'react';

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
            <ul>{
                todoList.map((i) => {
                    return <li key={i.id}>{i.title}</li>
                })
            }</ul>
        </>
    );
};

export default TodoList;