import React from 'react'
import { useSelector } from 'react-redux'

function UserDetails() {
    const datas = useSelector(state => state.users.user)
    console.log(datas);

    return (
        <>

            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 place-content-center p-4 flex-wrap h[] mx-auto min-w-[80vw]'>
                {datas.map((item, id) => {
                    return <div key={id} className='h-52 relative justify-self-center text-white w-72  rounded-md bg-zinc-800'>
                        <img src='https://cdn.pixabay.com/photo/2022/12/01/04/40/backpacker-7628303_640.jpg' alt="image" className='w-full object-cover rounded-md h-full' />
                        <div className='w-full h-full absolute top-0 left-0 bg-black rounded-md opacity-45 z-0'></div>
                        <div className='text-center w-full absolute p-4 top-0'>
                            <h2>{item.name}</h2>
                            <h2>{item.number}</h2>
                            <h2>{item.email}</h2>
                        </div>
                    </div>
                })}
            </div>
        </>
    )
}

export default UserDetails
