"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const GetStarted = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration
          once: false, // Animation should not run only once
        });
      }, []);
    
  return (
    <section className="py-12 pb-24 px-12 max-sm:px-4">
      <div
        style={{
          backgroundImage: "url('/assets/getbgimg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          opacity: 40,
        }}
      >
        <div className="justify-items-center py-10 px-4 lg:px-56 bg-gradient-to-r from-orange-500/85 to-pink-500/90 ">
          <div className="container mx-auto flex flex-col justify-items-center text-center py-8 px-4 lg:px-16 text-[#ffffff]">
            <span>GET STARTED INSTANTLY!</span>
            <h2 className="font-saira font-extrabold text-2xl lg:text-3xl mt-4">
              Get the only new update from this newsletter
            </h2>

            <form className="relative border-none"
            data-aos="fade-in"
            data-aos-delay="400">
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className=" w-full mt-4 p-4 rounded-full text-black outline-none "
              ></input>
              <button className=" font-bold bg-gradient-to-r from-pink-600 to-orange-500 max-sm:px-4 px-7 p-3 absolute rounded-full right-1 mt-5 ">
                Subscribe!
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
