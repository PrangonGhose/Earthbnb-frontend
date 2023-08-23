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

  const formatDate = (inputDate) => {
    const date = new Date(inputDate);

    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Months are zero-based
    const day = date.getDate();

    const formattedDate = `${day}-${month}-${year}`;
    return formattedDate
  }

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
                reservations.map((reservation) => {
                  const start_date = formatDate(reservation.starting_date);
                  const end_date = formatDate(reservation.ending_date);

                  return <ReservationTr
                    key={reservation._id}
                    id={reservation._id}
                    name={reservation.house_id.house_name}
                    startingDate={start_date}
                    endingDate={end_date}
                  />
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

MyReservations.propTypes = {
  loginStatus: func.isRequired,
};
