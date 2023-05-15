import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './stylesheets/Navbar.css';
import { TbMenu } from 'react-icons/tb';
import { GrFormClose } from 'react-icons/gr';
import ficon from '../assets/fb-icon.png';
import twicon from '../assets/tw-icon.png';
import gicon from '../assets/g-icon.png';
import picon from '../assets/p-icon.png';
import vicon from '../assets/v-icon.png';

function Navbar({ handleLogout }) { // eslint-disable-line
  const [menuIsShowing, setMenuIsShowing] = useState(false);

  const handleMenuClick = () => {
    const NavContainer = document.querySelector('#navbar');
    const MenuIcon = document.querySelector('.tb-menu');
    const LinksContainer = document.querySelector('.links-container');
    const Logout = document.querySelector('.main-navbar-container button');
    const Footer = document.querySelector('.footer');
    const showArrow = document.querySelector('#show-arrow');
    const hideArrow = document.querySelector('#hide-arrow');
    const paginationLeftArrow = document.querySelector('.arrow.left');
    if (!NavContainer.classList.contains('active-navbar')) {
      NavContainer.classList.add('active-navbar');
      NavContainer.style.display = 'flex';
      hideArrow.style.display = 'none';
      showArrow.style.display = 'block';
    }

    if (paginationLeftArrow) {
      paginationLeftArrow.style.zIndex = '0';
      if (MenuIcon.classList.contains('show-tb-menu')) {
        setTimeout(() => {
          paginationLeftArrow.style.zIndex = '100';
        }, 400);
      }
    }
    setMenuIsShowing(!menuIsShowing);
    NavContainer.classList.toggle('hide-in-mobile');
    MenuIcon.classList.toggle('show-tb-menu');
    LinksContainer.classList.toggle('display-none');
    Logout.classList.toggle('display-none');
    Footer.classList.toggle('display-none');
  };

  return (
    <nav className="gen-navbar-container p-0">
      <div className="tb-menu">
        { menuIsShowing
          ? <GrFormClose onClick={handleMenuClick} />
          : <TbMenu onClick={handleMenuClick} /> }
      </div>
      <div id="navbar" className="main-navbar-container active-navbar hide-in-mobile">
        <div className="logo-container d-flex align-items-center gap-3">
          <h1 className="logo-text nav-logo display-none">Earthbnb</h1>
        </div>
        <div className="links-container display-none">
          <ul className="nav-items">
            <li><NavLink to="/home" className={({ isActive }) => (isActive ? 'active' : 'inactive')} onClick={handleMenuClick}>HOUSES</NavLink></li>
            <li><NavLink to="/reserve" className={({ isActive }) => (isActive ? 'active' : 'inactive')} onClick={handleMenuClick}>RESERVE</NavLink></li>
            <li><NavLink to="/MyReservations" className={({ isActive }) => (isActive ? 'active' : 'inactive')} onClick={handleMenuClick}>MY RESERVATIONS</NavLink></li>
            <li><NavLink to="/AddProperty" className={({ isActive }) => (isActive ? 'active' : 'inactive')} onClick={handleMenuClick}>ADD A HOUSE</NavLink></li>
            <li><NavLink to="/DeleteProperty" className={({ isActive }) => (isActive ? 'active' : 'inactive')} onClick={handleMenuClick}>DELETE A HOUSE</NavLink></li>
          </ul>
        </div>
        <button type="button" className="logout-btn" onClick={handleLogout}>Logout</button>
        <div className="footer display-none">
          <div className="social-icons-container">
            <a href="https://github.com/PrangonGhose/Earthbnb-backend"><img src={twicon} className="icon-img" alt="-icon" /></a>
            <a href="https://github.com/PrangonGhose/Earthbnb-backend"><img src={ficon} className="icon-img" alt="-icon" /></a>
            <a href="https://github.com/PrangonGhose/Earthbnb-backend"><img src={gicon} className="icon-img" alt="-icon" /></a>
            <a href="https://github.com/PrangonGhose/Earthbnb-backend"><img src={vicon} className="icon-img" alt="-icon" /></a>
            <a href="https://github.com/PrangonGhose/Earthbnb-backend"><img src={picon} className="icon-img" alt="-icon" /></a>
          </div>
          <div className="license-container">
            <h6 className="footer-license">2023 EARTHBNB Project</h6>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
