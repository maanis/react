import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './assets/components/card'

function App() {
  let arr = [1, 2, 3];
  return (
    <>
      <h1 className='bg-green-400 p-4 rounded-md cursor-pointer hover:bg-green-200 hover:text-black transition-all'>Tailwind CSS</h1>

      <Card name="manish" myArr={arr} view="get profile" />
      <Card name="raunak" />


    </>
  )
}

export default App
