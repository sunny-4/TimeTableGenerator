import Header from './components/Header'
import Searchbar from './components/Searchbar'
import Coursetable from './components/Coursetable'
import Stickybar from './components/Stickybar'
import DisplayTimetable from './components/DisplayTimetable'
import { useState } from 'react'
function App() {
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [Timetable, setTimetable] = useState();
  return (
    <>
      <Header/>
      <DisplayTimetable
        Timetable={Timetable}
      />
      <Searchbar/>
      <Coursetable 
      selectedCourses={selectedCourses}
      setSelectedCourses={setSelectedCourses}
      />
      <Stickybar
      selectedCourses={selectedCourses}
      setTimetable={setTimetable}
      />
    </>
  )
}

export default App
