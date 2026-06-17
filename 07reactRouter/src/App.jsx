import { useState } from 'react'
import './App.css'

import Home from './componenets/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 class="text-3xl text-center bg-green-600 font-bold underline">
    React Router!
  </h1>

   
    </>
  )
}

export default App
