import React from 'react';
import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
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
InputWithLabel.propTypes = {
  handleTitleChange: PropTypes.func.isRequired,
  todoTitle: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default InputWithLabel;