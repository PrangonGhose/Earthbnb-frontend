import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import DatePicker from 'react-datepicker';
import { func } from 'prop-types';
import HideShowMenu from '../components/HideShowMenu';
import Option from '../components/Option';
import './stylesheets_page/reserve.css';
import 'react-datepicker/dist/react-datepicker.css';
import { getHouses } from '../redux/house/house';

export default function Reserve({ loginStatus }) {
  const houses = useSelector((state) => state.houses);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const selectedHouse = location.state ? location.state : {};

  const [user, setUser] = useState({});
  const [house, setHouse] = useState(selectedHouse);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [disabledDates, setDisabledDates] = useState([]);
  const [inputStartDisabled, setInputStartDisabled] = useState(true);
  const [inputEndDisabled, setInputEndDisabled] = useState(true);
  const [status, setStatus] = useState('');
  const [minEndDate, setMinEndDate] = useState(new Date());

  useEffect(() => {
    (async () => {
      const { isLoggedIn, user } = await loginStatus();
      if (isLoggedIn) {
        dispatch(getHouses());
        setUser(user);
        if (Object.keys(house).length !== 0) {
          setInputStartDisabled(false);
        }
      } else {
        navigate('/');
      }
    })();
  }, [dispatch, house, loginStatus, navigate]);

  useEffect(() => {
    const minEnd = new Date();
    if (startDate !== null) {
      minEnd.setDate(startDate.getDate() + 1);
      minEnd.setMonth(startDate.getMonth());
      minEnd.setYear(startDate.getFullYear());
    }
    setMinEndDate(minEnd);
  }, [startDate]);

  useEffect(() => {
    setTimeout(() => {
      setStatus('');
    }, 5000);
  }, [status]);

  const handleDisableDates = async (house) => {
    const startingDates = [];
    const endingDates = [];
    const range = [];
    const response = await fetch(`https://earthbnb-1n7m.onrender.com/houses/${house.id}`);
    let data = await response.json();
    [data] = data;

    for (let i = 0; i < data.reservations.length; i += 1) {
      startingDates.push(data.reservations[i].starting_date);
      endingDates.push(data.reservations[i].ending_date);
    }

    for (let i = 0; i < startingDates.length; i += 1) {
      const start = new Date(startingDates[i]);
      const end = new Date(endingDates[i]);
      const currDate = new Date(start);
      while (currDate <= end) {
        const date = new Date(currDate);
        range.push(date);
        currDate.setDate(currDate.getDate() + 1);
      }
    }
    setDisabledDates(range);
  };

  useEffect(() => {
    if (Object.entries(house).length !== 0) {
      handleDisableDates(house);
    }
  }, [house]);

  const handleHouseChange = async (event) => {
    if (event.target.value !== '') {
      setHouse({
        ...house,
        id: event.target.value,
        house_name: event.target.name,
      });
      setInputStartDisabled(false);
    } else {
      setInputStartDisabled(true);
    }
    setStatus('');
    setInputEndDisabled(true);
    setStartDate(null);
    setEndDate(null);
  };

  const handleStartDateChange = async (date) => {
    const tempStart = new Date();
    tempStart.setDate(date.getDate());
    tempStart.setMonth(date.getMonth());
    tempStart.setYear(date.getFullYear());
    setStartDate(tempStart);
    setInputEndDisabled(false);
  };

  const handleEndDateChange = (date) => {
    const tempEnd = new Date();
    tempEnd.setDate(date.getDate());
    tempEnd.setMonth(date.getMonth());
    tempEnd.setYear(date.getFullYear());
    setEndDate(tempEnd);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const reservationStartDate = startDate.toLocaleString('ja-JP', options).replace(/\//g, '-');
    const reservationEndDate = endDate.toLocaleString('ja-JP', options).replace(/\//g, '-');

    for (let i = 0; i < disabledDates.length; i += 1) {
      if (reservationStartDate < disabledDates[i].toLocaleString('ja-JP', options).replace(/\//g, '-') && reservationEndDate > disabledDates[i].toLocaleString('ja-JP', options).replace(/\//g, '-')) {
        setStatus('The house is already reserved in this date range');
        setEndDate(null);
        return;
      }
    }

    const newReservation = {
      user_id: user.id,
      house_id: house.id,
      starting_date: reservationStartDate,
      ending_date: reservationEndDate,
    };

    const response = await fetch('https://earthbnb-1n7m.onrender.com/reservations/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newReservation),
    });

    const data = await response.json();
    if (data.status === 'created') {
      setStatus('House reserved successfully');
      setInputStartDisabled(true);
      setInputEndDisabled(true);
      setStartDate(null);
      setEndDate(null);
      setHouse({});
    }
  };

  return (
    <div className="reserve_container">
      <div className="overlay-green d-flex">
        <HideShowMenu />
        <div className="reserve_container_in">
          <h3 className="text-white">RESERVE A HOUSE</h3>
          <span className="line" />
          <p className="text-center text-white hide-in-mobile">
            Discover the epitome of luxury living with our exquisite rental homes.
            Experience a world of opulence and refinement, where every detail has been
            meticulously designed to exceed your expectations. From breathtaking
            architecture to lavish amenities, our luxury houses offer a lifestyle of
            unparalleled elegance.
          </p>
          <form className="form_container" onSubmit={handleSubmit}>
            <select id="houses" name="houses" className="select_house mt-3" value={house.id || ''} onChange={handleHouseChange} required>
              <option value="">Select A House</option>
              {
                houses.length > 0 ? (
                  houses.map((house) => (
                    <Option
                      key={house.id}
                      name={house.house_name}
                      id={house.id}
                    />
                  ))
                ) : (
                  <option value="no house">No houses avaliable</option>
                )
              }
            </select>
            <div className="date-inputs">
              <label htmlFor="start-date" className="text-white d-flex flex-column align-items-center">
                <div className="input-name">
                  Start Date
                </div>
                { /* input added only to avoid linters */ }
                <input type="text" hidden />
                <DatePicker
                  dateFormat="yyyy-MM-dd"
                  id="start-date"
                  selected={startDate}
                  onChange={(date) => handleStartDateChange(date)}
                  excludeDates={disabledDates}
                  minDate={new Date()}
                  placeholderText="YYYY-MM-DD"
                  disabled={inputStartDisabled}
                  required
                />
              </label>
            </div>
            <div className="date-inputs text-white">
              <label htmlFor="end-date" className="text-white d-flex flex-column align-items-center">
                <div className="input-name">
                  End Date
                </div>
                { /* input added only to avoid linters */ }
                <input type="text" hidden />
                <DatePicker
                  dateFormat="yyyy-MM-dd"
                  onChange={(date) => handleEndDateChange(date)}
                  selected={endDate}
                  excludeDates={disabledDates}
                  minDate={minEndDate}
                  placeholderText="YYYY-MM-DD"
                  disabled={inputEndDisabled}
                  required
                />
              </label>
            </div>
            <button type="submit" className="mt-3">Reserve Now</button>
          </form>
          <div className="mt-5 status-notification">
            {status}
          </div>
        </div>
      </div>
    </div>
  );
}

Reserve.propTypes = {
  loginStatus: func.isRequired,
};
