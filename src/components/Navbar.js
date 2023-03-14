import React from 'react'
import logo from "./images/Logo-white.svg.png"

function Navbar() {
  return (
    <div className='main'>
        <div className='for-width'>
        <div >
            <img className='logo' src={logo} alt="logo" />
        </div>
        <div>
            <p className='nav-right'>Hello, Name</p>
        </div>
        </div>
    </div>
    
  )
}

export default Navbar