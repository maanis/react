
import { useState, useEffect } from 'react'
import Cards from './components/Cards'
import { useRef } from 'react'
import { motion } from 'framer-motion'

function App() {
  const ref = useRef(null)
  const [data, setData] = useState([])
  let dets = [
    {
      id: 0,
      desc: " Quos minima aspernatur omnis dolorum est blanditiis aliquid perferendis aliquam vitae eos.",
      button: "Download Now",
      sixe: true,
      col: "blue"
    },
    {
      id: 1,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      button: "Install Now",
      sixe: false,
      col: "red"
    },
    {
      id: 2,
      desc: "excepturi ipsum unde qui repudiandae magni vitae aperiam, omnis sed deserunt ratione alias.",
      button: "Apply Now",
      sixe: true,
      col: "blue"
    },
    {
      id: 3,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente rem autem explicabo.",
      button: "Sells Now",
      sixe: true,
      col: "blue"
    },
  ]
  useEffect(() => {
    setData(dets)
  }, [])


  function handleDel(e) {
    let id = e.target.name
    console.log(id)

    let newData = data.filter((e) => (
      e.id != id
    ))

    setData(newData)

  }


  return (
    <div className='h-screen overflow-y-hidden-hidden w-full bg-zinc-800 relative'>
      <h2 className='absolute top-1/2 z-[3] left-1/2 text-[15vw] font-semibold tracking-tighter -translate-x-1/2 text-zinc-900 -translate-y-1/2'>Docs</h2>
      <h2 className='absolute top-[5%] z-[2] left-1/2 text-2xl tracking-tighter text-zinc-500 -translate-x-1/2'>Documents</h2>
      <div ref={ref} className='z-[3] overflow-hidden flex gap-10 flex-wrap relative top-0 left-0 w-full h-screen p-6'>
        {data.map((items, i) => {
          return <motion.div key={i} drag dragConstraints={ref} whileDrag={{ scale: 1.2 }} className="relative h-[15rem] w-[12rem] rounded-[24px] overflow-hidden p-3 text-zinc-300 bg-zinc-700">
            <div className="flex items-center">
              <h2 className='font-semibold '>Doc {i + 1}</h2>
              <button name={items.id} onClick={handleDel} className='ml-auto rounded-full hover:bg-zinc-800 duration-300 h-[25px] flex justify-center items-center w-[25px]'>x</button>
            </div>
            <p className='text-sm tracking-tighter mt-2 '>{items.desc}</p>
            <button className={`${items.sixe ? "bg-blue-500 hover:bg-blue-600" : "bg-green-500 hover:bg-green-600"} duration-300 absolute bottom-0 left-0 w-full h-10 flex justify-center items-center font-bold text-lg`}>{items.button}</button>
          </motion.div>
        })}

      </div>


    </div>
  )
}

export default App
