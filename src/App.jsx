import { useState } from 'react'
import './App.css'
import './components/TodoList'
import { useEffect } from 'react'
import TodoList from './components/TodoList'
import AddTodoForm from './components/AddTodoForm'
import ItemDetail from './components/ItemDetail'
import styles from './App.module.css'
import Search from './Search'
import { BrowserRouter as Router, Routes, Route, data, useParams } from "react-router-dom";
import NavigationBar from './components/navigationBar'
function App() {
  const [todoList, setTodoList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [sortOrder, setSortOrder] = useState('asc')
  // Fetch data from Airtable
  const fetchData = async () => {
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`
      }
    }
    const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}?view=Grid%20view&sort[0][field]=title&sort[0][direction]=asc`
    try {
      const response = await fetch(url, options)
      if (!response.ok) throw new Error('Network response was not ok')
      const data = await response.json()
      const sortedRecords = data.records.sort((objectA, objectB) => {
        const titleA = objectA.fields.title.toLowerCase();
        const titleB = objectB.fields.title.toLowerCase();

        if (titleA < titleB) return sortOrder == 'asc' ? -1 : 1;
        if (titleA > titleB) return sortOrder == 'asc' ? 1 : -1;
        return 0;
      });

      const todos = sortedRecords.map((todo) => {
        return {
          id: todo.id,
          title: todo.fields.title
        }
      })
      setTodoList(todos)
      setIsLoading(false)
    } catch (error) {
      console.error('Error:', error)
    }
  }
  useEffect(() => {
    fetchData()
  }, [sortOrder])

  const addTodo = async (newTodo) => {
    console.log(newTodo)
    // setTodoList([...todoList, newTodo]);
    const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}`
    const body = {
      fields: newTodo
    }
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
      })
      if (response.ok) {
        console.info('todo added successfully!')
        fetchData()
      } else {
        console.error('form submission failed!', response.statusText)
      }
    } catch (error) {
      console.log('Network error:', error)
    }

  };
  const removeTodo = async (id) => {
    const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}/${id}`;
    
    try {
      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
        },
      });
      
      if (!response.ok) {
        throw new Error('Failed to delete item');
      }

      setTodoList((prevTodoList) => prevTodoList.filter((todo) => todo.id !== id));
      
    } catch (error) {
      console.error('Network error:', error);
    }
  };
  
  const toggleSortOrder = () => {
    setSortOrder(prevSortOrder => (prevSortOrder === 'asc' ? 'desc' : 'asc'));
  }


  return (
    <Router>
      <Routes>
        {/* Define the route for the todo list page */}
        <Route path='/' element={<NavigationBar />}>
          <Route index element={
            <>
              {isLoading ? <p>Loading...</p> : todoList.length === 0 ? <p>No todos available.</p> : ''}
              <h1 className={styles.headerTitle}>Todo List</h1>
              <button onClick={toggleSortOrder}>{sortOrder === 'asc' ? 'Des' : 'Asc'}</button>
              {/* Pass the addTodo function as a prop to AddTodoForm component */}
              <AddTodoForm onAddTodo={addTodo} />
              {/* Pass the todoList as a prop to the TodoList component */}
              <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
              {/* Include the Search component */}
              {/* <Search /> */}
            </>
          } />
          <Route path='/new' element={
            <h1>New To Do List</h1>
          } />
          <Route path='/view/:id' element={<ItemDetail />} />
          <Route path='/about' element={
            <div>
              <h1>about</h1>
              <span className={styles.content}>
              Welcome to our Todo App! It's designed to help you keep track of your tasks and stay organized🚀. Fully developed with React JS ⚛️ and powered by a reliable API, this app offers an easy and efficient way to manage your to-do list.
              </span>
            </div>
          } />
          <Route path='*' element={
            <>
             <h1>404 ;)</h1>
             <p>no page found.</p>
            </>
          } />
        </Route>
      </Routes>
    </Router> 
  )
}
export default App
