import { useState, useRef, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Todos from './components/Todos'
import { v4 as uuidv4 } from 'uuid';
// uuidv4();

function App() {

  let [todo, setTodo] = useState([])
  let [cmpltTodo, setCmpltTodo] = useState(true)
  const ref = useRef()

  function addTask() {
    if (ref.current.value === "") {
      alert(`Enter The Task First`)
    } else {
      setTodo([...todo, { id: uuidv4(), todo: `${ref.current.value}`, isComplete: false }])
    }
    ref.current.value = ""
  }

  function handleCheckbox(e) {
    let id = e.target.name
    console.log(id)
    let index = todo.findIndex((e) => {
      return e.id === id
    })
    let newTodo = [...todo]
    newTodo[index].isComplete = !newTodo[index].isComplete

    setTodo(newTodo)

  }

  function toggleCmplt() {
    setCmpltTodo(!cmpltTodo)
    console.log(cmpltTodo)
  }


  function handleEdit(e, id) {

    let index = todo.findIndex((e) => {
      return e.id === id
    })
    let val = todo[index].todo
    ref.current.value = val
    let filteredTodo = todo.filter((e) => {
      return e.id != id
    })
    setTodo(filteredTodo)

  }

  function handleDel(e, id) {

    let filteredTodo = todo.filter((e) => {
      return e.id != id
    })

    setTodo(filteredTodo)

  }
  return (
    <>
      <Navbar />

      <div className='containerr flex justify-center'>
        <div className='m-h-[20vw] overflow-y-auto w-2/6 rounded-md p-3 bg-purple-200 mt-8 flex' style={{ flexDirection: 'column' }}>
          <h1 className='mb-5 text-2xl text-center font-semibold'>I-task manage your todo's at one place</h1>

          <div className='w-full flex justify-center'>
            <input name={todo.id} type="text" ref={ref} className='w-4/5 h-8 px-2 outline-none' placeholder='enter your task...' />
            <button onClick={addTask} className='bg-purple-600 h-8 font-bold px-2 text-white rounded-r-md'>ADD</button>
          </div>

          <div className="checkbox mt-4">
            <input onChange={toggleCmplt} checked={cmpltTodo} type="checkbox" name="" id="cmplt" /> <label htmlFor="cmplt">Completed Tasks</label>


          </div>

          <div className="seperation h-px rounded-xl w-full bg-black mt-4"></div>

          <div className="todos">
            <h2 className='font-bold my-2'>Your Todos</h2>



            {todo.map((item) => {
              return (cmpltTodo || !item.isComplete) && (
                <div key={item.id} className='flex gap-2 my-3'>
                  <input name={item.id} onChange={handleCheckbox} type="checkbox" checked={item.isComplete} id={item.todo} />
                  <label htmlFor={item.todo} className={item.isComplete ? "line-through" : ""} >{item.todo}</label>
                  <button className='bg-purple-600 h-full font-bold px-2 text-white rounded-md ml-auto' onClick={(e) => { handleEdit(e, item.id) }}>Edit</button>
                  <button className='bg-purple-600 h-full font-bold px-2 text-white rounded-md' onClick={(e) => { handleDel(e, item.id) }}>Delete</button>
                </div>
              )
            }
            )}

          </div>

        </div>
      </div>
    </>
  )
}

export default App
