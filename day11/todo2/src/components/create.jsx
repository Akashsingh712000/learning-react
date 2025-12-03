import React from 'react'
import { useState } from 'react'

const Create = ( prop ) => {
    const { todo, setTodo } = prop
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
        toast.info("task added successfully")


    }
    return (
        <div>
            <h1>MERA TO DO LIST</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='yeh todo' value={search} onChange={(e) => setSearch(e.target.value)} />
                <button>Add Task</button>
            </form>
        </div>
    )
}

export default Create