import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj={
    userName:"Raj Tripathi",
    age:24
  }

  let newArray=[1,2,3,4,5]

  return (
    <>
        
        <h1 className="text-5xl font-bold text-white bg-slate-800 p-4 rounded-lg">
        Tailwind Working 🚀
        </h1>
        

  
    <Card username="chai aur code" btnText="Visit For More" />
    <Card username="Raj Tripathi" btnText="Click ME"/>

       
    </>
  )
}

export default App
