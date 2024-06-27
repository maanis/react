import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Buttons from './buttons'

function App() {
  let btn = document.querySelectorAll(".btn")
  btn.forEach((e) => {
    console.log(e)
    e.addEventListener("click", () => {
      document.body.style.backgroundColor = e.innerHTML
    })
  })

  return (

    <>
      <div className='container'>
        <button className='btn'>violet</button>
        <button className='btn'>indigo</button>
        <button className='btn'>blue</button>
        <button className='btn'>green</button>
        <button className='btn'>yellow</button>
        <button className='btn'>orange</button>
        <button className='btn'>red</button>
      </div>
    </>
  )
}

export default App
