import React from 'react'
import './Searchbar.css'
const Searchbar = () => {
  return (
    <div className='search-bar'>
        <span>🔎</span>
      <input type="text" placeholder='Search of courses...'id='search' />
    </div>
  )
}

export default Searchbar
