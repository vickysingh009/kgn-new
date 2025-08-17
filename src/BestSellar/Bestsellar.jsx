import React from 'react';
import css from "./BestSellar.module.css";
import ProductCard from '../ProductList/ProductCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';

function Bestseller() {
  return (
    <div className="w-full pe-10  max-w-[100%] mx-auto pb-38
  h-auto  
  sm:w-[95%] md:w-[100%] lg:w-[110%] relative ">
      {/* Header Section */}

     <div className="text-center mb-8 lg:mb-12 relative pt-4 left-0 
  h-[150px] sm:h-[180px] md:h-[200px] lg:h-[380px] 
  w-full sm:w-[90%] md:w-[80%] lg:w-[100%] 
  mx-auto bg-[#fdf8e3]">

        <div className="mb-2">
          <h4 className="text-xs sm:text-sm text-gray-500 uppercase tracking-wide font-medium">
            Most Popular Furniture
          </h4>
        </div>

        <div className="mb-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            Best Sellers
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Find our most-loved pieces, picked by thousands of happy customers.
            From cozy couches to space-saving tables, these favorites bring both style and comfort to your home.
          </p>
        </div>
      </div>

      {/* Swiper Section */}
      <div className=" w-[80%] absolute top-47 left-32">
        <Swiper
          modules={[Navigation]}
          loop
         
          className="pb-12"
          breakpoints={{
            // Mobile
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            // Small tablet
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            // Desktop
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            // Large desktop
            1280: {
              slidesPerView: 4,
              spaceBetween: 35,
            },
          }}
        >
          <SwiperSlide><ProductCard /></SwiperSlide>
          <SwiperSlide><ProductCard /></SwiperSlide>
          <SwiperSlide><ProductCard /></SwiperSlide>
          <SwiperSlide><ProductCard /></SwiperSlide>
          <SwiperSlide><ProductCard /></SwiperSlide>
          <SwiperSlide><ProductCard /></SwiperSlide>
        </Swiper>

        {/* Custom Navigation Buttons */}
      
      </div>
    </div>
  );
}

export default Bestseller;