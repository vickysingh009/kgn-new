import React from 'react';
import css from './Card.module.css';

function Card({children}) {
  return (
    <>
      <div className={css.card}>
        {children}
      </div>
    </>
  );
}

export default Card;
