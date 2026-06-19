import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <h1 class="text-3xl text-center bg-gray-800 text-white font-bold underline">
    Hello world!
  </h1>
    </>
  )
}

export default App
