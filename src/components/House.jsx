import React from 'react';
import { NavLink } from 'react-router-dom';
import { string, number } from 'prop-types';
import Socials from './Socials';
import './stylesheets/house.css';

export default function House(props) {
  const {
    id, name, description, pictures,
  } = props;
  console.log(id);
  return (
    <NavLink to={`/house/${id}`} className="house-detail-link"> 
      <article className="house_article">
        <img src={pictures} alt="" className="house_pic img-fluid mb-3" />
        <h5>{name}</h5>
        <span className="circular-dots-border mb-3 mt-2" />
        <p>{description}</p>
        <Socials />
      </article>
    </NavLink>
  );
}

House.propTypes = {
  name: string.isRequired,
  description: string.isRequired,
  id: number.isRequired,
  pictures: string.isRequired,
};
