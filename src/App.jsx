import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const todoList = [
  {
    id: 1,
    title: "gym",
  },
  {
    id: 2,
    title: "studying"
  },
  {
    id: 3,
    title: "practice coding"
  }
]

function App() {
  

  return (
    <>
      <h1>Todo List</h1>
      <ul>{
        todoList.map((i)=>{
          return <li key={i.id}>{i.title}</li>
        })
        }</ul>
    </>
  )
}

export default App
