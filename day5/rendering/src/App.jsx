import React from 'react'

export default function App() {
  const name = "React"
  const num = 5
  const bool = false
  const nl = null
  const undef = undefined
  const obj = { a: 1, b: 2, c: 3, d: 4, e: 5 }
  const arr = [1, 2, 3, 4, 5]
  return (
    <div>
      <h1>Hello {bool ? name : ""}</h1>
      <h1>{num}</h1>
      <h1>{bool}</h1>
      <h1>{nl}</h1>
      <h1>{undef}</h1>
      {Object.values(obj).map((val, index) => (
        <h1 key={index}>{val}</h1>
      ))}
      
      {/* <h1>{arr.map((val) => (<h3>{val}</h3>))}</h1> */}

    </div>
  )
}
