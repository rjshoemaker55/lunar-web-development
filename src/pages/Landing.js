import React from 'react';
import { Link } from 'react-router-dom';

import Home from './Home';

const Landing = () => {
  return (
    <>
      <div className='landing-wrapper'>l</div>
      <Link className='more-info-button' to='/home'>
        Enter
      </Link>
    </>
  );
};

export default Landing;
