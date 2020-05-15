import React from 'react';

import Navbar from '../components/Navbar';
import PortfolioItem from '../components/PortfolioItem';
import BoringWebsite from '../components/BoringWebsite';
import HandmadeAudioImage from '../assets/images/Handmade-Audio-Image.png';
import RJShoemakerImage from '../assets/images/RJ_Shoemaker_Image.png';
import StarAudioImage from '../assets/images/Star_Audio_Screenshot.png';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className='home-content'>
        <div className='home-header'>Websites that are out of this world.</div>
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
            imageUrl={RJShoemakerImage}
            imageId='rj-shoemaker-image'
            boxLabel="RJ Shoemaker's Portfolio"
          />
          <PortfolioItem
            id='star-audio'
            url='https://lit-chamber-40261.herokuapp.com'
            imageUrl={StarAudioImage}
            imageId='start-audio-image'
            boxLabel='Star Audio'
          />
        </div>
        <div className='home-header'>No cookie-cutter designs.</div>
        <div className='portfolio-wrapper'>
          <BoringWebsite id='boring-website-1' />
          <BoringWebsite id='boring-website-2' />
          <BoringWebsite id='boring-website-3' />
        </div>
        <div className='home-subheader'>
          Let us build your personal or small business website.
        </div>
        <div className='contact-section'>
          <div id='contact-header' className='contact-row'>
            Reach Out:
          </div>
          <div className='contact-row'>Lunar Web Development</div>
          <div className='contact-row'>rj.shoemaker@lunardm.com</div>
          <div className='contact-row'>908-824-0852</div>
        </div>
      </div>
    </>
  );
};

export default Home;
