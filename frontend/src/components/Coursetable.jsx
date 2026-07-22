import React from 'react'
import './Coursetable.css'
import { useState,useEffect } from 'react'

const Coursetable = ({selectedCourses,setSelectedCourses}) => {
  const [courses, setcourses] = useState({})
  function handleselectedcourses(courseid,checked){
    if(checked){
      setSelectedCourses(prev=>[...prev,courseid])
    }else{
      setSelectedCourses(prev=>
        prev.filter(course => course!==courseid)
      );
    }
  }
  useEffect(() => {
    fetch('/api/courses')
    .then(res=>res.json())
    .then(data =>{
      console.log(courses);
      setcourses(data);
    })
    .catch(err =>{
      console.log(err);
    })
    
  }, [])
  useEffect(() => {
    console.log(selectedCourses)
  }, [selectedCourses])
  

  return (
    <div className='course-table'>
      <table>
        <thead>
            <tr>
                <th>Course code</th>
                <th>Course Name</th>
                <th>C</th>
                <th>Pick</th>
            </tr>
        </thead>
        <tbody>
            {
              Object.keys(courses).map((courseid)=>(
                <tr key={courseid}>
                <td>{courseid}</td>
                <td>{courses[courseid]["Course Name"]}</td>
                <td>{courses[courseid]["Credits"]}</td>
                <td><input type="checkbox" className='selectbox' onChange={(event)=>handleselectedcourses(courseid,event.target.checked)} /></td>
                </tr>
              ))
            }
        </tbody>
      </table>
      
    </div>
  )
}

export default Coursetable
