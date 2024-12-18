import React from 'react';

const InputWithLabel = ({ todoTitle, handleTitleChange, label }) => {
  return (
    <>
      <label htmlFor="todoTitle">{label}</label>
      <input type="text" name="title" id="todoTitle" value = {todoTitle} onChange={handleTitleChange}/>
    </>
  );
};

export default InputWithLabel;