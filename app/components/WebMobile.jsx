"use client"
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faListCheck } from "@fortawesome/free-solid-svg-icons"; 

const WebMobile = () => {
  useEffect(() => {
      AOS.init({
        duration: 1000, // Animation duration
        once: false, // Whether animation should not once
      });
    }, []);

  return (
    <section className="flex flex-col lg:flex-row gap-12 mt-4 py-16 max-sm:py-12 md:px-16 sm:px-10 lg:px-0.5  mx-auto bg-[#F6F3F3]">
      <div className="mx-4 lg:w-[45%]">
        <h2 className="text-4xl font-sans font-bold">
          Web & Mobile Development
        </h2>
        <p className="mt-4 text-[#646464]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris
        </p>
        <div className="grid  sm:grid-cols-2 grid-cols-1  gap-6 mt-6 font-inter font-semibold text-[#646464] list-none">
          {/* <ul> */}
          <div className="flex gap-1 items-center text-center lg:py-2.5 py-4 pl-2 rounded-md bg-[#ffffff] cursor-pointer hover:text-white hover:bg-[#ff2c9c] duration-700 group">
            {" "}
            <FontAwesomeIcon
              icon={faCircleCheck}
              className=" w-5 h-5 rounded-full text-[#ff2c9c] group-hover:text-white "
            />{" "}
            Responsive Design
          </div>
          <div className="flex gap-1 items-center text-center lg:py-2.5 py-4 pl-2 rounded-md bg-[#ffffff] cursor-pointer hover:text-white hover:bg-[#ff2c9c] duration-700 group">
            {" "}
            <FontAwesomeIcon
              icon={faCircleCheck}
              className=" w-5 h-5 rounded-full text-[#ff2c9c] group-hover:text-white "
            />{" "}
            UI / UX Design
          </div>
          <div className="flex gap-1 items-center text-center lg:py-2.5 py-4 pl-2 rounded-md bg-[#ffffff] cursor-pointer hover:text-white hover:bg-[#ff2c9c] duration-700 group">
            {" "}
            <FontAwesomeIcon
              icon={faCircleCheck}
              className=" w-5 h-5 rounded-full text-[#ff2c9c] group-hover:text-white "
            />{" "}
            Mobile App Development
          </div>
          <div className="flex gap-1 items-center text-center lg:py-2.5 py-4 pl-2 rounded-md bg-[#ffffff] cursor-pointer hover:text-white hover:bg-[#ff2c9c] duration-700 group">
            {" "}
            <FontAwesomeIcon
              icon={faCircleCheck}
              className=" w-5 h-5 rounded-full text-[#ff2c9c] group-hover:text-white "
            />{" "}
            Laravel Web Development
          </div>
          <div className="flex gap-1 items-center text-center lg:py-2.5 py-4 pl-2 rounded-md bg-[#ffffff] cursor-pointer hover:text-white hover:bg-[#ff2c9c] duration-700 group">
            {" "}
            <FontAwesomeIcon
              icon={faCircleCheck}
              className=" w-5 h-5 rounded-full text-[#ff2c9c] group-hover:text-white "
            />{" "}
            React Web Development
          </div>
          <div className="flex gap-1 items-center text-center lg:py-2.5 py-4 pl-2 rounded-md bg-[#ffffff] cursor-pointer hover:text-white hover:bg-[#ff2c9c] duration-700 group">
            {" "}
            <FontAwesomeIcon
              icon={faCircleCheck}
              className=" w-5 h-5 rounded-full text-[#ff2c9c] group-hover:text-white "
            />{" "}
            Angular Web Development
          </div>

          {/* </ul> */}
          <div className="sm:ml-0 mx-auto px-auto ">
            <button
              type="submit"
              className="px-6 lg:py-2 py-3 border-[1px] border-[#ff2c9c] bg-gradient-to-r from-[#ff2c9c] to-[#ff6a00]  hover:bg-white font-semibold text-white hover:text-[#ff2c9c] duration-700 rounded-md group overflow-hidden"
            >
              <span className="flex items-center  gap-1">
                <FontAwesomeIcon
                  icon={faListCheck}
                  width={15}
                  height={15}
                  className="group-hover:text-[#ff2c9c]"
                />
                Read More
              </span>
            </button>
          </div>
        </div>
      </div>
      {/* Image Section */}
      <div className="lg:w-[45%]"> 
        <div 
          data-aos="zoom-in">
          <Image
            src="/assets/it-services.png"
            alt="web-mobile"
            width={770}
            height={582}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default WebMobile;
