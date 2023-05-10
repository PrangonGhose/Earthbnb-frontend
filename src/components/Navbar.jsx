import React from 'react';
import { NavLink } from 'react-router-dom';
import './stylesheets/Navbar.css';
import ficon from '../assets/fb-icon.png';
import twicon from '../assets/tw-icon.png';
import gicon from '../assets/g-icon.png';
import picon from '../assets/p-icon.png';
import vicon from '../assets/v-icon.png';

function Navbar() {
  return (
    <nav className="gen-navbar-container p-0">
      <div id="navbar" className="main-navbar-container active-navbar">
        <div className="logo-container">
          <h1 className="logo-text nav-logo">Earthbnb</h1>
        </div>
        <div className="links-container">
          <ul className="nav-items">
            <li><NavLink to="/home" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>HOUSES</NavLink></li>
            <li><NavLink to="/reserve" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>RESERVE</NavLink></li>
            <li><NavLink to="/MyReservations" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>MY RESERVATIONS</NavLink></li>
            <li><NavLink to="/AddProperty" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>ADD A HOUSE</NavLink></li>
            <li><NavLink to="/DeleteProperty" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>DELETE A HOUSE</NavLink></li>
          </ul>
        </div>
        <div className="footer">
          <div className="social-icons-container">
            <a href="https://github.com/PrangonGhose/Earthbnb-backend"><img src={twicon} className="icon-img" alt="-icon" /></a>
            <a href="https://github.com/PrangonGhose/Earthbnb-backend"><img src={ficon} className="icon-img" alt="-icon" /></a>
            <a href="https://github.com/PrangonGhose/Earthbnb-backend"><img src={gicon} className="icon-img" alt="-icon" /></a>
            <a href="https://github.com/PrangonGhose/Earthbnb-backend"><img src={vicon} className="icon-img" alt="-icon" /></a>
            <a href="https://github.com/PrangonGhose/Earthbnb-backend"><img src={picon} className="icon-img" alt="-icon" /></a>
          </div>
          <div className="license-container">
            <h6 className="footer-license">workinprogress</h6>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
