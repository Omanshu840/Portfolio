import React from 'react';
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

const App = () => {

  const [isOpen, setIsOpen] = React.useState(false)
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
    </>
  );
}

export default App;
