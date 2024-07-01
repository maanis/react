import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>

      <div className="main bg-[#212121] h-screen w-full flex justify-center items-center">
        <div className="p-8 h-[75vh] w-[50vw] backdrop-blur-sm flex flex-col justify-center bg-green-100 rounded-md">
          <h2 className='font-semiboldbold text-xl'>From</h2>
          <div className="flex bg-green-400 mt-4 p-10 rounded-xl justify-between">
            <input type="number" className=' px-3 py-1 outline-none rounded-sm' name="" id="" />
            <select name="" id="">
              <option value="usd">usd</option>
              <option value="usd">inr</option>
            </select>
          </div>

          <h2 className='font-semiboldbold text-xl mt-3'>To</h2>
          <div className="flex bg-green-400 mt-4 p-10 rounded-xl justify-between">
            <input type="number" readOnly className='outline-none cursor-auto px-3 py-1 rounded-sm' name="" id="" />
            <select name="" id="">
              <option value="usd">usd</option>
              <option value="usd">inr</option>
            </select>
          </div>

          <button className='bg-green-500 hover:bg-green-600 duration-200   py-2 mt-5 rounded-md text-white font-bold text-xl px-8 mx-auto'>Convert USD to INR</button>

        </div>
      </div>

    </>
  )
}

export default App
