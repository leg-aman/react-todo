import React, { useState } from 'react';
import InputWithLabel from './InputWithLabel'
const AddTodoForm = ({ onAddTodo }) => {
  const [todoTitle, setTodoTitle] = useState('')

  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value
    setTodoTitle(newTodoTitle)
  }

  const handleAddTodo = (event) => {
    // prevent the form from reloading the page
    event.preventDefault()
    // pass the todoTitle to the parent component via the onAddTodo prop
    onAddTodo({
      title: todoTitle,
      id: Date.now()
    })
    // Reset the form fields
    setTodoTitle('')
  }

  return (
    <form onSubmit={handleAddTodo}>
      <InputWithLabel todoTitle={todoTitle} handleTitleChange={handleTitleChange}>
        Title
      </InputWithLabel>
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodoForm;