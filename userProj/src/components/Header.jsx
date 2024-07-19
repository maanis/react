import React from 'react'
import { Link, NavLink } from 'react-router-dom'
function Header() {
    return (
        <div className='bg-zinc-800 text-zinc-400 w-full h-[75px] flex justify-evenly items-center'>
            <div className='font-bold text-2xl'>Logo</div>
            <ul className='flex gap-8 font-semibold text-xl  cursor-pointer'>
                <li><NavLink to='/'
                    className={({ isActive }) =>
                        `${isActive ? "text-orange-500" : ""}`
                    }>
                    Home
                </NavLink></li>
                <li><NavLink to='/userdetails'
                    className={({ isActive }) =>
                        `${isActive ? "text-orange-500" : ""}`
                    }>
                    User Details
                </NavLink></li>
            </ul>
        </div>
    )
}

export default Header
