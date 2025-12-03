import { useState } from "react"
import { nanoid } from "nanoid"
import { toast } from "react-toastify"
import Create from "./create"
import Read from "./Read"


export default function Todo() {
  const [todo, setTodo] = useState([
    { id: 1, title: "task", isCompleted: false },
    { id: 2, title: "new-task", isCompleted: false }
  ])




  return (
    <div>
      <Create todo={todo} setTodo={setTodo} />
      
      <Read todo={todo} setTodo={setTodo} />

    </div>
  )
}
