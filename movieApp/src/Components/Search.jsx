import React from 'react'

const Search = ({searchTerm,setsearchTerm}) => {
  return (
    <main>
        <label htmlFor="">Search: </label>
        <input type="text" name="" id="" placeholder='Search Movies...' value={searchTerm} onChange={(e)=>(setsearchTerm(e.target.value))}/>
    </main>
  )
}

export default Search