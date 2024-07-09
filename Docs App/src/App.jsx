
import { useState, useEffect } from 'react'
import Cards from './components/Cards'
import { useRef } from 'react'
import { motion } from 'framer-motion'

function App() {
  let [count, setCount] = useState(0)
  let file
  const ref = useRef(null)
  const reff = useRef(null)
  const form = useRef(null)
  const [files, setFiles] = useState([])
  const [display, setDisplay] = useState('hidden')

  function handleDel(e) {
    let id = e.target.name
    let newData = files.filter((e) => e.id != id)
    setFiles(newData)
  }

  function handleFill(e) {
    file = e.target.files[0]
  }

  function addData(e) {
    e.preventDefault()
    if (file) {
      setFiles([...files, { id: `${count}`, button: 'Download Now', name: `${file.name}`, size: `${file.size}` }])
      setCount(count + 1)
      file = ""
    } else {
      alert('add the file')
    }
    console.log(files)
    console.log(files.size)
  }

  function showForm() {
    setDisplay('flex')
  }

  function hideForm() {
    setDisplay('hidden')
  }

  return (
    <>
      <button onClick={showForm} className='hover:bg-zinc-300 hover:text-zinc-800 text-zinc-400 duration-200 text-3xl font-extrabold right-4 rounded-full w-8 h-8 absolute top-4 z-20 flex justify-center items-center'>+</button>

      <div className='h-screen overflow-y-hidden-hidden w-full bg-zinc-800 relative'>
        <h2 className='absolute top-1/2 z-[3] left-1/2 text-[15vw] font-semibold tracking-tighter -translate-x-1/2 text-zinc-900 -translate-y-1/2'>Docs</h2>
        <h2 className='absolute top-[5%] z-[2] left-1/2 text-2xl tracking-tighter text-zinc-500 -translate-x-1/2'>Documents</h2>

        <div ref={ref} className='z-[3] overflow-hidden flex gap-10 flex-wrap relative top-0 left-0 w-full h-screen p-6'>

          <form ref={form} className={`bg-zinc-400 absolute top-1/2 left-1/2 gap-8 -translate-x-1/2 ${display} -translate-y-1/2 items-center h-[15rem] w-[15rem] rounded-lg flex-col`}>
            <div className='absolute right-1 text-2xl hover:bg-zinc-800 hover:text-zinc-300 duration-200 rounded-full top-0 h-8 w-8 flex justify-center items-center cursor-pointer' onClick={hideForm} >x</div>
            <h2 className='text-xl font-semibold mt-9'>Provide the File</h2>
            <input type="file" ref={reff} onChange={handleFill} name="" id="" className='w-full px-2' />
            <button onClick={addData} className='bg-zinc-700 hover:bg-zinc-800 font-bold duration-200 text-zinc-400 py-2 px-4 rounded-md'>Submit</button>
          </form>

          {files.map((items, i) => {
            return <motion.div key={i} drag dragConstraints={ref} whileDrag={{ scale: 1.2 }} className="relative h-[15rem] w-[12rem] rounded-[24px] overflow-hidden p-3 text-zinc-300 bg-zinc-700">
              <div className="flex items-center">
                <h2 className='font-semibold '>Doc {i + 1}</h2>
                <button name={items.id} onClick={handleDel} className='ml-auto rounded-full hover:bg-zinc-800 duration-300 h-[25px] flex justify-center items-center w-[25px]'>x</button>
              </div>
              <p className='text-sm tracking-tighter mt-2 '>{items.name}</p>
              <button className={`${items.sixe ? "bg-blue-500 hover:bg-blue-600" : "bg-green-500 hover:bg-green-600"} duration-300 absolute bottom-0 left-0 w-full h-10 flex justify-center items-center font-bold text-lg`}>{items.button}</button>
            </motion.div>
          })}

        </div>


      </div>
    </>
  )
}

export default App
