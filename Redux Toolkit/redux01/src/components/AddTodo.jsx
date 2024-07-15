import React, { useState } from 'react'
import { addTodo } from '../app/todoSlice'
import { useDispatch } from 'react-redux'
// heavens 20w led

function AddTodo() {
    const dispatch = useDispatch()
    const [input, setInput] = useState('')

    function handleSubmit(e, data) {
        e.preventDefault()
        if (data) {
            dispatch(addTodo(data))
        } else {
            alert('Bhak Lavde input de pahle')
        }
        setInput('')
    }
    function handleInput(e) {
        setInput(e.target.value)
    }


    return (
        <form onSubmit={(e) => handleSubmit(e, input)} className="space-x-3 mt-12">
            <input
                type="text"
                className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter a Todo..."
                onChange={handleInput}
                value={input}
            />
            <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"

            >
                Add Todo
            </button>
        </form>
    )
}



export default AddTodo