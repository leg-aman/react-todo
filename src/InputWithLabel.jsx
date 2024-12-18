import React from 'react';

const InputWithLabel = ({ todoTitle, handleTitleChange }) => {
  return (
    <>
      <label htmlFor="todoTitle">Title</label>
      <input type="text" name="title" id="todoTitle" value = {todoTitle} onChange={handleTitleChange}/>
    </>
  );
};

export default InputWithLabel;