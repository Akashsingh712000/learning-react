import React, { useState } from 'react'
import { nanoid } from "nanoid"
import e from 'express'

export default function App() {

  const [todo, setTodo] = useState([
    { id: 1, title: "demo-task", isCompleted: false },
    { id: 2, title: "new-task", isCompleted: false }
  ])

  const [title, setTitle] = useState("")
  const [isCompleted, setIsCompleted] = useState(false)
  const [option, setOption] = useState("all")


  const handleSubmit = (e) => {
    e.preventDefault();

    const newData = {
      id: nanoid(),
      title,
      isCompleted: false
    }
    console.log(newData.id)
    setTodo([...todo, newData])
    setTitle("")

  }
  return (
    <div>
      <h1> CREATE TO DO</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='add todo' onChange={(e) => setTitle(e.target.value)} value={title} />
        <button>Add Task</button>
        <br />
        <br />
        <input type="checkbox" value={isCompleted} onChange={(e) => console.log(e.target.checked)} />
        Completed

        <select value={option} onChange={(e) => setOption(e.target.value)}>
          <option value="all">ALL</option>
          <option value="pending">PENDING</option>
          <option value="completed">COMPLETED</option>
        </select>
      </form>
      <div>
        {
          todo.map((value) => (
            <h1
              key={value.id}
              style={{
                textDecoration: value.isCompleted ? "line-through" : "none",
                color: value.isCompleted ? "gray" : "black"
              }}
            >
              <input type = "checkbox " checked={value.isCompleted}  onChange={()=>
                 t.id === value.id ? { ...t, isCompleted: !t.isCompleted } : t
              }>
              </input>
              {value.title}
            </h1>
          ))
        }
      </div>
    </div>
  )

}
