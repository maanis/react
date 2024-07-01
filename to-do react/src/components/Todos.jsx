import React from 'react'

function Todos({ todo }) {
    return (
        <div className='flex gap-2'>
            <input type="checkbox" name="" id={todo} />
            <label htmlFor={todo}>{todo}</label>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDel}>Delete</button>
        </div>
    )
}

export default Todos
