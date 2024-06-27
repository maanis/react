import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  let [counter, setCounter] = useState(10)
  // let counter = 6

  function add() {
    if (counter < 20) {
      counter = counter + 1
      setCounter(counter)
    }

  }

  function remove() {
    if (counter > 0) {
      counter = counter - 1
      setCounter(counter)
    }

  }

  return (
    <>
      <h1 className='main'>Chai aur React {counter}</h1>
      <button
        onClick={add}
      >Add</button><br /><br />
      <button onClick={remove}>Remove</button>
    </>
  )
}

export default App
