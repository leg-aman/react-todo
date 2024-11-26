import React from 'react';

const Search = () => {
  const handler = (event) => {
    console.log(event)
    console.log(event.target.value)
  }
  return (
    <>
      <form action="">
        <label htmlFor="search">search</label>
        <input type="text" name="" id="search" onChange={handler} />
      </form>
    </>
  );
};

export default Search;