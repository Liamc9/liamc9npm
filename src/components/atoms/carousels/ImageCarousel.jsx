import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Carousel Component
const ImageCarousel = ({ images }) => {
  const defaultImage = 'https://via.placeholder.com/800x400?text=No+Image+Available';
  const imageList = images && images.length > 0 ? images : [defaultImage];

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <Swiper
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        {imageList.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`Slide ${index}`} className="w-full" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default ImageCarousel
