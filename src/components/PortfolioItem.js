import React from 'react';

const PortfolioItem = props => {
  return (
    <>
      <a
        id={props.id}
        className='portfolio-item'
        href={props.url}
        target='_blank'
      >
        <img
          src={props.imageUrl}
          id={props.imageId}
          className='portfolio-image'
        />
        <div className='portfolio-item-box'>{props.boxLabel}</div>
      </a>
    </>
  );
};

export default PortfolioItem;
