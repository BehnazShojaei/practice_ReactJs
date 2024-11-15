import { useState } from 'react'
// useState is a special function from react
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [message,setMessage] = useState("Hi, all!")

  const updateMessage = () =>{
    setMessage("Hello, React!")

  }

  return (
  <div>
    <h1>{message}</h1>
    <button onclick={updateMessage}>Update Message</button>
    
    </div>
  
  );
}

export default App
