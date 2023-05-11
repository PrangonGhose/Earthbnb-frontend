import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createHouse } from '../redux/house/house';

import './stylesheets/AddProperty.css';

function AddProperty() {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    house_name: '',
    address: '',
    rooms: '',
    beds: '',
    picture: '',
    price_by_night: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createHouse(formData));
  };

  return (
    <div className="main-add-container">
      <div className="add-form-container">
        <h1 className="add-form-title">Add A New House</h1>
        <form className="inputs-container" onSubmit={handleSubmit}>
          <div className="add-input-container">
            <label htmlFor="nameInput" className="add-label">
              Name
              <br />
              <input
                id="nameInput"
                className="add-input"
                required
                type="text"
                name="house_name"
                value={formData.house_name}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="add-input-container">
            <label htmlFor="addressInput" className="add-label">
              Address
              <br />
              <input
                id="addressInput"
                className="add-input"
                required
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="add-input-container">
  <label htmlFor="roomsInput" className="add-label">
    Rooms
    <br />
    <input
      id="roomsInput"
      className="add-input"
      required
      type="number"
      name="rooms"
      value={formData.rooms}
      onChange={handleChange}
    />
  </label>
</div>
<div className="add-input-container">
  <label htmlFor="bedsInput" className="add-label">
    Beds
    <br />
    <input
      id="bedsInput"
      className="add-input"
      required
      type="number"
      name="beds"
      value={formData.beds}
      onChange={handleChange}
    />
  </label>
</div>
<div className="add-input-container">
  <label htmlFor="picturesInput" className="add-label">
    Picture
    <br />
    <input
      id="picturesInput"
      className="add-input"
      required
      type="text"
      name="picture"
      value={formData.picture}
      onChange={handleChange}
    />
  </label>
</div>
<div className="add-input-container">
  <label htmlFor="priceInput" className="add-label">
    Price by night
    <br />
    <input
      id="priceInput"
      className="add-input"
      required
      type="number"
      name="price_by_night"
      value={formData.price_by_night}
      onChange={handleChange}
    />
  </label>
</div>
<div className="add-input-container">
  <label htmlFor="descriptionInput" className="add-label">
    Description
    <br />
    <input
      id="descriptionInput"
      className="add-input"
      required
      type="text"
      name="description"
      value={formData.description}
      onChange={handleChange}
    />
  </label>
</div>
          <button type="submit" className="add-submit-btn">Add House</button>
        </form>
      </div>
    </div>
  );
}

export default AddProperty;