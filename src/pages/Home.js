import React from 'react';

import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <>
      <div className='home-wrapper'>
        <Navbar />
        <div className='home-content'>
          <div className='home-header'>
            Websites that are out of this world.
          </div>
          <div className='portfolio-wrapper'>
            <div id='handmade-audio' className='portfolio-item'></div>
            <div id='rj-shoemaker' className='portfolio-item'></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
