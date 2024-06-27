import { useState, useCallback, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {

  let [length, setLength] = useState(6)
  let [numAllowed, setNumAllowed] =  useState(false)
  let [charAllowed, setCharAllowed] =  useState(false)
  let [pass, setPass] = useState('')

  let passGenerator = useCallback(() =>{

    // let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTYUVWXYZabcdefghijklmnopqrstuvwxyz'
    if(numAllowed){
      str += '0123456789'
    }
    if(charAllowed){
      str += '~!@#$%^&*()_<>?'
    }

    for (let i = 1; i <= length; i++) {
      let newPass = Math.floor(Math.random()*str.length + 1)
      pass += str.charAt(newPass)
    }

    setPass(pass)
    console.log('pass', pass)

  }, [length, numAllowed, charAllowed])

  useEffect(()=>{
    pass = ''
    passGenerator()
  },[length, numAllowed, charAllowed])


  return (

    <>
      <div className='w-2/5 mx-auto py-6 my-5 rounded-md bg-blue-600 flex justify-start items-center text-white' style={{ flexDirection: 'column', backgroundColor: '#151515' }}>
        <h2 className='my-3'>PassWord Generator</h2>

        <div className='flex w-1/2 relative my-3'>
          <input type="text" readOnly value={pass} placeholder='Password' className='text-black p-1 outline-none cursor-pointer w-full rounded-l' />
          <button className='bg-blue-600 absolute -right-3 h-full px-2 rounded-e-lg'>Copy</button>
        </div>

        <div className='flex justify-center items-center my-3' style={{ flexDirection: 'column' }}>

          <input onChange={(e) => {setLength(e.target.value)}} type="range" value={length} min={6} max={16} /><label>Length:{length}</label>
          <div className='flex items-center gap-2'>
            <input type="checkbox" name="" id="number" className='my-3' onChange={()=>{
              setNumAllowed((prev) => !prev)
            }}/>
            <label htmlFor="number">Numbers</label>
          </div>
          <div className='flex items-center gap-2'>
            <input type="checkbox" name="" id="char" onChange={()=>{
              setCharAllowed((prev) => !prev)
            }}/>
            <label htmlFor="char">Character</label>
          </div>
        </div>
      </div>
    </>

  )
}

export default App
