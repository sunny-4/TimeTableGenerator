import React from 'react'
import './Searchbar.css'
const Searchbar = ({Searchtext,setSearchtext}) => {
  return (
    <div className='search-bar'>
        <span>🔎</span>
      <input type="text" placeholder='Search of courses...'id='search' value={Searchtext} onChange={(event)=>{setSearchtext(event.target.value)}} />
    </div>
  )
}

export default Searchbar
