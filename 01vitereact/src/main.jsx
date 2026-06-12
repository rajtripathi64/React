import React from 'react'
import ReactDOM from 'react-dom/client'
import {jsx as _jsx} from 'react/jsx-runtime.js'
import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h1>Custom App!</h1>
      
    </div>
  );
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://www.google.com',
//         target: '_blank',
        
//     },
//     children: 'click me to visit google'
// }

const anotherUser= "Chai aur react"

const reactElement= React.createElement(
  'a',
  {
    href: 'https://www.google.com',
    target: '_blank' 
  },
  'click me to visit google',
  anotherUser
)

const anotherElement=(
  <a href="https://www.google.com" target="_blank">
    click me to visit google
  </a>
)



ReactDOM.createRoot(document.getElementById('root'))
.render(
  
  <App />

)
