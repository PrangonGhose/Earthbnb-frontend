import React from 'react';
import { NavLink } from 'react-router-dom';
import { string } from 'prop-types';
import Socials from './Socials';
import './stylesheets/house.css';

export default function House(props) {
  const {
    id, name, description, pictures,
  } = props;
  return (
    <NavLink to={`/house/${id}`} className="house-detail-link">
      <article className="house_article">
        <img src={pictures} alt="" className="house_pic img-fluid mb-3" />
        <div className="name_house_container mb-1">
          <h5>{name}</h5>
        </div>
        <span className="circular-dots-border mb-3 mt-2" />
        <p className="gray-text">{description}</p>
        <Socials />
      </article>
    </NavLink>
  );
}

House.propTypes = {
  name: string.isRequired,
  description: string.isRequired,
  id: string.isRequired,
  pictures: string.isRequired,
};
