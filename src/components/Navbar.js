import React from "react"

const Navbar = ({ toggleSidebar }) => {
    return (
         <nav className="navbar">
             <div className="nav-center">
                 <div className="nav-header">
                        <img src={logo} alt="logo" />
                        <button className="toggle-btn" onClick={toggleSidebar}>
                        </button> 
                 </div>
             </div>
         </nav>   
    )
}

export default Navbar;