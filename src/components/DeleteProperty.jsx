import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { getHouses } from '../redux/house/house';
import House from './House';
import './stylesheets/DeleteProperty.css';

function DeleteProperty() {
  const dispatch = useDispatch();
  const houses = useSelector((state) => state.houses);

  useEffect(() => {
    dispatch(getHouses());
  }, [dispatch]);
  return (
    <div className="delete-main-container">
      <h1 className="delete-title">What Property Do You Wish To Delete?</h1>
      <div className="delete-houses-container">
        {houses.map((house) => (
          <div className="delete-house-container" key={house.id}>
            <House
              id={house.id}
              name={house.name}
              pictures={house.pictures}
              description={house.description}
            />
            <button type="button" className="delete-btn">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DeleteProperty;
