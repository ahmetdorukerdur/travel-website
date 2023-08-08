import React from 'react';
import './offers.css';

import {BiSolidBed} from 'react-icons/bi';
import {GiStoneStack} from 'react-icons/gi';
import {MdOutlineWifi} from 'react-icons/md';
import {MdRoomService} from 'react-icons/md';
import {MdLocationPin} from 'react-icons/md';
import {TiArrowRightOutline} from 'react-icons/ti';

import FourSeasonIstanbul from '../../Images/four-season.webp';

const Offers = () => {
  return (
    <section className='offer container section'>
      <div className='secContainer'>
        <div className='secIntro'>
          <h2 className='secTitle'>
            Special Offers
          </h2>
          
          <p>
            Save at least 15% on stays worldwide, from relaxing retreats to off-grid adventures
          </p>
        </div>

        <div className='mainContent grid'>
          <div className='singleOffer'>
            <div className='destImage'>
              <img src={FourSeasonIstanbul} alt='Image Name' />
              <span className='discount'>
                20% off
              </span>
            </div>

            <div className='offerBody'>
              <div className='price flex'>
                <h4>
                  $999
                </h4>
                <span className='status'>
                  For Rent
                </span>
              </div>

              <div className='facilities flex'>
                <div className='singelFacilities flex'>
                  <BiSolidBed className='icon' />
                  <small>2 Beds</small>
                </div>

                <div className='singelFacilities flex'>
                  <GiStoneStack className='icon' />
                  <small>Spa/ Wellness</small>
                </div>

                <div className='singelFacilities flex'>
                  <MdOutlineWifi className='icon' />
                  <small>Wi-Fi</small>
                </div>

                <div className='singelFacilities flex'>
                  <MdRoomService className='icon' />
                  <small>Room Service</small>
                </div>
              </div>

              <div className='location flex'>
                <MdLocationPin className='icon' />
                <small>No:28, Çırağan St., 34349 Beşiktaş/İstanbul</small>
              </div>

              <button className='btn flex'>
                View Details
                <TiArrowRightOutline className='icon' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;