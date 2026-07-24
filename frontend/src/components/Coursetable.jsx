import React from 'react'
import './Coursetable.css'
import { useState,useEffect } from 'react'

const Coursetable = ({selectedCourses,setSelectedCourses,Searchtext}) => {
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
  function filterCourses(courses, searchText){
    const filteredCourses = Object.entries(courses).filter(([courseId, course]) => {
      const courseName = course["Course Name"].toLowerCase();
      const courseCode = courseId.toLowerCase();
      const searchTextLower = searchText.toLowerCase();
      return courseName.includes(searchTextLower) || courseCode.includes(searchTextLower);
    })
    return Object.fromEntries(filteredCourses);
  }
  const filteredCourses = filterCourses(courses, Searchtext);

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
              Object.keys(filteredCourses).map((courseid)=>(
                
                <tr key={courseid}>
                <td>{courseid}</td>
                <td>{filteredCourses[courseid]["Course Name"]}</td>
                <td>{filteredCourses[courseid]["Credits"]}</td>
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
