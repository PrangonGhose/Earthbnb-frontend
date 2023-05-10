import React from 'react'

export default function ReservationTr(props) {
  const { name, starting_date, ending_date } = props
  return (
    <li class="table-row">
      <div class="col" data-label="House">{name}</div>
      <div class="col" data-label="Starting date">{starting_date}</div>
      <div class="col" data-label="Ending date">{ending_date}</div>
    </li>
  )
}

