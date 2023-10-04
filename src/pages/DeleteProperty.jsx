import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHouses } from '../redux/house/house';
import House from '../components/House';
import './stylesheets_page/DeleteProperty.css';
import HideShowMenu from '../components/HideShowMenu';
import baseApiUrl from '../../server';

function DeleteProperty() {
  const dispatch = useDispatch();
  const housesData = useSelector((state) => state.houses);
  const userData = sessionStorage.getItem("earthbnb_user");
  const user = JSON.parse(userData);
  const username = user.username;
  const houses = housesData.filter(house => house.publisher === username)

  useEffect(() => {
    dispatch(getHouses());
  }, [dispatch]);

  const handleDelete = async (houseId) => {
    await fetch(`${baseApiUrl}/houses/${houseId}`, {
      method: 'DELETE',
    });
    dispatch(getHouses());
  };

  return (
    <div className="d-flex position-relative">
      <HideShowMenu />
      <div className="delete-main-container">
        <h1 className="delete-title">What Property Do You Wish To Delete?</h1>
        <div className="delete-houses-container">
          {houses.map((house) => (
            <div className="delete-house-container" key={house._id}>
              <House
                id={house._id}
                name={house.house_name}
                pictures={house.picture}
                description={house.description}
              />
              <button
                type="button"
                className="delete-btn"
                onClick={() => handleDelete(house._id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DeleteProperty;
