import Cookies from 'js-cookie';
import React from 'react'
import '../styles/Navbar.css';

function Navbar() {
  return (
    <div className="navbar navbar-dark">
      <div className="nav-left">
        <img
          className="nav-logo"
          src="https://i.pinimg.com/736x/a4/d4/80/a4d4803a121a6dd1d7742b57897e4dbc.jpg"
        />
        <h2>LBD Store</h2>
      </div>
      <div className="nav-right">
        <button>Mode</button>
      </div>
    </div>
  )
}

export default Navbar
