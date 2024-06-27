import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function reacting(){
  return(
    <h1>LOL react is fun</h1>
  )
}

const reactElem = React.createElement(
  'a', 
  {href: 'https://google.com', target: '_blank'},
  'click me'
)
ReactDOM.createRoot(document.getElementById('root')).render(
  // <reacting/>
  // reacting()
  reactElem
)
