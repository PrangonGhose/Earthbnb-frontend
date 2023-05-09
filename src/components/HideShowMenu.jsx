import React from 'react'
import arrow from '../assets/arrow.png';
import disArrow from '../assets/dis-arrow.png';

export default function HideShowMenu() {
  function hideMenu() {
    const navContainer = document.querySelector('#navbar');
    const showArrow = document.querySelector('#show-arrow');
    const hideArrow = document.querySelector('#hide-arrow');
    if (navContainer.classList.contains('active-navbar')) {
      navContainer.classList.remove('active-navbar');
      navContainer.style.display = 'none';
      hideArrow.style.display = 'none';
      showArrow.style.display = 'block';
    } else {
      navContainer.classList.add('active-navbar');
      navContainer.style.display = 'flex';
      hideArrow.style.display = 'block';
      showArrow.style.display = 'none';
    }
  }
  return (
    <button type="button" onClick={hideMenu} className="back-btn">
      <img id="hide-arrow" src={arrow} className="arrow-img" alt="arrow" />
      <img id="show-arrow" src={disArrow} className="arrow-img" alt="arrow" />
    </button>
  )
}
