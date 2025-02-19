import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/TodoList'
import { useEffect } from 'react'
import TodoList from './components/TodoList'
import AddTodoForm from './components/AddTodoForm'
import Search from './Search'
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
function App() {
  const [todoList, setTodoList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  // Fetch data from Airtable
  const fetchData = async () => {
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`
      }
    }
    const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}?view=Grid%20view`
    try {
      const response = await fetch(url, options)
      if (!response.ok) throw new Error('Network response was not ok')
      const data = await response.json()
      console.log(data)
      const todos = data.records.map((todo) => {
        const newTodo = {
          id: todo.id,
          title: todo.fields.title
        }
        return newTodo
      })
      setTodoList(todos)
      setIsLoading(false)
    } catch (error) {
      console.error('Error:', error)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  const removeTodo = (id) => {
    setTodoList(todoList.filter(todo => todo.id !== id));
  };


  return (
    <Router>
      <Routes>
        {/* Define the route for the todo list page */}
        <Route path='/' element={
      <>
        {isLoading ? <p>Loading...</p> : todoList.length === 0 ? <p>No todos available.</p> : ''}
        {isLoading ? <p>Loading...</p> : ''}
        <h1>Todo List</h1>
        {/* Pass the addTodo function as a prop to AddTodoForm component */}
        <AddTodoForm onAddTodo={addTodo} />
        {/* Pass the todoList as a prop to the TodoList component */}
        <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
        {/* Include the Search component */}
        {/* <Search /> */}
      </>
        } />
        <Route path='/new' element = {
        <h1>New To Do List</h1>
        } />
      </Routes>
    </Router>
  )
}
export default App
