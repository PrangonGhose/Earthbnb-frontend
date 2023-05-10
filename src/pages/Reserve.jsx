import React from 'react'
import './stylesheets_page/reserve.css'
import HideShowMenu from '../components/HideShowMenu'
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid'
import Option from '../components/Option';

export default function Reserve() {

  const houses = useSelector((state) => state.houses);

  return (
    <div class="reserve_container">
      <div className="overlay-green d-flex">
        <HideShowMenu />
        <div className="reserve_container_in">
          <h3 className='text-white'>RESERVE A HOUSE</h3>
          <span className='line'></span>
          <p className='text-center text-white'>Discover the epitome of luxury living with our exquisite rental homes. Experience a world of opulence and refinement, where every detail has been meticulously designed to exceed your expectations. From breathtaking architecture to lavish amenities, our luxury houses offer a lifestyle of unparalleled elegance.
          </p>
          <div className="form_container">
            <select name="houses" className="select_house">
              {houses.map((house) => (
                <Option
                  key={uuidv4()}
                  name={house.name}
                />
              ))}
            </select>
            <div class="date-inputs">
              <label for="start-date" className='text-white'>Start Date: &#160;</label>
              <input type="date" id="start-date" name="start-date"></input>
            </div>
            <div class="date-inputs">
              <label for="end-date" className='text-white'>End Date: &#160;</label>
              <input type="date" id="end-date" name="end-date"></input>
            </div>
            <button type="submit" >Reserve Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}
