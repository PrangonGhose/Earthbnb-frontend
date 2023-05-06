import React from 'react'
import { string, number } from 'prop-types';
import Socials from './Socials';
import '../css/house.css'

export default function House(props) {
    const {
        id, name, description, pictures,
    } = props;
    return (
        <article className='house_article flex-column col-3'>
            <img src={pictures} alt="House picture" className='house_pic img-fluid' />
            <h3>{name}</h3>
            <span className="dot_line"></span>
            <p>{description}</p>
            <Socials />
        </article>
    )
}

// House.propTypes = {
//     name: string.isRequired,
//     description: string.isRequired,
//     id: number.isRequired,
//     pictures: string.isRequired,
// };    