import { createContext, useState } from "react";

export const Todocontext = createContext(); 
// Yeh ek empty context (room) bana raha hai.

export default function Todoprovider(props) {

    // Yeh state hai — jisme todos aur setTodos dono aa rahe
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: "sample todo",
            iscompleted: false,
        }
    ]);

    const [name,setName] = useState("Akash")

    return (
        <Todocontext.Provider value={{ todos, setTodos,name,setName }}>
            {/* Provider is data ko sab children me bhejega */}
            {props.children}
        </Todocontext.Provider>
    );
}
