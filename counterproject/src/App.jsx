import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter]=useState(0)
  const addvalue=()=>{
    console.log("Clicked",counter);
    if(counter<20){
      setCounter(counter+1);
    }
    else
    {
      setCounter(counter);
    }
  }

  const removevalue=()=>{
    console.log("Clicked",counter);
    if(counter>0){
    setCounter(counter-1);
    }
    else
    {
      setCounter(counter);
    }
  }

  return (
    <>
      <h1>New Counter Project</h1>
      <h2>Counter Value: {counter}</h2>
      <button
      onClick={addvalue}
      >Add Value</button>
      <br></br>
      <button
      onClick={removevalue}
      >Remove Value</button>
    </>
  )
}

export default App
