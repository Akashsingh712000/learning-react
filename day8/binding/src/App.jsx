import React, { useState } from 'react'

export default function App() {
  const [data, setData] = useState(["dog", "cat", "parrot"])
  const [search, setSearch] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();

    const newData = [search]
    const copyData = [...data]
    copyData.push(newData)
    setData(copyData)

    setSearch("")

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='search the item...' value={search} onChange={(e) => setSearch(e.target.value)} />
        <button>Search</button>
      </form>

      <div>
        {
          data.map((da, idx) => <h1 key={idx}>{da}</h1>)
        }
      </div>
    </div>


  )


}
