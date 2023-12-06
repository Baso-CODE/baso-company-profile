"use client";

import React from "react";

import { testimonialsData } from "../data";

// import swiper react from "react
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../slider.css";

import { Pagination } from "swiper";
import Image from "next/image";

const TestimonialSlider = () => {
  return (
    <Swiper
      slidesPerView={"auto"}
      centeredSlides={true}
      spaceBetween={20}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="mySwiper">
      {testimonialsData.map((slide, index) => {
        // destructure slide
        const { image, message, name, web } = slide;
        // slide
        return (
          <SwiperSlide
            className="bg-white rounded-[20px] border border-primary xl:max-w-[645px] max-h-[330px] pt-[60px] px-[35px] xl:px-[70px] pb-[50px] flex items-start gap-x-[30px] shadow-xl"
            key={index}>
            {/* avatar image */}
            <Image
              quality={100}
              src={image}
              alt="gamabr titik"
              width={150}
              height={150}
            />
            {/* text */}
            <div>
              <div className="text-lg text-primary font-bold">{name}</div>
              <div className="mb-4 font-semibold text-accent-primary">
                {web}
              </div>
              <div className="max-w-[340px]">{message}</div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
