import React, { useContext } from 'react'
import { Todocontext } from './context/wraper'

const Home = () => {
    const { name } = useContext(Todocontext)
    return (
        <div>
            Home
            {name}
        </div>
    )
}

export default Home