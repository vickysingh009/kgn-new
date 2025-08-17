import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

import FurnitureCategories from './FurnitureCategories';

function FurnitureCollection() {
  return (
    <div className="w-full px-4">
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        loop
        pagination={{ clickable: true }}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 1,
          },
        }}
        className="w-full"
      >
        {[1, 2, 3].map((item) => (
          <SwiperSlide key={item}>
            <FurnitureCategories />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default FurnitureCollection;
