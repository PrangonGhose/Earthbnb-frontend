import React from 'react';
import { string } from 'prop-types';

export default function ReservationTr(props) {
  const { name, startingDate, endingDate } = props;
  return (
    <li className="table-row">
      <div className="col" data-label="House">{name}</div>
      <div className="col" data-label="Starting date">{startingDate}</div>
      <div className="col" data-label="Ending date">{endingDate}</div>
    </li>
  );
}

ReservationTr.propTypes = {
  name: string.isRequired,
  startingDate: string.isRequired,
  endingDate: string.isRequired,
};
