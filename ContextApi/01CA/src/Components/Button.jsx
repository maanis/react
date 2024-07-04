import React from 'react'
import Component from './Component'
import { useContext } from 'react'
import { countContext } from '../Context/countContext'

function Button() {
    const value = useContext(countContext)
    return (
        <div>
            <button onClick={() => value.setCount(value.count + 1)}><span><Component /></span> Count</button>
        </div>
    )
}

export default Button
