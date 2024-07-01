import React from 'react'

function Navbar() {
    return (
        <>
            <div className='bg-purple-700 h-12 flex text-white justify-around items-center'>
                <div className='font-bold text-2xl'>
                    LoGo
                </div>
                <div>
                    <ul className='flex justify-center gap-8 font-semibold text-xl items-center'>
                        <li className='cursor-pointer'>I-task</li>
                        <li className='cursor-pointer'>Home</li>
                        <li className='cursor-pointer'>Your Task</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar
