import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const url = "https://jsonplaceholder.typicode.com/posts"

  let [response, setResponse] = useState([])

  useEffect(() => {
    async function main() {
      let data = await fetch(url)
      let resp = await data.json()
      setResponse(resp)
    }

    main()

    // console.log(response[0].title)
  })


  return (
    <>
      <div className='h-full bg-gray-900 p-8  flex gap-8 justify-center flex-wrap'>
        {response.map((resp) => {
          return (
            <div key={resp.id} className='h-56 w-44 bg-gray-700 text-white overflow-hidden'>
              <div className='text-center text-xl text-red-600'>{resp.title}</div>
              <div className='text-sm px-3 my-2'>{resp.body}</div>
            </div>
          )
        })}
      </div>
    </>
  )
}
















export default App
