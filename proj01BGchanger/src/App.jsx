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

  let [color, setcolor] = useState("olive")

  return (

    <>
      <div className='w-full h-screen ' style={{ backgroundColor: color }}>
        <div className='fixed bottom-12 flex justify-center inset-x-24 gap-5 rounded-2xl py-4'>
          <div className='bg-white px-5 py-3 flex justify-center gap-4 rounded-2xl'>
            <button onClick={() => setcolor("violet")} className='outline-none px-4 py-2 rounded-lg' style={{ backgroundColor: 'violet' }}>Violet</button>
            <button onClick={() => setcolor("indigo")} className='outline-none px-4 py-2 rounded-lg' style={{ backgroundColor: 'indigo' }}>Indigo</button>
            <button onClick={() => setcolor("blue")} className='outline-none px-4 py-2 rounded-lg' style={{ backgroundColor: 'blue' }}>Blue</button>
            <button onClick={() => setcolor("green")} className='outline-none px-4 py-2 rounded-lg' style={{ backgroundColor: 'green' }}>Green</button>
            <button onClick={() => setcolor("yellow")} className='outline-none px-4 py-2 rounded-lg' style={{ backgroundColor: 'yellow' }}>Yellow</button>
            <button onClick={() => setcolor("orange")} className='outline-none px-4 py-2 rounded-lg' style={{ backgroundColor: 'orange' }}>Orange</button>
            <button onClick={() => setcolor("red")} className='outline-none px-4 py-2 rounded-lg' style={{ backgroundColor: 'red' }}>Red</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
