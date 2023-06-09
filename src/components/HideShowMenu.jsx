import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleNavbar } from '../redux/navBar/navbar';
import arrow from '../assets/arrow.png';
import disArrow from '../assets/dis-arrow.png';

export default function HideShowMenu() {
  const dispatch = useDispatch();
  const isNavbarVisible = useSelector((state) => state.navbar.isNavbarVisible);

  function toggleMenu() {
    const navContainer = document.querySelector('.gen-navbar-container');
    const showArrow = document.querySelector('#show-arrow');
    const hideArrow = document.querySelector('#hide-arrow');

    if (isNavbarVisible) {
      navContainer.classList.add('hide-navbar');
      hideArrow.style.display = 'block';
      showArrow.style.display = 'none';
    } else {
      navContainer.classList.remove('hide-navbar');
      hideArrow.style.display = 'none';
      showArrow.style.display = 'block';
    }
    dispatch(toggleNavbar());
  }
  return (
    <button type="button" onClick={toggleMenu} className="back-btn hide-show-menu-btn">
      <img id="show-arrow" src={arrow} className="arrow-img" alt="arrow" />
      <img id="hide-arrow" src={disArrow} className="arrow-img" alt="arrow" />
    </button>
  );
}
