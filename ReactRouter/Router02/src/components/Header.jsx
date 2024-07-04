import React from 'react'
import { Link, NavLink } from 'react-router-dom'
function Header() {
    return (
        <div className='bg-zinc-900 text-zinc-400 w-full h-[75px] flex justify-evenly items-center'>
            <div className='font-bold text-2xl'>Logo</div>
            <ul className='flex gap-8 font-semibold text-xl  cursor-pointer'>
                <li><NavLink to='/'
                    className={({ isActive }) =>
                        `${isActive ? "text-orange-500" : ""}`
                    }>
                    Home
                </NavLink></li>
                <li><NavLink to='/about'
                    className={({ isActive }) =>
                        `${isActive ? "text-orange-500" : ""}`
                    }>
                    About
                </NavLink></li>
                <li><NavLink to='/contact'
                    className={({ isActive }) =>
                        `${isActive ? "text-orange-500" : ""}`
                    }>
                    Contact
                </NavLink></li>
            </ul>
        </div>
    )
}

export default Header
