import React from 'react';
import './popular.css';
import {TiArrowLeftOutline} from 'react-icons/ti';
import {TiArrowRightOutline} from 'react-icons/ti';
import {GoDotFill} from 'react-icons/go';

import ParisImg from '../../Images/paris.jpg';

const Popular = () => {
  return (
    <section className='popular section container'>
      <div className='secContainer'>

        <div className='secHeader flex'>
          <div className='textDiv'>
            <h2 className='secTitle'>
              Popular Destination
            </h2>
            <p>
              Discover the historical location and your dream destination with us!!!
            </p>
          </div>

          <div className='iconsDiv flex'>
            <TiArrowLeftOutline className='icon leftIcon' />
            <TiArrowRightOutline className='icon' />
          </div>
  
        </div>

        <div className='mainContent grid'>
          <div className='singleDestination'>
            <div className='destImage'>
              <img src={ParisImg} alt='Image title' />

              <div className='overlayInfo'>
                <h3>Text</h3>
                <p>Lorem ipsum dolor sit amet.</p>
                <TiArrowRightOutline className='icon' />
              </div>
            </div>

            <div className='destFooter'>
              <div className='number'>
                01
              </div>
              <div className='destText flex'>
                <h6>Paris</h6>
                <span className='flex'>
                  <span className='dot'>
                    <GoDotFill className='dotIcon' />
                  </span>
                  Dot
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Popular;