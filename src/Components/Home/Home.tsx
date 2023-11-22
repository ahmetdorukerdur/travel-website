import React, { useEffect } from 'react';
import './home.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

  useEffect(() => {
    Aos.init({duration: 2500})
  }, [])

  return (
    <section className='home'>
      <div className='secContainer container'>

        <div className='homeText'>

          <h1 data-aos='fade-up-right' className='title'>
            Plan your trip with Adertur
          </h1>

          <p data-aos='fade-up-left' data-aos-duration='3000' className='subTitle'>
            Travel the city you have dreamed for
          </p>

          <button data-aos='fade-up' data-aos-duration='3500' className='btn'>
            <a href='#'>Explore Now</a>
          </button>
        </div>

        <div className='homeCard grid'>
          <div data-aos='fade-right' className='locationDiv'>
            <label htmlFor='location'>Location</label>
            <input type='text' placeholder='Dream Destination'/>
          </div>

          <div data-aos='fade-right' className='distDiv'>
            <label htmlFor='distance'>Distance</label>
            <input type='text' placeholder='11/Meters'/>
          </div>

          <div data-aos='fade-right' className='priceDiv'>
            <label htmlFor='price'>Price</label>
            <input type='text' placeholder='$140-$500'/>
          </div>

          <button className='btn'>
            Search
          </button>
        </div>

      </div>
    </section>
  );
};

export default Home;