import { useRef, useState } from 'react'
// import './App.css'
// import { todoProvider } from './contexts'
import { todoContext } from './contexts/todoContext'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {

  const [count, setCount] = useState(0)

  const [todo, setTodo] = useState([])
  const ref = useRef()
  const reff = useRef()

  function handleAdd(e) {
    e.preventDefault()
    if (ref.current.value === "") {
      alert("Provide the task first")
    } else {
      setTodo([...todo, { id: count, task: `${ref.current.value}`, isComplete: false, readOnly: true }])
    }
    setCount(count + 1)
    console.log(todo)
    ref.current.value = ""
  }






  return (
    <todoContext.Provider value={{ ref, todo, setTodo, count, setCount, handleAdd }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            <TodoItem />
          </div>
        </div>
      </div>
    </todoContext.Provider>
  )
}

export default App
