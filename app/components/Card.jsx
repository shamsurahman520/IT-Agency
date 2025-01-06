import React from "react";

// {/* Child Component for CoursesCard.jsx */}
const Card = ({ title, disc, color, icon, ...aosProps }) => {
  return (
    <div
      className="lg:text-start md:text-start text-center bg-[#F6F3F3] lg:w-96 list-none py-10 p-6"
      {...aosProps} // Spread the AOS-related props here
    >
      <li
        className="flex items-center justify-center rounded-full lg:mr-64 md:mr-60 mx-auto w-16 h-16"
        style={{ backgroundColor: color }}
      >
        {icon}
      </li>
      <h3 className="font-sans font-semibold text-2xl mt-6 pb-3">{title}</h3>
      <p className="text-sm leading-6">{disc}</p>
    </div>
  );
};

export default Card;
