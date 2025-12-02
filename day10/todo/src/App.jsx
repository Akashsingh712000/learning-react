import { useState } from "react"
import { nanoid } from "nanoid"


export default function App() {
  const [todo, setTodo] = useState([
    { id: 1, title: "task", isCompleted: false },
    { id: 2, title: "new-task", isCompleted: false }
  ])
  const [search, setSearch] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: nanoid(),
      title: search,
      isCompleted: false
    }
    const copyTodo = [...todo]
    copyTodo.push(newTodo)
    setTodo(copyTodo)

    setSearch("")


  }

  const handleDelete = (id) => {
    const filterTodo = todo.filter((todo) => todo.id != id)
    setTodo(filterTodo)
  }

  const handleToggle = (id) => {
    setTodo((prevTodo) =>
      prevTodo.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  return (
    <div>
      <h1>MERA TO DO LIST</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='yeh todo' value={search} onChange={(e) => setSearch(e.target.value)} />
        <button>Add Task</button>
      </form>

      <div>
        {
          todo.map((value) => <li key={value.id}>
            <span style={{
              textDecoration: value.isCompleted ? "line-through" : "none"
            }} >

              {value.title}
            </span>
            <button onClick={() => handleToggle(value.id)}>{value.isCompleted ? "Undo" : "✅"}</button>
            <button onClick={() => handleDelete(value.id)}>remove</button>
          </li>)
        }
      </div>
    </div>
  )
}
