import React from 'react'

const Read = (data) => {

    const { todo, setTodo } = data

    const handleDelete = (id) => {
        const filterTodo = todo.filter((todo) => todo.id != id)
        setTodo(filterTodo)
        toast.error("task removed successfully")
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

    )
}

export default Read