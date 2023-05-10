import React from 'react';
import { string } from 'prop-types';

export default function Option(props) {
  const { name } = props;
  return (
    <option value={name.toLowerCase()}>{name}</option>
  );
}

Option.propTypes = {
  name: string.isRequired,
};
