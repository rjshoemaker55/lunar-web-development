import React from 'react';

import logo from '../assets/images/Lunar_Logo.png';

const Navbar = () => {
  return (
    <>
      <div className='navbar-wrapper'>
        <img className='navbar-logo' src={logo} />
      </div>
    </>
  );
};

export default Navbar;
