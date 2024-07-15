
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {

  let [color, setColor] = useState('white')
  let [px, setPx] = useState('')
  let [border, setBorder] = useState('0px')

  function handleChange(e) {
    let value = e.target.value
    if (value.includes('px')) {
      setPx(value)
      console.log(px);

    } else {
      setColor(value)
      if (value === '') {
        setBorder('2px')
      }
    }
  }
  return (
    <>
      <div className='grid place-content-center w-full h-screen bg-[#212121]'>
        <div className={`h-48 w-48 mb-5`} style={{ border: `${border} solid #fff`, backgroundColor: `${color}`, borderRadius: `${px}` }}></div>
        <input type="text" name="" id="" onChange={handleChange} placeholder='enter value' className='p-1 outline-none rounded-md' />
      </div>
    </>
  )
}

export default App
