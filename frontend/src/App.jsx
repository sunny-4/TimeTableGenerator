import Header from './components/Header'
import Searchbar from './components/Searchbar'
import Coursetable from './components/Coursetable'
import Stickybar from './components/Stickybar'
import { useState } from 'react'
function App() {
  const [selectedCourses, setSelectedCourses] = useState([])
  return (
    <>
      <Header/>
      <Searchbar/>
      <Coursetable 
      selectedCourses={selectedCourses}
      setSelectedCourses={setSelectedCourses}
      />
      <Stickybar
      selectedCourses={selectedCourses}
      />
    </>
  )
}

export default App
