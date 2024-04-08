
import { useState } from 'react'
import './App.css'

function App() {

  const[counter, setcount] = useState(0)

  const addValue = () => {
    setcount( counter + 1 )
  }

  const removeValue = () => {
    setcount( counter - 1 )
  }
  

  return (
    <>
      <h1>React + Vite</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Add Value</button> {" "}
      <button onClick={removeValue}>Remove Value</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
