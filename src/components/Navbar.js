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
      <div className="nav-left">
        <Link to="/">
          <img
            className="nav-logo"
            src="https://user-images.githubusercontent.com/39475600/132941494-98d08b72-e62e-4c06-8216-405c5d2eecc8.jpg"
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
