import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      <Link to="/" className='logo'>
        <img src='./images/IICLogo.png' alt='IIC logo'  />
        <img src='./images/Idea Innovation Cell.png' alt='IIC logo' />
      </Link>
      <div className='menu' onClick={() => {
        setMenuOpen(!menuOpen);
      }}>
        <span></span>
        <span></span>
        <span></span>
      </div>
        <ul className={menuOpen ? "open" : ""}>
          <li>
            <NavLink to="/" onClick={() => {setMenuOpen(false)}}>Home</NavLink>
          </li>

          <li>
            <NavLink to="/about" onClick={() => {setMenuOpen(false)}}>About Us</NavLink>
          </li>

          <li>
            <NavLink to="/contact" onClick={() => {setMenuOpen(false)}}>Contact Us</NavLink>

          </li>
        </ul>
    </nav>
  )
}

export default Navbar;