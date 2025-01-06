"use client";
import React from 'react';
import { FaAnglesRight } from "react-icons/fa6";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/autoplay";

// Import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import Link from 'next/link';
import slideData from "./jsonData/slideData.json";
import Image from 'next/image';

const LatestNews = () => {
  return (
    <section className="px-12 max-sm:px-4 py-12 max-sm:py-10">
      {/* Section Header */}
      <div className="flex flex-col justify-items-center text-center mx-auto lg:w-[700px] md:w-[650px]">
        <h2 className="font-saira font-bold text-3xl lg:text-5xl md:text-4xl mt-4">
          Latest News
        </h2>
        <p className="text-md mt-3 max-sm:mx-2 leading-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* Cards Section */}
      <div className="relative mt-12">
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
            el: '.custom-pagination', // Link pagination to a custom container
          }}
          autoplay={{
            delay: 8000, 
            disableOnInteraction: false, 
          }}
          breakpoints={{
            // Adjust slides per view based on screen width
            640: {
              slidesPerView: 1, // For screens >= 640px (sm)
            },
            768: {
              slidesPerView: 2, // For screens >= 768px (md)
            },
            1024: {
              slidesPerView: 3, // For screens >= 1024px (lg and above)
            },
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper "
        >
          {slideData.map((itm) => (
            <SwiperSlide
              key={itm.id}
              className="flex flex-col  mb-1 rounded-sm shadow-lg group overflow-hidden"
            >
              <div className="relative w-full overflow-hidden aspect-[51/40]">
                <Image
                  src={itm.img}
                  fill
                  alt="blog img"
                  className="object-cover group-hover:scale-125 duration-700 cursor-pointer"
                />
                <h4 className='bg-[#FF2C9C] text-[#ffffff] text-sm absolute px-5 py-2 top-8'>{itm.label}</h4>
              </div>
              <div className="p-6 space-y-2">
                <span className='text-[#FF2C9C]'>{itm.year}</span>
                <h3 className="font-saira font-bold text-xl hover:text-pink-500 duration-500 cursor-pointer">{itm.heading}</h3>
                <p className='text-sm text-[#646464] leading-6'>{itm.disc}</p>
                <Link  href="/" className='font-semibold hover:text-pink-500 duration-500'>Read more <FaAnglesRight className='inline' /></Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Custom Pagination */}
        <div className="custom-pagination mt-6 flex justify-center items-center"></div>
      </div>
    </section>
  );
};

export default LatestNews;
