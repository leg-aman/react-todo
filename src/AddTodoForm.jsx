import React, { useState } from 'react';

const AddTodoForm = ({onAddTodo}) => {
  const [todoTitle, setTodoTitle] = useState('')

  const handleTitleChange = (event) =>{
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
      <label htmlFor="todoTitle">Title</label>
      <input type="text" name="title" id="todoTitle" value = {todoTitle} onChange={handleTitleChange}/>
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodoForm;