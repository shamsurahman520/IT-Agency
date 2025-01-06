"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

// Import Swiper React components
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
// Import required modules
import { Pagination, Autoplay } from "swiper/modules"; // Import Autoplay module
const SwipSlider = () => {
 useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: false, // Animation should not run only once
    });
  }, []);


  const data = [
    {
      name: "John Smith",
      spec: "CEO & Founder, Envato",
    },
    {
      name: "Oliver Smith",
      spec: "React JS Specialist",
    },
    {
      name: "Thomas John",
      spec: "Angular JS Specialist",
    },
  ];

  return (
    <section className="relative bg-cover bg-center lg:h-screen  h-[560px]  mx-auto py-12 " 
    style={{ backgroundImage: "url('/assets/feedback-bg.jpg')"}}>
      
        <div className="absolute w-44 aspect-square left-6 top-6 max-sm:hidden "
        data-aos="zoom-in"
        data-aos-delay="300">
          <Image
            src="/assets/client2.png"
            alt="Quote symbol image"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute w-48 aspect-square left-56 top-2 max-md:hidden max-sm:hidden"
        data-aos="zoom-in"
        data-aos-delay="400">
          <Image
            src="/assets/client3.png"
            alt="Quote symbol image"
            fill
            className="object-cover"
          />
        </div>
       

        {/*Quote dive */}
        <div className="flex relative mt-10 max-sm:mt-2 mx-auto items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-[#ff2c9c] to-[#ff6a00]">
          <Image
            src="/assets/quote.png"
            width={36}
            height={26}
            alt="Quote symbol image"
            className="absolute max-auto aspect-auto"
          />
        </div>
        
        <div className="absolute w-48 aspect-square right-56 top-8 max-md:hidden max-sm:hidden "
        data-aos="zoom-in"
        data-aos-delay="500">
          <Image
            src="/assets/client4.png"
            alt="Quote symbol image"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute w-48 aspect-square right-0 top-0 max-sm:hidden "
        data-aos="zoom-in"
        data-aos-delay="600">
          <Image
            src="/assets/client5.png"
            alt="Quote symbol image"
            fill
            className="object-cover"
          />
        </div>
    
      <SwiperComponent
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000, 
          disableOnInteraction: false, 
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper max-w-[670px] mt-6 mx-auto h-[320px] max-sm:h-[360px] text-center rounded-lg"
      >
        {data.map((it, ind) => (
          <SwiperSlide key={ind}>
            <div className="max-sm:mx-2">
              <p className="font-inter font-semibold italic text-[22px] max-sm:text-xl leading-10">
                <q>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna 
                  aliqua. Quis ipsum suspendisse ultrices gravida. Risus 
                  commodo viverra maecenas accumsan lacus vel facilisis.
                </q>
              </p>
              <div className="w-0.5 h-10 mx-auto my-4 bg-pink-600"></div>
              <h3 className="font-saira font-extrabold">{it.name}</h3>
              <span>{it.spec}</span>
            </div>
          </SwiperSlide>
        ))}
      </SwiperComponent>
      
      <div className="absolute w-40 aspect-square left-28 top-96 max-sm:hidden"
      data-aos="zoom-in"
      data-aos-delay="700">
          <Image
            src="/assets/client6.png"
            alt="Quote symbol image"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute w-36 aspect-square left-80 top-96 max-md:hidden max-sm:hidden"
        data-aos="zoom-in"
        data-aos-delay="800">
          <Image
            src="/assets/client7.png"
            alt="Quote symbol image"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute w-48 aspect-square right-72 top-96 max-md:hidden max-sm:hidden"
        data-aos="zoom-in"
        data-aos-delay="200">
          <Image
            src="/assets/client1.png"
            alt="Quote symbol image"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute w-48 aspect-square right-14 top-72  max-sm:hidden"
        data-aos="zoom-in"
        data-aos-delay="900">
          <Image
            src="/assets/client8.png"
            alt="Quote symbol image"
            fill
            className="object-cover"
          />
        </div>
      
    </section>
  );
};
export default SwipSlider;
