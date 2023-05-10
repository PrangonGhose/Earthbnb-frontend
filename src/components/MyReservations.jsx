import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReservations } from '../redux/reservation/reservation';
import ReservationTr from './ReservationTr';
import { v4 as uuidv4 } from 'uuid';
import './stylesheets/reservation.css'

export default function MyReservations() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getReservations());
  }, [dispatch]);

  const reservations = useSelector((state) => state.reservations);
  const houses = useSelector((state) => state.houses);

  return (
    <div class="container text-center">
      <h2>My Reservations</h2>
      <ul class="responsive-table">
        <li class="table-header">
            <div class="col">House</div>
            <div class="col">Starting date</div>
            <div class="col">Ending date</div>
          </li>
          {reservations.map((reservation) => {
            const house = houses.find((item) => item.id === parseInt(reservation.house_id, 10));
            return <ReservationTr
              key={uuidv4()}
              id={reservation.id}
              name={house.name}
              starting_date={reservation.starting_date}
              ending_date={reservation.ending_date}
            />
          })}
      </ul>
    </div>
  )
}

