import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import { FaShoppingCart } from 'react-icons/fa';

import css from './CardCrausel.module.css';
import Card from './Card';

import card1 from './image/card1.png';
import card2 from './image/card2.png';
import card3 from './image/card3.png';
import card4 from './image/card4.png';
import card5 from './image/card5.png';
import card6 from './image/card6.png';
const cards = [
  { id: 1, title: "Card One", image: card1 },
  { id: 2, title: "Card Two", image: card2 },
  { id: 3, title: "Card Three", image: card3 },

  { id: 1, title: "Card One", image: card4 },
 { id: 2, title: "Card Two", image: card5 },
  { id: 3, title: "Card Three", image: card6 },
    { id: 1, title: "Card One", image: card1 },
 { id: 2, title: "Card Two", image: card2 },
  { id: 3, title: "Card Three", image: card3 },
   { id: 1, title: "Card One", image: card4 },
 { id: 2, title: "Card Two", image: card5 },
  { id: 3, title: "Card Three", image: card6 },

];

function CardCarousel() {
  return (
    <div className={css.carouselContainer}>
      
    <div className="rounded-sm sm:py-2 px-4 text-center ml-6 sm:ml-0 py-0">
 <h1 className="font-semibold text-xl lg:text-2xl inline-block border-b-2 border-blue-400 w-fit pb-1">
  Featured Product
</h1>
</div>


     
      <Swiper
  modules={[Navigation]}
  loop
  spaceBetween={0}
  slidesPerView={5}
  className={css.swiper}
  breakpoints={{
    0: {
      slidesPerView: 2,
      spaceBetween: -60,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1280: {
      slidesPerView: 6,
      spaceBetween: 0,
    },
  }}

  
>

        {cards.map((item) => (
          <SwiperSlide key={item.id}>
            <div>
            <Card>
              <img src={item.image} alt={item.title} className={css.cardImage}  />
              <div>
  <div>
    <h3 className={css.cardTitle}>{item.title}</h3>
    <h2 className={css.cardprice}>$10</h2>
  </div>
  
  <div className={css.cart}>
    <FaShoppingCart />
  </div>
</div>


            </Card>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CardCarousel;
