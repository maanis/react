import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../app/todoSlice';
function Todos() {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.todos)
    console.log(data);
    // console.log(data[1].id);
    function handleDel(id) {
        dispatch(removeTodo(id))
    }
    return (
        <>
            <div>Todos</div>
            <ul className="list-none">
                {data.map((item, id) => {
                    return <li key={id} className='flex px-8 p-2 text-white rounded-md justify-center w-[30vw] my-2 mx-auto bg-gray-600'>
                        <h2 className='text-xl'>{item.text}</h2>
                        <span className='ml-auto cursor-pointer' onClick={() => handleDel(id)}>x</span>
                    </li>
                })}
            </ul>
        </>
    )
}

export default Todos