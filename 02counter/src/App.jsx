import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(15)

  //let counter=5

  const addValue=()=>{
    
    //counter=counter+1;
   if(counter<50){
     setCounter(prevcounter=>prevcounter+1);
     setCounter(prevcounter=>prevcounter+1);
   }

    console.log("clicked", counter);
  }

  const subtractValue=()=>{
    console.log("subtracted", counter);
    if(counter>0){
    setCounter(counter-1);
    }
  }

  return (
    <>
     <h1>Learn React with Chai</h1>
     <br/>
     <h2>Counter value:{counter}</h2>

     <button 
      onClick={addValue}>
      Add value: {counter}</button>
     <br />
     <button
     onClick={subtractValue}>
      Subtract Value: {counter}</button>
     <p>footer: {counter}</p>
    </>
  )
}

export default App
