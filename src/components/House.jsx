import React from 'react';
import { string } from 'prop-types';
import Socials from './Socials';
import '../css/house.css';

export default function House(props) {
  const {
    name, description, pictures,
  } = props;
  return (
    <article className="house_article">
      <img src={pictures} alt="" className="house_pic img-fluid mb-3" />
      <h5>{name}</h5>
      <span className="circular-dots-border mb-3 mt-2" />
      <p>{description}</p>
      <Socials />
    </article>
  );
}

House.propTypes = {
  name: string.isRequired,
  description: string.isRequired,
  //   id: number.isRequired, number have to be imported
  pictures: string.isRequired,
};
