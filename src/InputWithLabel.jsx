import React from 'react';
import { useRef, useEffect } from 'react';
const InputWithLabel = ({ todoTitle, handleTitleChange, children }) => {
  const inputRef = useRef()
  useEffect(() => {
    inputRef.current.focus()
  }, [])
  return (
    <>
      <label htmlFor="todoTitle">{children}</label>
      <input
        type="text"
        name="title"
        id="todoTitle"
        value={todoTitle}
        onChange={handleTitleChange}
        ref={inputRef} />
    </>
  );
};

export default InputWithLabel;