import React from 'react'

function Buttons({name, change}) {
    // let btn = document.querySelector("#btn")
    // console.log(btn)
    // btn.addEventListener("click", ()=>{
    //     document.body.style.backgroundColor = "red"
    // })

    // function change(){
    //     document.body.style.backgroundColor = {name}
    // }
  return (
    <button id='btn'>{name}</button>
  )
}

export default Buttons
