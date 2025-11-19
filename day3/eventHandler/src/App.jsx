import React from 'react'

export default function App() {

  // function handleClick(){
  //   alert("Clicked")
  // }
  function handleClick(value){
    alert(`Hello ${value}`)
  }

  return (
    <div>
      {/* <button onClick={handleClick}>Click Here</button> */}


      <button onClick={()=>handleClick("Akash")}>Click by akash</button>
      <button onClick={()=>handleClick("Pankaj")}>Click by pankaj</button>
      <button onClick={()=>handleClick("Ram")}>Click by ram</button>
    </div>
  )
}
