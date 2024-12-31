import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './TodoList'
import { useEffect } from 'react'
import TodoList from './TodoList'
import AddTodoForm from './AddTodoForm'
import Search from './Search'


function App() {
 // Initialize 'todoList' with the value from localStorage or an empty array if not found
  const [todoList, setTodoList] = useState([])
  useEffect(() => {
    const myPromise = new Promise((resolve, reject) => {
      setTimeout( () => {
        resolve({data : {
          todoList: JSON.parse(localStorage.getItem('savedTodoList')) || []
        }})
      }, 2000)
      })
      // extract the todoList from the result object in the .then() method: setTodoList(result.data.todoList)
      myPromise.then((result)=> {
        setTodoList(result.data.todoList)
      
    })
    }, [])
  
  // Update localStorage every time 'todoList' changes
  useEffect(() => {
    localStorage.setItem('savedTodoList', JSON.stringify(todoList))
  }, [todoList])  // The hook depends on 'todoList' state change

  // Function to add a new todo item to the list
  const addTodo = (newTodo) => {
    setTodoList((prevList) => [...prevList, newTodo])  // Update state by appending the new todo
  }
  const removeTodo = (id) => {
    const newTodoList = todoList.filter(todo => todo.id !== id); 
    setTodoList(newTodoList); 
  };

  return (
    <>
      <h1>Todo List</h1>
      {/* Pass the addTodo function as a prop to AddTodoForm component */}
      <AddTodoForm onAddTodo={addTodo} />
      {/* Pass the todoList as a prop to the TodoList component */}
      <TodoList todoList={todoList}  onRemoveTodo={removeTodo}/>
      {/* Include the Search component */}
      {/* <Search /> */}
    </>
  )
}

export default App
