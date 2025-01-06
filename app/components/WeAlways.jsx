"use client"
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faHeart, faListCheck, faTrophy } from "@fortawesome/free-solid-svg-icons"; 
import Link from 'next/link';

const WeAlways = () => {
   useEffect(() => {
          AOS.init({
            duration: 1000, // Animation duration
            once: false, // Whether animation should not once
          });
        }, []);


  return (
    <section className='py-16 bg-[#F6F3F3]'>
        <div className=' lg:mx-[24%] md:mx-[16%] max-sm:mx-[10%] mx-auto'>
            <h2 className='text-center lg:text-5xl text-4xl font-bold pb-4'>
                We always try to understand users expectation
            </h2>
            <p className='text-center text-[#646464] leading-7 px-3'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
        </div>
        {/* Cards */}
        <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 py-10 gap-4 sm:mx-8 mx-2 mt-2'>
          <div className='flex lg:w-64  w-[332px] h-56 mx-auto list-none rounded-md bg-[#FFFFFF]'
          data-aos="fade-up"
          data-aos-delay="100">
            <div  className=' py-6 mx-auto justify-center text-center'>
            <li className='mx-auto w-16 h-16 p-3 rounded-full relative bg-gray-200'>
            <FontAwesomeIcon
            icon={faCircleCheck}
            className=" w-10 h-10 text-[#ff2c9c] " 
            />
            </li>
            <h2 className='font-sans font-extrabold  text-4xl mt-6 pb-1 '>980+</h2>
            <p>Completed Projects</p>
            </div>   
          </div>
          <div className='flex lg:w-64 w-[332px] h-56 mx-auto list-none rounded-md bg-[#FFFFFF]'
          data-aos="fade-up"
          data-aos-delay="200">
            <div  className=' py-6 mx-auto justify-center text-center'>
            <li className='mx-auto w-16 h-16 p-3 rounded-full relative bg-gray-200'>
            <FontAwesomeIcon
            icon={faHeart}
            className=" w-10 h-10 text-[#ff2c9c]" 
            />
            </li>
            <h2 className='font-sans font-extrabold  text-4xl mt-6 pb-1 '>950+</h2>
            <p>Happy Clients</p>
            </div>   
          </div>
          <div className='flex lg:w-64 w-[332px] h-56 mx-auto list-none rounded-md bg-[#FFFFFF]'
          data-aos="fade-up"
          data-aos-delay="300">
            <div  className=' py-6 mx-auto justify-center text-center'>
            <li className='mx-auto w-16 h-16 p-3 rounded-full relative bg-gray-200'>
            <FontAwesomeIcon
            icon={faListCheck}
            className=" w-10 h-10  text-[#ff2c9c]" 
            />
            </li>
            <h2 className='font-sans font-extrabold  text-4xl mt-6 pb-1 '>780+</h2>
            <p>Ongoing Projects</p>
            </div>   
          </div>
          <div className='flex lg:w-64 w-[332px] h-56 mx-auto list-none rounded-md bg-[#FFFFFF]'
          data-aos="fade-up"
          data-aos-delay="400">
            <div  className=' py-6 mx-auto justify-center text-center'>
            <li className='mx-auto w-16 h-16 p-3 rounded-full relative bg-gray-200'>
            <FontAwesomeIcon
            icon={faTrophy}
            className=" w-10 h-10  text-[#ff2c9c] " 
            />
            </li>
            <h2 className='font-sans font-extrabold  text-4xl mt-6 pb-1 '>70+</h2>
            <p>Winning Awards</p>
            </div>   
          </div>
        </div>
        {/* contact Us div */}
        <div className='flex flex-col lg:flex-row md:flex-row sm:flex-row sm:items-start sm:justify-start sm:text-start items-center justify-center sm:gap-36 md:gap-72 lg:gap-80 mx-2 md:mx-20 lg:mx-60 mt-6 py-6 rounded-md bg-[#FFFFFF]'
        data-aos="fade-up"
        data-aos-delay="500">
            <div className='px-6'>
            <h3 className=' text-xl font-semibold pb-1'>
                Have any questions about us?
            </h3>
            <p className='text-[#646464]'>
            Don't hesitate to contact us
            </p>
            </div>
              { /* Button */}
            <div className="mt-4 md:mt-1">
            <button
              type="submit"
              className="relative px-6 py-3 text-[#F9004D] border-[1px]  border-[#F9004D] font-semibold rounded-md group "
            > 
              Contact Us
             <div className="absolute inset-0 mx-auto w-full bg-gradient-to-r  from-pink-500 to-orange-500 group-hover:w-0 rounded-md duration-700 flex justify-center 
             items-center overflow-hidden text-white text-nowrap">
            Contact Us
            </div>
            </button>
          </div>
        </div>
    </section>
  )
}

export default WeAlways;