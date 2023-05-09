import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { getHouses } from '../redux/house/house';
import House from '../components/House';
import '../components/stylesheets/arrow.css';

export default function Mainpage() {
  const dispatch = useDispatch();
  const [hasHousesToLeft, setHasHousesToLeft] = useState(false);
  const [hasHousesToRight, setHasHousesToRight] = useState(true);
  const [visibleHouses, setVisibleHouses] = useState(3);
  const houses = useSelector((state) => state.houses);

  useEffect(() => {
    dispatch(getHouses());
  }, [dispatch]);

  const handleClickRightArrow = () => {
    if (visibleHouses < houses.length) {
      setVisibleHouses(visibleHouses + 3);
      setHasHousesToLeft(true);
      setHasHousesToRight(visibleHouses + 4 <= houses.length);
    }
  };

  const handleClickLeftArrow = () => {
    if (visibleHouses > 3) {
      setVisibleHouses(visibleHouses - 3);
      setHasHousesToLeft(visibleHouses - 4 < 0);
      setHasHousesToRight(true);
    }
  };

  return (
    <div className="main_page_container container-fluid p-0">
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
        {houses.slice(visibleHouses - 3, visibleHouses).map((house) => (
          <House
            key={uuidv4()}
            id={house.id}
            name={house.name}
            pictures={house.pictures}
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
