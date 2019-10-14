import React from 'react';

const Card = ({ id, name, email }) => {
  const cardStyle = {
    width: '18rem'
  }

  return (
    <div className='shadow card border-dark my-3' style={cardStyle}>
      <img src={`https://robohash.org/${id}?size=200x200`} alt='robot' className='card-img-top' />
      <div className='card-body text-dark'>
        <h5 className='card-title'>{name}</h5>
        <p className='card-text'>{email}</p>
      </div>
    </div>
  )
}

export default Card;