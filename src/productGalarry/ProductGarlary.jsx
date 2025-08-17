import React from 'react';
import ProductCardGallary from './CardGallary';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import card1 from "./img/card1.png";
import card2 from "./img/card2.png";
import card3 from "./img/card3.png";
import card4 from "./img/card4.png";
import card5 from "./img/card5.png";
import card6 from "./img/card6.png";

function ProductGallery() {
  const products = [
    { id: 1, name: "Premium Wireless Headphones", price: 299.99, originalPrice: 399.99, image: card1, rating: 4.8, reviews: 234, badge: "Best Seller" },
    { id: 2, name: "Smart Fitness Watch", price: 149.99, originalPrice: 199.99, image: card2, rating: 4.5, reviews: 321, badge: "New" },
    { id: 3, name: "Gaming Mouse", price: 59.99, originalPrice: 89.99, image: card3, rating: 4.6, reviews: 512, badge: "Gaming" },
    { id: 4, name: "Eco-Friendly Bottle", price: 19.99, originalPrice: 29.99, image: card4, rating: 4.7, reviews: 210, badge: "Eco-Friendly" },
    { id: 5, name: "4K Ultra HD Monitor", price: 499.99, originalPrice: 599.99, image: card5, rating: 4.9, reviews: 112, badge: "Popular" },
    { id: 6, name: "Portable Speaker", price: 79.99, originalPrice: 99.99, image: card6, rating: 4.4, reviews: 187, badge: "Sale" },
  ];

  return (
    <div className="w-full p-3 sm:p-6">
      <div className="max-w-10xl mx-auto">
        {/* Header Section */}
        <div className="rounded-sm py-2 px-4 text-center ml-6 sm:ml-0 sm:py-0 mb-3 sm:mb-4">
          <h1 className="font-semibold text-xl sm:text-xl lg:text-2xl">
            Our Products
          </h1>
        </div>

        {/* Swiper Container */}
        <Swiper
          modules={[Navigation]}
          loop
          spaceBetween={0}
          slidesPerView={5}
          breakpoints={{
            0: { slidesPerView: 2, spaceBetween: 10 },
            640: { slidesPerView: 3, spaceBetween: 15 },
            1024: { slidesPerView: 4, spaceBetween: 20 },
            1280: { slidesPerView: 5, spaceBetween: 30 },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCardGallary product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default ProductGallery;
