import React from 'react';

import './Card.styles.scss';

const Card = ({ id, name, email }) => {
  const cardStyle = {
    width: '14rem'
  }

  return (
    <div className='shadow card border-dark m-3 float-left' style={cardStyle}>
      <img src={`https://robohash.org/${id}?size=200x200`} alt='robot' className='card-img-top' />
      <div className='card-body text-dark'>
        <h6 className='card-title'>{name}</h6>
        <p className='card-text'>
          <small>{email}</small>
        </p>
      </div>
    </div>
  )
}

export default Card;