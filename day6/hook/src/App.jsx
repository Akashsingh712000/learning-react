import React from 'react'
import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col justify-center items-center h-screen w-screen gap-3'>
      <h1 className='mb-10 border px-20 rounded-2xl bg-blue-50 text-black'>{count}</h1>
      <div className='flex gap-3 border'>

        <button onClick={() => setCount(count - 1)}>decrease  </button>
        <button onClick={() => setCount(count + 1)}>Increase  </button>
        <button onClick={() => setCount(0)}>Reset  </button>
      </div>
    </div>
  )
}
