import React, { useState } from 'react';
import '../style/Navbar.css'; 
import { useTheme, lightTheme, darkTheme } from '../theme/ThemeContext';

const Navbar = () => {
  const { updateTheme } = useTheme();
  const [darkMode, setDarkMode] = useState(false);

  const handleToggle = () => {
    setDarkMode(!darkMode);

    updateTheme(
      !darkMode
        ? lightTheme
        : darkTheme
    );
  };

  return (
     <nav className="navbar">
      <div className="logo">MyService</div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li className="dropdown">
          <a href="#">Services</a>
          <ul className="dropdown-menu">
            <li><a href="#">Web Development</a></li>
            <li><a href="#">App Development</a></li>
            <li><a href="#">UI/UX Design</a></li>
          </ul>
        </li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <label className="switch">
        <input type="checkbox" checked={!darkMode} onChange={handleToggle} />
        <span className="slider round"></span>
      </label>
    </nav>
  );
};

export default Navbar;
