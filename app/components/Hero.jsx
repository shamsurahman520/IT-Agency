
"use client"
import Image from 'next/image';
import React from "react";

const Hero = () => {
  return (
    <section
      className="before:bg-[#18181b] before:absolute before:inset-0 before:opacity-85 bg-cover bg-center lg:h-screen h-[850px]"
      style={{ backgroundImage: "url('/assets/hero-banner.jpg')"}}>

      {/* Parent div for content & image */} 
      <div className='flex max-lg:flex-col lg:pt-14 pt-28 justify-around items-center'>
        {/* content div */} 
        <div className='lg:w-[43%] text-slate-50 z-10'>
        <h1 className="font-sans font-extrabold lg:text-start text-center lg:text-7xl md:text-5xl sm:text-5xl text-4xl lg:pb-9 pb-5"
       >
          We're an IT Agency</h1>
        <p className='font-inter lg:text-start text-center text-[1.14rem] pb-10'
       
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna.</p>

        <div className=" flex lg:justify-start justify-center items-center space-x-5">
            <button
              type="submit"
              className="relative px-6 py-3  border-[1px]  border-[#F9004D] hover:border-white duration-700 delay-300 font-semibold rounded-md group "
             
              > 
              Get Started
             <div className="absolute inset-0 mx-auto w-full bg-gradient-to-r from-pink-500 to-orange-500 group-hover:w-0 rounded-md duration-700 delay-300 flex justify-center 
             items-center overflow-hidden text-white text-nowrap">
            Get Started</div>
            </button>

            <button
              type="submit"
              className="relative px-6 py-3  border-[1px]  border-white hover:border-[#F9004D] duration-700 delay-300 font-semibold rounded-md group "
              > 
              How It Works
             <div className="absolute inset-0 mx-auto w-0 bg-transparent hover:bg-gradient-to-r  from-pink-500 to-orange-500  group-hover:w-full rounded-md duration-700 delay-300 flex justify-center 
             items-center overflow-hidden text-white text-nowrap">
            How It Works</div>
            </button>
          </div>
        </div>
        {/* image div */}  
      <div className="lg:w-[43%] aspect-[600/600] lg:mt-0 mt-10 z-10"
          >
        <Image
        src="/assets/HeroImage.jpg"
        width={516}
        height={517}
        alt="heroImg"
        priority
         />
      </div>
      </div>
    </section>
  );
};

export default Hero;





