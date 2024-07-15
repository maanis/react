import React from 'react'
import { removeUser } from '../slice/userSlice';
import { useSelector, useDispatch } from 'react-redux'
import { MdDeleteForever } from "react-icons/md";

function DisplayUser() {
    const dispatch = useDispatch()
    const data = useSelector((state) => {
        return state.users
    })

    function handleDelete(id) {
        dispatch(removeUser(id))
    }

    return (
        <>
            {data.map((name, id) => {
                return <li key={id} className='flex justify-between my-3'>
                    <h2 className='text-4xl'>{name}</h2>
                    <button name={id} onClick={() => handleDelete(id)}><MdDeleteForever className='text-5xl text-red-600' /></button>
                </li>
            })}
        </>
    )
}

export default DisplayUser
