"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import assetsData from './jsonData/assetsData.json';
import Image from 'next/image';

const Trusted = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: false, // Animation should not run only once
    });
  }, []);

  return (
    <section className="container mx-auto px-4 py-20 bg-gray-50">
      <div className="lg:px-72 justify-center text-center">
        <h2 className="font-sans font-bold lg:text-5xl text-3xl pb-6">Trusted By</h2>
        <p className="text-[#646464]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      {/* Images section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mt-10">
        {assetsData.map((im, index) => (
          <div
            key={im.id}
            className="flex justify-center items-center"
            data-aos="fade-in" // Animation
            data-aos-delay={100 * (index + 1)} // Dynamic delay based on index
            data-aos-duration="1000"
          >
            <Image
              src={im.path}
              width={100}
              height={100}
              alt="images"
              className="aspect-square"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Trusted;
