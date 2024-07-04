import { useEffect, useState } from 'react'
import themeContext from './context/themeContext'
import './App.css'
import Btn from './components/Btn'
import Card from './components/Card'

function App() {

  const [theme, setTheme] = useState('light')

  function lightMode() {
    setTheme('light')
  }
  function darkMode() {
    setTheme('dark')
  }

  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark')
    document.querySelector('html').classList.add(theme)
  }, [theme])



  return (
    <themeContext.Provider value={{ theme, setTheme, lightMode, darkMode }}>

      <div className="flex flex-wrap min-h-screen justify-center items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <Btn />

          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>

    </themeContext.Provider >
  )
}

export default App
