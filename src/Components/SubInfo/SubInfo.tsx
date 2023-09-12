import React from 'react';
import './subinfo.css';

import {GiPlanePilot} from 'react-icons/gi';
import {LuFacebook} from 'react-icons/lu';
import {RiTwitterXFill} from 'react-icons/ri';
import {RiInstagramLine} from 'react-icons/ri';
import {AiOutlineWhatsApp} from 'react-icons/ai';


const SubInfo = () => {
  return (
    <div className='subInfo'>
      <div className='secContainer container grid'>
        <div className='logoDiv'>

          <div className='subInfoLogo'>
            <a href='#' className='logo flex'>
              <h1 className='flex'>
                <GiPlanePilot className='icon' /> Adertur
              </h1>
            </a>
          </div>

          <div className='socialMedia flex'>
            <LuFacebook className='icon' />
            <RiTwitterXFill className='icon' />
            <RiInstagramLine className='icon' />
            <AiOutlineWhatsApp className='icon' />
          </div>
        </div>

        <div className='subInfoLinks'>
          <span className='linkTitle'>
            Helpful Links
          </span>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Explore</a>
          </li>
          <li>
            <a href="#">Travel</a>
          </li>
          <li>
            <a href="#">Blog</a> 
          </li>
        </div>

        <div className='subInfoLinks'>
          <span className='linkTitle'>
            Contact Us
          </span>
          <span className='phone'>+90 212 123 45 67</span>
          <span className='email'>info@adertur.com</span>
        </div>

      </div>
    </div>
  );
};

export default SubInfo;