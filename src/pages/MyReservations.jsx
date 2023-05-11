import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { getReservations } from '../redux/reservation/reservation';
import ReservationTr from '../components/ReservationTr';
import HideShowMenu from '../components/HideShowMenu';
import './stylesheets_page/reservation.css';

export default function MyReservations() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getReservations());
  }, [dispatch]);

  const reservations = useSelector((state) => state.reservations);
  const houses = useSelector((state) => state.houses);

  return (
    <div className="reserve_container">
      <div className="overlay-green d-flex">
        <HideShowMenu />
        <div className="container text-center">
          <h2 className="text-white">My Reservations</h2>
          <ul className="responsive-table">
            <li className="table-header">
              <div className="col">House</div>
              <div className="col">Starting date</div>
              <div className="col">Ending date</div>
            </li>
            {
              reservations.length > 0 ? (
                reservations.map((reservation) => {
                  const house = houses.find((item) => item.id === parseInt(reservation.house_id, 10));
                  return (
                    <ReservationTr
                      key={uuidv4()}
                      id={reservation.id}
                      name={house.name}
                      startingDate={reservation.starting_date}
                      endingDate={reservation.ending_date}
                    />
                  );
                })
              ) : (
                <li className="table-row">
                  <div className="col" data-label="House">No Reservations</div>
                </li>
              )
            }
          </ul>
        </div>
      </div>
    </div>
  );
}
