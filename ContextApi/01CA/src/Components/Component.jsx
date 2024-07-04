import React from 'react'
import { useContext } from 'react'
import { countContext } from '../Context/countContext'

function Component() {

    const value = useContext(countContext)

    return (
        <div>
            {value.count}
        </div>
    )
}

export default Component
