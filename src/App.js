import React from 'react';
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import Education from './components/Education'
import Projects from './components/Projects'

const App = () => {

  const [isOpen, setIsOpen] = React.useState(false)
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <Hero/>
      <Education/>
      <Projects/>
    </>
  );
}

export default App;
