import { useState, useCallback, useEffect, useRef, use } from 'react'



function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");
  
  const passwordRef= useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if(numberAllowed){
      str+="0123456789"
    }
    if(characterAllowed){
      str+="!@$%^&*_"
    }
    for(let i=1; i<=length; i++){
      let char = Math.floor(Math.random()*str.length+1);
      pass+=str.charAt(char)

    }

    setPassword(pass)

  },[length, numberAllowed, characterAllowed, setPassword])

  const copyPasswordToClipboard= useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,80)
    window.navigator.clipboard.writeText(password)
  },[password])
   
  useEffect(()=>{
    passwordGenerator()
  },[length, numberAllowed, characterAllowed, passwordGenerator])

  return (
    <>
    
    <div className='w-full max-w-md mx-auto  shadow-md rounded-lg px-4 
    py-2 my-3 text-orange-500 bg-gray-700  mt-10'>
       <h1 className="text-3xl text-center  font-bold underline">
    Password Generator!</h1>

      <div className='flex shadow rounded-lg overflow-hidden mb-4 mt-2 bg-white'>
        <input
        type="text"
        value={password}
        className='outline-none w-full py-1 px-3 text-gray-900 font-semibold text-lg'
        readonly        
        placeholder="Your Password"
        ref={passwordRef}
        ></input>
        <button 
        className='outline-none bg-blue-600 text-white py-1 px-3 shrink-0'
        onClick={copyPasswordToClipboard}>Copy</button>
      </div>  

      <div className='flex text-sm gap-x-2'>
         <div className='flem items-center gap-x-1'>
          <input
          type="range"
          min={8}
          max={80}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}}
          />
            <label>Lenght:{length}</label>
        </div>

        <div className='flem items-center gap-x-1'>
          <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id='numberInput'
          onChange={(e)=>{setNumberAllowed((prev)=>!prev);
          }}
          />
            <label htmlFor='numberInput'>Numbers</label>          
        </div>

        <div className='flem items-center gap-x-1'>
          <input
          type="checkbox"
          defaultCheked={characterAllowed}
          id='charInput'         
          onChange={(e)=>{setCharacterAllowed((prev)=>!prev);          
          }}
          />
            <label htmlFor='characterAllowed'>Characters</label>
        </div>   

      </div>
    </div>
    </>
  )
}

export default App
