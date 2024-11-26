import React from 'react';

const AddTodoForm = (props) => {
  const handleAddTodo = (event) => {
    // prevent the form from reloading the page
    event.preventDefault()
    const todoTitle = event.target.elements.title.value;
    // Log the todo title
    console.log(todoTitle)
    props.onAddTodo(todoTitle)
    // Reset the form fields
    event.target.reset()
  }
  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Title</label>
      <input type="text" name="title" id="todoTitle" />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodoForm;