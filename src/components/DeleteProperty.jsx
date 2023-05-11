import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHouses, deleteHouse } from '../redux/house/house';
import House from './House';
import './stylesheets/DeleteProperty.css';

function DeleteProperty() {
  const dispatch = useDispatch();
  const houses = useSelector((state) => state.houses);

  useEffect(() => {
    dispatch(getHouses());
  }, [dispatch]);

  const handleDelete = (houseId) => {
    dispatch(deleteHouse(houseId))
      .then(() => {
      // House deleted successfully
        window.location.reload();
      });
  };

  return (
    <div className="delete-main-container">
      <h1 className="delete-title">What Property Do You Wish To Delete?</h1>
      <div className="delete-houses-container">
        {houses.map((house) => (
          <div className="delete-house-container" key={house.id}>
            <House
              id={house.id}
              name={house.house_name}
              pictures={house.picture}
              description={house.description}
            />
            <button
              type="button"
              className="delete-btn"
              onClick={() => handleDelete(house.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DeleteProperty;
