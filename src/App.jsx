import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './TodoList'
import TodoList from './TodoList'
import AddTodoForm from './AddTodoForm'
import Search from './Search'
function App() {
  // create a state variable named 'newTodo' to store the new todo
  const [newTodo, setNewTodo] = useState('')
  return (
    <>
      <h1>Todo List</h1>
      {/* pass setNewTodo to AddTodoForm as onAddTodo prop */}
      <AddTodoForm onAddTodo={setNewTodo} />
      <p>{newTodo}</p>
      <TodoList />
      <Search />
    </>
  )
}

export default App
