import Cookies from 'js-cookie';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { CgDarkMode } from 'react-icons/cg';

import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const theme = useSelector(state => state.theme);
  const dispatch = useDispatch();

  function handleTheme(e) {
    e.preventDefault();
    dispatch({ type: 'CHANGE_THEME', theme: theme === 'light' ? 'dark' : 'light' });
  }
  return (
    <div className={`navbar ${theme == 'dark' && 'navbar-dark'}`}>
      <div className="nav-left zoom">
        <Link to="/">
          <img
            className="nav-logo"
            src="https://i.pinimg.com/736x/a4/d4/80/a4d4803a121a6dd1d7742b57897e4dbc.jpg"
          />
          <h2>LBD Store</h2>
        </Link>

      </div>
      <div className="nav-right">
        <CgDarkMode onClick={handleTheme} className="nav-icon zoom" />
      </div>
    </div>
  )
}

export default Navbar
