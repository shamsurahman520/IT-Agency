"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const Choose = () => {
  useEffect(() => {
      AOS.init({
        duration: 1000, // Animation duration
        once: false, // Animation should not run only once
      });
    }, []);

  const plans = [
    { title: "Daily Plan", price: 120, duration: "/Per Day" },
    { title: "Weekly Plan", price: 840, duration: "/Per Week" },
    { title: "Monthly Plan", price: 3600, duration: "/Per Month" },
  ];

  return (
    <section className="bg-[#F9F6F6] py-14">
      {/* Section Header */}
      <div className="flex flex-col justify-items-center text-center mx-auto lg:w-[700px] md:w-[650px]">
        <h2 className="font-saira font-bold text-3xl lg:text-5xl md:text-4xl mt-4">
          Choose The Pricing Plan
        </h2>
        <p className="text-md mt-3 max-sm:mx-2 leading-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-2 max-sm:grid-cols-1 lg:grid-cols-3 gap-4 max-sm:gap-y-6 px-12 max-sm:px-3 mt-10">
        {plans.map((plan, index) => (
          <div key={index} className="bg-white py-4 p-3 rounded-sm shadow hover:shadow-xl"
          data-aos="fade-in" // Animation
          data-aos-delay={200 * (index + 1)} // Dynamic delay based on index
          data-aos-duration="1000">
            
            {/* Plan Title */}
            <h3 className="text-xl font-bold pl-4">{plan.title}</h3>

            {/* Plan Pricing */}
            <div className="border-t border-dashed p-4 mt-4 border-gray-200">
              <sup className="text-3xl font-semibold">$</sup>
              <span className="text-4xl font-bold">{plan.price}</span>{' '}
              <sub className="text-base text-gray-600">{plan.duration}</sub>
              <p className="mt-4 leading-7 text-[#646464]">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.
              </p>
            </div>

            {/* Features List */}
            <ul className="pl-4 space-y-3 items-center text-sm text-[#444683]">
              {[
                "Web Development",
                "Email Integration",
                "Messenger Integration",
                "Mobile + Desktop Apps",
                "Quick Responses",
                "Drag & Drop Widgets",
                "Visitor Notes",
                "Google Analytics",
                "24/7 Live Chat",
              ].map((feature, idx) => (
                <li key={idx} className="flex gap-2 items-center">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="w-4 h-4 rounded-full text-[#ff2c9c]"
                  />
                  {feature}
                </li>
              ))}
            </ul>

            {/* Select Plan Button */}
            <div className="pl-4 pt-3 md:mt-1">
              <button
                type="submit"
                className="relative px-4 py-2 text-[#F9004D] border-[1px] border-[#F9004D] text-sm font-semibold rounded-md group"
              >
                Select The Plan
                <div className="absolute inset-0 mx-auto w-full bg-gradient-to-r from-pink-500 to-orange-500 group-hover:w-0 rounded-md duration-700 flex justify-center items-center overflow-hidden text-white text-nowrap">
                  Select The Plan
                </div>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Choose;

