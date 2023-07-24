import React from 'react';
import './navbar.css';
import {SiYourtraveldottv} from 'react-icons/si';

const NavBar = () => {
  return (
    <section className='navBarSection'>
      <div className='header'>
        <div className='logoDiv'>
          <a href='#' className='logo'>
            <h1><SiYourtraveldottv className='icon'/></h1>
          </a>
        </div>
      </div>
    </section>
  );
};

export default NavBar;