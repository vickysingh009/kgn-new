import React from 'react'
import css from "./Card.module.css"

function Card({handleCardClick,productName,productImg}) {
  return (
     <div
                className={`${css.cardContainer} gap-1`}
                onClick={handleCardClick}
              >
                <img
                  src={productImg}
                  alt={productName}
                  className="h-full w-full object-contain"
                />
                <h2 className="text-lg font-bold mt-4">{productName}</h2>
              </div>
  )
}

export default Card
