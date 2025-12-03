// src/App.jsx
import React, { useContext } from "react";
import { Todocontext } from "./context/wraper";

const App = () => {
  const { todos, setTodos ,name } = useContext(Todocontext);
  // Ab App component context ka data use kar sakta hai

  return (
    <div>
      <h1>Todo App</h1>

      {/* Todos ek array hai, isliye map use karte hain */}
      {todos.map((item) => (
        <div key={item.id}>{item.text}</div>
      ))}
      {name}

      {/* Yaha se provider ka data display ho raha */}
    </div>
  );
};

export default App;
