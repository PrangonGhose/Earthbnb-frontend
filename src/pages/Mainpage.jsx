import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHouses } from '../redux/house/house';
import House from '../components/House';
import { v4 as uuidv4 } from 'uuid';
import '../css/arrow.css'

export default function Mainpage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHouses());
  }, [dispatch]);

  const [visibleHouses, setVisibleHouses] = useState(3);

  const handleClickRightArrow = () => {
    if (visibleHouses < houses.length) {
      setVisibleHouses(visibleHouses + 3);
    }
  };

  const handleClickLeftArrow = () => {
    if (visibleHouses > 3) {
      setVisibleHouses(visibleHouses - 3);
    }
  };

  const houses = useSelector((state) => state.houses);

  return (
    <div className='main_page_container col-10 container-fluid p-0'>
      <section className='header_main'>
        <h1>Latest luxury houses</h1>
        <p>Please select a house</p>
        <span className='circular-dots-border'></span>
      </section>
      <section className="houses_main row justify-content-between align-items-center">
        <div className="arrow left col-1" onClick={handleClickLeftArrow}>
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
        <div className="arrow right col-1" onClick={handleClickRightArrow}>
          <img src="https://img.icons8.com/sf-regular/48/null/sort-right.png" alt="arrow right" />  
        </div>
      </section>
    </div>
  )
}
