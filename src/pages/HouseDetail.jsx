import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './stylesheets_page/HouseDetail.css';
import { AiOutlineRight, AiOutlineRightCircle } from 'react-icons/ai';
import color from '../assets/c-color.png';

export default function HouseDetail() {
  const { id } = useParams();
  const house = useSelector((state) => state.houses.find((item) => item.id === parseInt(id, 10)));

  return (
    <div className="house-detail-container d-flex">
      <section className="house-section d-flex justify-content-evenly">
        <article className="house-img">
          <img src={house.picture} alt="" />
        </article>
        <article className="house-info d-flex">
          <h2 className="align-self-end">{house.house_name}</h2>
          <p className="align-self-end deposit">- $100 deposit for house maintenance</p>
          <table className="mb-5">
            <tbody>
              <tr className="bg-gray">
                <td className="d-flex justify-content-between py-1 px-3">
                  <div>Price by night</div>
                  <div>{`$${house.price_by_night}`}</div>
                </td>
              </tr>
              <tr>
                <td className="d-flex justify-content-between py-1 px-3">
                  <div>Address</div>
                  <div>{house.address}</div>
                </td>
              </tr>
              <tr className="bg-gray">
                <td className="d-flex justify-content-between py-1 px-3">
                  <div>Rooms</div>
                  <div>{house.rooms}</div>
                </td>
              </tr>
              <tr>
                <td className="d-flex justify-content-between py-1 px-3">
                  <div>Beds</div>
                  <div>{house.beds}</div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="d-flex luxury-percent align-self-end">
            <span>100% Luxury</span>
            &nbsp;House
          </div>
          <div className="discover text-right align-self-end mb-4">
            DISCOVER MORE HOUSES
            <AiOutlineRight className="orange" />
          </div>
          <img src={color} alt="Color circle" className="align-self-end mb-5" />
          <button type="button" className="rent text-white align-self-end">
            Rent
            {' '}
            <AiOutlineRightCircle className="text-white" />
          </button>
        </article>
      </section>
    </div>

  );
}
