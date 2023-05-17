import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { func } from 'prop-types';
import { useNavigate } from 'react-router';
import { getReservations } from '../redux/reservation/reservation';
import ReservationTr from '../components/ReservationTr';
import HideShowMenu from '../components/HideShowMenu';
import './stylesheets_page/reservation.css';

export default function MyReservations({ loginStatus }) {
  const reservations = useSelector((state) => state.reservations);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const { isLoggedIn, user } = await loginStatus();
      if (isLoggedIn) {
        dispatch(getReservations(user));
      } else {
        navigate('/');
      }
    })();
  }, [dispatch, loginStatus, navigate]);

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
                reservations.map((reservation) => (
                  <ReservationTr
                    key={reservation.id}
                    id={reservation.id}
                    name={reservation.house.house_name}
                    startingDate={reservation.starting_date}
                    endingDate={reservation.ending_date}
                  />
                ))
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

MyReservations.propTypes = {
  loginStatus: func.isRequired,
};
