import React from 'react'

import { useState, useContext } from 'react'
import UserContext from '../Context/UserContext'

function Profile() {
    const user = useContext(UserContext)

    if (!user) return <h2 className='text-9xl text-blue-600'>Invalid</h2>

    return <h2>{user.user}</h2>


}

export default Profile
