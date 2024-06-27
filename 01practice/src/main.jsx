import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function Manish(){
  return(
    <h1>Manish A Developer</h1>
  )
}

const reactElem = React.createElement(
  'a', 
  {href: 'https://google.com', target: '_blank'},
  'click me'
)
ReactDOM.createRoot(document.getElementById('root')).render(
  // <Manish/>
  // Manish()
  reactElem
)
