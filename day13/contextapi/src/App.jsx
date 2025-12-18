import React, { useContext } from 'react'
import { countContext } from './context/wrapper'

const App = () => {
  const { count, setcount } = useContext(countContext)
  return (
    <div>
      <h1>Counter</h1>
      <h2>

        {count}
      </h2>
      <button onClick={() => setcount(count + 1)}>Increase</button>
      <button onClick={() => setcount(count - 1)}>decrease</button>
      <button onClick={() => setcount(0)}>Reset</button>


    </div>
  )
}

export default App