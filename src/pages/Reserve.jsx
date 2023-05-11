import React from 'react';
import './stylesheets_page/reserve.css';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import HideShowMenu from '../components/HideShowMenu';
import Option from '../components/Option';

export default function Reserve() {
  const houses = useSelector((state) => state.houses);

  return (
    <div className="reserve_container">
      <div className="overlay-green d-flex">
        <HideShowMenu />
        <div className="reserve_container_in">
          <h3 className="text-white">RESERVE A HOUSE</h3>
          <span className="line" />
          <p className="text-center text-white">
            Discover the epitome of luxury living with our exquisite rental homes.
            Experience a world of opulence and refinement, where every detail has been
            meticulously designed to exceed your expectations. From breathtaking
            architecture to lavish amenities, our luxury houses offer a lifestyle of
            unparalleled elegance.
          </p>
          <div className="form_container">
            <select name="houses" className="select_house">
              {
                houses.length > 0 ? (
                  houses.map((house) => (
                    <Option
                      key={uuidv4()}
                      name={house.name}
                    />
                  ))
                ) : (
                  <option value="no house">No houses avaliable</option>
                )
              }
            </select>
            <div className="date-inputs">
              <label htmlFor="start-date" className="text-white">
                Start Date: &#160;
                <input type="date" id="start-date" name="start-date" />
              </label>
            </div>
            <div className="date-inputs">
              <label htmlFor="end-date" className="text-white">
                End Date: &#160;
                <input type="date" id="end-date" name="end-date" />
              </label>
            </div>
            <button type="submit">Reserve Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
