"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import teamdata from "./jsonData/teamdata.json";
import Link from "next/link";
import { LiaLinkedinIn, LiaTwitter, LiaInstagram } from "react-icons/lia";
import { BiLogoFacebook } from "react-icons/bi";

const OurExperTeam = () => {
   useEffect(() => {
      AOS.init({
        duration: 1000, // Animation duration
        once: false, // Animation should not run only once
      });
    }, []);

  return (
    <section className="max-auto mx-11 max-sm:mx-4 py-16">
      <div className="flex flex-col justify-items-center text-center mx-auto lg:w-[700px] md:w-[650px]">
        <h2 className="font-saira font-bold text-3xl lg:text-5xl md:text-4xl mt-4">
          Our Expert Team
        </h2>
        <p className="text-md mt-3 leading-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="grid grid-cols-2 max-sm:grid-cols-1 lg:grid-cols-3 gap-4 mt-14">
        {teamdata.map((it, ind) => (
          <div key={ind}
          data-aos="fade-up" // Animation
          data-aos-delay={100 * (ind + 1)} // Dynamic delay based on index
          data-aos-duration="1000">
            <div className="w-full block aspect-[51/55] relative group overflow-hidden">
              <Image
                src={it.img}
                fill
                alt="team Pic"
                className="object-cover"
              />
              <div className="flex items-center justify-center gap-1 bg-gradient-to-r from-pink-500/90 to-orange-500/90 backdrop-blur-sm group-hover:w-full aspect-[51/55] inset-0 absolute -translate-y-full group-hover:translate-y-0 duration-500">
                <Link href="#" className="bg-white rounded-full">
                  <LiaLinkedinIn size={24} />
                </Link>
                <Link href="#" className="bg-white rounded-full">
                  <LiaTwitter size={24} />
                </Link>
                <Link href="#" className="bg-white rounded-full">
                  <BiLogoFacebook size={24} />
                </Link>
                <Link href="#" className="bg-white rounded-full">
                  <LiaInstagram size={24} />
                </Link>
              </div>
            </div>
            <h3 className="text-center text-xl font-bold mt-6 ">{it.name}</h3>
            <p className="text-center text-[#646464] mt-2"> {it.prof}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default OurExperTeam;
