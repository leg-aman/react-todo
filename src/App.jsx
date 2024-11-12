import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './TodoList'
import TodoList from './TodoList'
function App() {
  return (
    <>
      <h1>Todo List</h1>
      <TodoList />
    </>
  )
}

export default App
