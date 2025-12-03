import React from 'react'
import Todo from './components/todo'
 import { ToastContainer} from 'react-toastify';

const App = () => {
  return (
    <div>
      <Todo/>
      <ToastContainer position='top-center' theme="dark" />
    </div>
  )
}

export default App