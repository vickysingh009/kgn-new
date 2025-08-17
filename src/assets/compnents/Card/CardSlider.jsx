import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Card from "./Card";

// Import test image
import cardImage from "./card1.png";

// Product list
const products = [
  { name: "Galaxy Z Flip7", image: cardImage },
  { name: "Galaxy Watch8 Classic", image: cardImage },
  { name: "Galaxy Watch8", image: cardImage },
  { name: "Galaxy Book4 Edge", image: cardImage },
  { name: "Galaxy Buds3 Pro", image: cardImage },
  { name: "Galaxy Tab S10", image: cardImage },
  { name: "Galaxy SmartTag2", image: cardImage },
  { name: "Galaxy Ring", image: cardImage },
  { name: "Galaxy AI Phone", image: cardImage },
];

const ProductSlider = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(2); // initial active card (visual highlight)

  const handleCardClick = (clickedIndex) => {
    if (!swiperRef.current) return;

    const swiper = swiperRef.current;
    const slidesPerView = swiper.params.slidesPerView;
    const centerPosition = 2; // target position in visible slots (0-based, 2 = 3rd position)

    // Calculate the index so clicked card appears at centerPosition
    const slideToIndex = clickedIndex - centerPosition;

    swiper.slideToLoop(slideToIndex, 600);
    setActiveIndex(clickedIndex);
  };

  return (
    <div className="w-full px-4 py-8">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 5 },
        }}
        modules={[Navigation]}
      >
        {products.map((product, index) => {
      
          return (
            <SwiperSlide key={index}>
             <Card
             productName={product.name}
             productImg={product.image}
            handleCardClick={()=>
            {
              handleCardClick(index)
            }
            }
             
             
             ></Card>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
