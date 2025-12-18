import { createContext, useState } from 'react'

export const countContext = createContext();

export default function CountProvider(prop) {
    const [count, setcount] = useState(0)

    return (
        <countContext.Provider value={{ count, setcount }}>
            {prop.children}
        </countContext.Provider>
    )
};


