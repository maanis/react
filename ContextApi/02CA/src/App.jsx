import { useState } from 'react'
import './App.css'
// import UserContextProvider from './Context/UserContextProvider'
import UserContext from './Context/UserContext'
import Login from './Components/Login'
import Profile from './Components/Profile'

function App() {
  const [user, setUser] = useState(null)
  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <Login />
        <Profile />
      </UserContext.Provider>
    </>
  )
}

export default App
