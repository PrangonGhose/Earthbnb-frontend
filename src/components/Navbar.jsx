import React from 'react';
import { NavLink } from 'react-router-dom';
import './stylesheets/Navbar.css';
import ficon from '../assets/fb-icon.png';
import twicon from '../assets/tw-icon.png';
import gicon from '../assets/g-icon.png';
import picon from '../assets/p-icon.png';
import vicon from '../assets/v-icon.png';
import arrow from '../assets/arrow.png';

function Navbar() {
  const navContainer = document.querySelector('#navbar');
  function hideMenu() {
    navContainer.style.display = 'none';
  }
  return (
    <div className="gen-navbar-container">
      <div id="navbar" className="main-navbar-container">
        <div className="logo-container">
          <h1 className="logo-text nav-logo">Earthbnb</h1>
        </div>
        <div className="links-container">
          <ul className="nav-items">
            <li><NavLink to="/home" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>All Properties</NavLink></li>
            <li><NavLink to="/MakeAReservation" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Make a reservation</NavLink></li>
            <li><NavLink to="/MyReservations" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>My reservations</NavLink></li>
            <li><NavLink to="/AddProperty" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Add a property</NavLink></li>
            <li><NavLink to="/DeleteProperty" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Delete a property</NavLink></li>
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
      <button type="button" onClick={hideMenu} className="back-btn"><img src={arrow} className="arrow-img" alt="arrow" /></button>
    </div>
  );
}

export default Navbar;
