import React from 'react'
import './Stickybar.css'
import { useState } from 'react'
const Stickybar = ({selectedCourses,setTimetable}) => {
  function senddata(){
    fetch('/api/selectedcourses',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        courses:selectedCourses
      })
    })
    .then(res =>res.json())
    .then(data=>setTimetable(data))
  }
  return (
    <div className='stickybar'>
      <div className="left">
        <button className='credits-btn btn'>Credits</button>
      </div>
      <div className="right">
        <button className='generate-btn btn' onClick={()=>senddata()}>Generate</button>
        <button className='clear-btn btn'>Clear</button>
        </div>
    </div>
  )
}

export default Stickybar
