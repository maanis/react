import React from 'react'
import { useState, useContext } from 'react'
import UserContext from '../Context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const { user, setUser } = useContext(UserContext)

    function handleSubmit(e) {
        e.preventDefault()
        setUser(username)
    }

    return (
        <div>
            <input type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder='Username' />
            <input type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='password' />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login
