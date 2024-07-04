import React from 'react'
import { motion } from 'framer-motion'
function Cards({ data, index, reference }) {
    return (
        <motion.div drag dragConstraints={reference} whileDrag={{ scale: 1.2 }} className="relative h-[15rem] w-[12rem] rounded-[24px] overflow-hidden p-3 text-zinc-300 bg-zinc-700">
            <div className="flex items-center">
                <h2 className='font-semibold '>Doc {index + 1}</h2>
                <button className='ml-auto rounded-full hover:bg-zinc-800 duration-300 h-[25px] flex justify-center items-center w-[25px]'>x</button>
            </div>
            <p className='text-sm tracking-tighter mt-2 '>{data.desc}</p>
            <button className={`${data.sixe ? "bg-blue-500 hover:bg-blue-600" : "bg-green-500 hover:bg-green-600"} duration-300 absolute bottom-0 left-0 w-full h-10 flex justify-center items-center font-bold text-lg`}>{data.button}</button>
        </motion.div>
    )
}

export default Cards
