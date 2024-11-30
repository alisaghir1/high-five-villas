"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./swiper.css";
import Image from "next/image";
import cr1 from "../assets/carousel1.jpeg";
import cr2 from "../assets/amenities/amenities3.jpeg";
import cr3 from "../assets/villa exterior/villaEx5.jpeg";
import cr4 from "../assets/fourPlus.jpg";
import cr5 from "../assets/carousel5.jpeg";
import cr6 from "../assets/carousel6.jpeg";
import cr7 from "../assets/home-villa.jpg";


// import required modules
import { FreeMode, Pagination } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={3} // Default setting for larger screens
        spaceBetween={30} // Default space between slides
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
        breakpoints={{
          320: {
            slidesPerView: 1, // 1 slide per view for small screens
            spaceBetween: 10, // Smaller space between slides
          },
          768: {
            slidesPerView: 2, // 2 slides per view for medium screens
            spaceBetween: 20, // Medium space between slides
          },
          1024: {
            slidesPerView: 3, // 3 slides per view for larger screens
            spaceBetween: 30, // Larger space between slides
          },
        }}
      >
        <SwiperSlide>
          <Image src={cr1} alt="slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={cr2} alt="slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={cr3} alt="slide 3" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={cr4} alt="slide 4" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={cr5} alt="slide 5" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={cr6} alt="slide 6" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={cr7} alt="slide 7" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
