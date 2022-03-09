import React from 'react'
import "./header.css"
import { useState } from 'react'
const Search = ({getSearch}) => {
    const [search,setSearch]=useState('')

const searching=(s)=>{
setSearch(s)
    getSearch(s)
}
    
  return (
    <input type="text" value={search} placeholder='search...' name='searchBox' onChange={(e)=>searching(e.target.value)} />

  )
}

export default Search