import React from 'react';
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import Education from './components/Education'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Activities from './components/Activities'

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
      <Activities />
      <Projects/>
      <Skills />
    </>
  );
}

export default App;
