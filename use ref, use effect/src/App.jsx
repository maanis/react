import { useState, useRef, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [btn, setBtn] = useState(true)

  const ref = useRef()

  useEffect(()=>{
    ref.current.style.backgroundColor = "red"
  },[btn])

  // useEffect(()=>{

  //   ref.current.style.backgroundColor = "red"
    
  // },[count])
  

  return (
    <>
     <h2 className='text-white'>Hello World</h2>
     <button onClick={()=>setBtn(!btn)}>Click ME</button>

     <button ref={ref}>fucked up</button>

{btn?<button>ILL SHOW</button>: <button>ILL not Show</button>}
     
    </>
  )
}

export default App
