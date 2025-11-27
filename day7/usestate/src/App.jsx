import { useState } from 'react'

export default function App() {

  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>Click</button>
      <div>
        {
          toggle ? <h1>Hello React</h1>:""
        }
      </div>
      

    </div>
  )
}
