import React from 'react';

import Navbar from '../components/Navbar';
import PortfolioItem from '../components/PortfolioItem';
import HandmadeAudioImage from '../assets/images/Handmade-Audio-Image.png';
import RJShoemakerImage from '../assets/images/RJ_Shoemaker_Image.png';

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
            <PortfolioItem
              id='handmade-audio'
              url='http://handmade-audio.com'
              imageUrl={HandmadeAudioImage}
              imageId='handmade-audio-image'
              boxLabel='Handmade Audio'
            />
            <PortfolioItem
              id='rj-shoemaker'
              url='http://www.rjshoemaker.com'
              target='_blank'
              imageUrl={RJShoemakerImage}
              imageId='rj-shoemaker-image'
              boxLabel="RJ Shoemaker's Website"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
