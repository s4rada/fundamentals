import React from 'react'

const Search = ({search,setSearch, HandleSearch}) => {
  return (
    <div>
        <input type="text" placeholder='Enter City Name...' value={search} onChange={(e)=>setSearch(e.target.value)} />
        <button onClick={HandleSearch}>Search</button>
    </div>
  )
}

export default Search