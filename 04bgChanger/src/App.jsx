import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}>
          <div className="fixed flex  flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
            <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white/50 backdrop-blur-md rounded-lg p-2">
              <button className="outline-none px-4 py-2 text-black rounded-2xl bg-white/50 backdrop-blur-md shadow-lg "
                style={{backgroundColor:"gray"}} 
                onClick={() => setColor("gray")}>Gray</button>
              <button className="outline-none px-4 py-2 text-white rounded-2xl bg-white/50  shadow-lg "
               style={{backgroundColor:"teal"}} 
               onClick={() => setColor("teal")}>Teal</button>
              <button className="outline-none px-4 py-2 text-black rounded-2xl bg-white/50  shadow-lg "
                style={{backgroundColor:"pink"}} 
                onClick={() => setColor("pink")}>Pink</button>
              <button className="outline-none px-4 py-2 text-white rounded-2xl bg-white/50  shadow-lg "
                style={{backgroundColor:"orange"}} 
                onClick={() => setColor("orange")}>Orange</button>
              <button className="outline-none px-4 py-2 text-white rounded-2xl bg-white/50  shadow-lg "
                style={{backgroundColor:"blue"}} 
                onClick={() => setColor("blue")}>Blue</button>
              <button className="outline-none px-4 py-2 text-white rounded-2xl bg-white/50  shadow-lg "
                style={{backgroundColor:"red"}} 
                onClick={() => setColor("red")}>Red</button>
              <button className="outline-none px-4 py-2 text-balck rounded-2xl bg-white/50  shadow-lg "
                style={{backgroundColor:"lavender"}} 
                onClick={() => setColor("lavender")}>Lavender</button>
              <button className="outline-none px-4 py-2 text-white rounded-2xl bg-white/50  shadow-lg "
                style={{backgroundColor:"black"}} 
                onClick={() => setColor("black")}>Black</button>  
               <button className="outline-none px-4 py-2 text-black rounded-2xl bg-white/50  shadow-lg "
                style={{backgroundColor:"white"}} 
                onClick={() => setColor("white")}>White</button>      
            
            </div>
          </div>
      </div>
    </>
  )
}

export default App
