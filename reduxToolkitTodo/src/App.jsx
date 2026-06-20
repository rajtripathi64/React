import React from 'react'

import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  

  return (
    <>
    <div className='container mx-auto px-4 '>
    <h1 className='text-center'>Learn about redux toolkit!</h1>
    <AddTodo/>
    <Todos/>
    </div>
    </>
  )
}

export default App
