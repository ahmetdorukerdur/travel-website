import React from 'react';
import './about.css';

import DestinationImg from '../../Images/destination.avif';
import HotelImg from '../../Images/hotel.avif';
import CustomerImg from '../../Images/customer.avif';

const About = () => {
  return (
    <section className='about section'>
      <div className='secContainer'>
        <h2 className='title'>
          Why Adertur?
        </h2>

        <div className='mainContent container grid'>
          <div className='singleItem'>
            <img src={DestinationImg} alt='Image Name' />

            <h3>200+ Destination</h3>

            <p>
              In Adertur, with about 200+ destinations you can make your dream vacation.
            </p>
          </div>
          <div className='singleItem'>
            <img src={HotelImg} alt='Image Name' />

            <h3>1000+ Hotels</h3>

            <p>
              Safe and cheap layover in the places you go with more than 1000 hotels at Adertur.
            </p>
          </div>
          <div className='singleItem'>
            <img src={CustomerImg} alt='Image Name' />

            <h3>4000+ Customer</h3>

            <p>
              Aderdur is recommended by 99.9% of more than 4000 users who use it and whose numbers are increasing every day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;