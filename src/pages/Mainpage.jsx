import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { getHouses } from '../redux/house/house';
import House from '../components/House';
import '../components/stylesheets/arrow.css';
import './stylesheets_page/Mainpage.css';
import HideShowMenu from '../components/HideShowMenu';

export default function Mainpage() {
  const dispatch = useDispatch();
  const [hasHousesToLeft, setHasHousesToLeft] = useState(false);
  const [hasHousesToRight, setHasHousesToRight] = useState(true);
  const [visibleHouses, setVisibleHouses] = useState(3);
  const [initalHouse, setInitalHouse] = useState(3);
  const houses = useSelector((state) => state.houses);

  setTimeout(() => {
    const housesContainer = document.querySelectorAll('.house_article');
    housesContainer.forEach((house) => {
      house.classList.add('transition');
    });
  }, 10);

  useEffect(() => {
    dispatch(getHouses());
  }, [dispatch]);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 990) {
        setVisibleHouses(1);
        setInitalHouse(1);
        setHasHousesToLeft(false);
        setHasHousesToRight(true);
      } else if (screenWidth < 1288) {
        setVisibleHouses(2);
        setInitalHouse(2);
        setHasHousesToLeft(false);
        setHasHousesToRight(true);
      } else {
        setVisibleHouses(3);
        setInitalHouse(3);
        setHasHousesToLeft(false);
        setHasHousesToRight(true);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleClickRightArrow = () => {
    const housesContainer = document.querySelectorAll('.house_article');
    housesContainer.forEach((house) => {
      house.classList.add('transition');
    });

    if (visibleHouses < houses.length) {
      const screenWidth = window.innerWidth;
      if (screenWidth < 990) {
        setVisibleHouses(visibleHouses + 1);
        setInitalHouse(1);
      } else if (screenWidth < 1288) {
        setVisibleHouses(visibleHouses + 2);
        setInitalHouse(2);
      } else {
        setVisibleHouses(visibleHouses + 3);
        setInitalHouse(3);
      }
      setHasHousesToLeft(true);
    }
    setHasHousesToRight(visibleHouses < houses.length);
  };

  const handleClickLeftArrow = () => {
    if (visibleHouses - initalHouse > 0) {
      const screenWidth = window.innerWidth;
      if (screenWidth < 990) {
        setVisibleHouses(visibleHouses - 1);
        setInitalHouse(1);
      } else if (screenWidth < 1288) {
        setVisibleHouses(visibleHouses - 2);
        setInitalHouse(2);
      } else {
        setVisibleHouses(visibleHouses - 3);
        setInitalHouse(3);
      }
      setHasHousesToRight(true);
    }
    setHasHousesToLeft(visibleHouses - initalHouse > 0);

    const housesContainer = document.querySelectorAll('.house_article');
    housesContainer.forEach((house) => {
      house.classList.add('transition');
    });
  };

  return (
    <div className="main_page_container container-fluid p-0">
      <HideShowMenu />
      <section className="header_main">
        <h1>Latest luxury houses</h1>
        <p className="gray-text">Please select a house</p>
        <span className="circular-dots-border" />
      </section>
      <section className="houses_main d-flex align-items-center justify-content-between">
        <div
          className={`arrow left ${hasHousesToLeft ? 'has-houses' : 'no-houses'}`}
          onClick={handleClickLeftArrow}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              handleClickLeftArrow();
            }
          }}
          role="button"
          tabIndex="0"
        >
          <img src="https://img.icons8.com/sf-regular/48/null/sort-left.png" alt="arrow left" />
        </div>
        {houses.slice(visibleHouses - initalHouse, visibleHouses).map((house) => (
          <House
            key={uuidv4()}
            id={house.id}
            name={house.house_name}
            pictures={house.picture}
            description={house.description}
          />
        ))}
        <div
          className={`arrow right ${hasHousesToRight ? 'has-houses' : 'no-houses'}`}
          onClick={handleClickRightArrow}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              handleClickRightArrow();
            }
          }}
          role="button"
          tabIndex="0"
        >
          <img src="https://img.icons8.com/sf-regular/48/null/sort-right.png" alt="arrow right" />
        </div>
      </section>
    </div>
  );
}
