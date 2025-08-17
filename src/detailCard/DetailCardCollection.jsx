import React from 'react'
import DetailCard from './DetailCard'
import card1 from "./card1.png";
import card2 from "./card2.png";
import card3 from "./card3.png";
import card4 from "./card5.png";

function DetailCardCollection() {
  return (
    <div>
        <div className="text-center">
        <h2 className="text-xl sm:text-3xl font-bold  text-gray-800 tracking-tight">
          Discover Comfort & Elegance
        </h2>
      <p className="hidden sm:block text-base sm:text-lg text-gray-600 dark:text-gray-300">
  Explore our handpicked modern furniture collection designed to elevate your space.
</p>
      </div>

      <DetailCard
      card1={card1}
      card2={card2}
      ></DetailCard>
      <DetailCard
      card1={card3}
      card2={card4}
      ></DetailCard>
    </div>
  )
}

export default DetailCardCollection
