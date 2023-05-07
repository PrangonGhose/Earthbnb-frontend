import React from 'react'
import { string, number } from 'prop-types';
import Socials from './Socials';
import '../css/house.css'

export default function House(props) {
    const {
        id, name, description, pictures,
    } = props;
    return (
        <article className='house_article'>
            <img src={pictures} alt="House picture" className='house_pic img-fluid mb-3' />
            <h5>{name}</h5>
            <span className='circular-dots-border mb-3 mt-2'></span>
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