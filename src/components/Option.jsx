import React from 'react';
import { number, string } from 'prop-types';

export default function Option({ name, id }) {
  return (
    <option name={name} value={id}>{name}</option>
  );
}

Option.propTypes = {
  name: string.isRequired,
  id: number.isRequired,
};
