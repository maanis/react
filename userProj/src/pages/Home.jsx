import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeStatus, addData } from '../../store/userSlice';
import { current } from '@reduxjs/toolkit';
import { Link, NavLink } from 'react-router-dom';


function Home() {
    const data = useSelector(state => state.users.statusForm)
    console.log(data);
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [url, setUrl] = useState('')
    const dispatch = useDispatch()
    const ref = useRef()

    function showForm() {
        dispatch(changeStatus())
    }
    function hideForm(e) {
        e.preventDefault()
        dispatch(changeStatus())
    }

    function addDetails(e) {

        if (ref.current.value != '' && number.length == 10 && email.includes('@gmail.com')) {
            dispatch(addData({
                name: name,
                email: email,
                number: number,
                url: url
            }))
            const input = document.querySelectorAll('.outline-none')
            input.forEach((e) => e.value = '')

        } else {
            alert('invalid data')
            e.preventDefault()
        }
    }
    return (
        <div className='flex justify-center items-center h-full'>
            <button className={`bg-zinc-900 absolute ${data ? "hidden" : "block"} transition-all duration-500 text-white font-medium text-lg px-4 py-2 rounded-md `} onClick={showForm}>Create User</button>


            <form className={`w-72 ${data ? "scale-100" : "scale-0"} transition-all duration-300 p-5 gap-5 flex flex-col  h-96 rounded-md bg-zinc-800`}>
                <input ref={ref} onChange={(e) => setName(e.target.value)} type="text" className='px-1 placeholder:opacity-25 py-1 rounded-sm outline-none bg-inherit text-white border-b' required placeholder='Enter your Name...' />
                <input ref={ref} onChange={(e) => setNumber(e.target.value)} type="number" className='px-1 placeholder:opacity-25 py-1 rounded-sm outline-none bg-inherit text-white border-b' required placeholder='Enter your Number...' />
                <input ref={ref} onChange={(e) => setEmail(e.target.value)} type="email" className='px-1 placeholder:opacity-25 py-1 rounded-sm outline-none bg-inherit text-white border-b' required placeholder='Enter your Email...' />
                <input ref={ref} onChange={(e) => setUrl(e.target.value)} type="text" placeholder='Enter your URL here...' className='px-1 placeholder:opacity-25 py-1 rounded-sm outline-none bg-inherit text-white border-b' />
                <Link to='userdetails' className='w-full text-center'><button onClick={addDetails} className='bg-zinc-900 mt-4 text-white font-medium text-lg  px-4 py-2 rounded-md'>Submit Now</button></Link>
                <button onClick={hideForm} className='bg-[red] text-white font-medium text-lg mx-auto px-3 py-1 rounded-md'>Close</button>

            </form>
        </div>
    )
}

export default Home
