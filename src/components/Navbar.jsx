import React from 'react';
import { NavLink } from 'react-router-dom';
import './stylesheets/Navbar.css';
import ficon from '../assets/fb-icon.png';
import twicon from '../assets/tw-icon.png';
import gicon from '../assets/g-icon.png';
import picon from '../assets/p-icon.png';
import vicon from '../assets/v-icon.png';
// import arrow from '../assets/arrow.png';
// import disArrow from '../assets/dis-arrow.png';

function Navbar({ handleLogout }) { // eslint-disable-line
  // function hideMenu() {
  //   const navContainer = document.querySelector('#navbar');
  //   const showArrow = document.querySelector('#show-arrow');
  //   const hideArrow = document.querySelector('#hide-arrow');
  //   if (navContainer.classList.contains('active-navbar')) {
  //     navContainer.classList.remove('active-navbar');
  //     hideArrow.style.display = 'none';
  //     showArrow.style.display = 'block';
  //   } else {
  //     navContainer.classList.add('active-navbar');
  //     hideArrow.style.display = 'block';
  //     showArrow.style.display = 'none';
  //   }
  // }
  return (
    <nav className="gen-navbar-container p-0">
      <div id="navbar" className="main-navbar-container active-navbar">
        <div className="logo-container">
          <h1 className="logo-text nav-logo">Earthbnb</h1>
        </div>
        <div className="links-container">
          <ul className="nav-items">
            <li><NavLink to="/home" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>HOUSES</NavLink></li>
            <li><NavLink to="/MakeAReservation" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>RESERVE</NavLink></li>
            <li><NavLink to="/MyReservations" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>MY RESERVATIONS</NavLink></li>
            <li><NavLink to="/AddProperty" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>ADD A HOUSE</NavLink></li>
            <li><NavLink to="/DeleteProperty" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>DELETE A HOUSE</NavLink></li>
          </ul>
        </div>
        <button type="button" className="btn btn-danger" onClick={handleLogout}>Logout</button>
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
      {/* <button type="button" onClick={hideMenu} className="back-btn">
        <img id="hide-arrow" src={arrow} className="arrow-img" alt="arrow" />
        <img id="show-arrow" src={disArrow} className="arrow-img" alt="arrow" />
      </button> */}
    </nav>
  );
}

export default Navbar;
