import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function MyReservations({ loginStatus }) { // eslint-disable-line
  const [reservations, setReservations] = useState([]);
  const navigate = useNavigate();
  let isLoggedIn; let
    user;

  useEffect(() => {
    (async () => {
      ({ isLoggedIn, user } = await loginStatus());
      if (isLoggedIn) {
        const response = await fetch(`http://localhost:3000/reservations/${user.username}`);
        const data = await response.json();
        setReservations(data);
      } else {
        navigate('/');
      }
    })();
  }, []);

  return (
    <>
      <h1>My reservations</h1>
      <table>
        <tbody>
          {reservations.map((reservation) => (
            <tr key={reservation.id}>
              <td>{reservation.house_id}</td>
              <td>{reservation.starting_date}</td>
              <td>{reservation.ending_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default MyReservations;
