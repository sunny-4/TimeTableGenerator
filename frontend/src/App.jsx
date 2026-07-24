import Header from './components/Header'
import Searchbar from './components/Searchbar'
import Coursetable from './components/Coursetable'
import Stickybar from './components/Stickybar'
import DisplayTimetable from './components/DisplayTimetable'
import { useState,useEffect} from 'react'
function App() {
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [Timetable, setTimetable] = useState();
  const [Searchtext, setSearchtext] = useState("");
  
  return (
    <>
      <Header/>
      <DisplayTimetable
        Timetable={Timetable}
      />
      <Searchbar
      Searchtext={Searchtext}
      setSearchtext={setSearchtext}
      />
      <Coursetable 
      Searchtext={Searchtext}
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
