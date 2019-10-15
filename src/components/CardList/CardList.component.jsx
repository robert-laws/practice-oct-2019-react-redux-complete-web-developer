import React from 'react';
import Card from '../Card/Card.component';

import './CardList.styles.scss';

const CardList = ({ robots }) => {
  return(
    <div className='list-container'>
      {robots.map(robot => {
        return <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email} />
      })}
    </div>
  )
}

export default CardList;