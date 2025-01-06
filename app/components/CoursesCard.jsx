"use client"
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { RiMessage2Line ,RiLightbulbLine } from "react-icons/ri";
import { BsPcDisplayHorizontal } from "react-icons/bs";
import { ImMobile } from "react-icons/im";
import { PiShoppingCart } from "react-icons/pi";
import { HiOutlineUsers } from "react-icons/hi";
import Card from './Card';

{/* Parent Component for Card.jsx */}
const CoursesCard = () => {

   useEffect(() => {
      AOS.init({
        duration: 1000, // Animation duration
        once: false, // Whether animation should not once
      });
    }, []);

  const CardData = [
    {
      title:"IT Consultancy",
      disc:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo",
      icon:<RiMessage2Line color="white" size={28}/>,
      color:"#13c4a1"
    },
    
  {
      title:"Web Development",
      disc:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo",  
      icon:<BsPcDisplayHorizontal color="white" size={28}/>,
      color:"#6610f2"
    },
    {
      title:"Digital Marketing",
      disc:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo",
      icon:<RiLightbulbLine color="white" size={28}/>,
      color:"#ffb700"
    },
    {
      title:"Mobile App Development",
      disc:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo",
      icon:<ImMobile color="white" size={28}/>,
      color:"#fc3549"
    },
    {
      title:"eCommerce Development",
      disc:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo",
      icon:<PiShoppingCart color="white" size={28}/>,
      color:"#00d280"
    },
    {
      title:"IT Solutions",
      disc:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo",
      icon:<HiOutlineUsers color="white" size={28}/>,
      color:"#ff612f"
    }
  ]


  return (

  <section
  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 gap-4 lg:px-10 md:px-16 px-4 py-14 justify-center bg-gray-50"
>
  {CardData.map((item, ind) => (
    <Card
      {...item}
      key={ind}
      data-aos="fade-in"
      data-aos-delay={100 * (ind + 1)} // Dynamic delay based on index
      data-aos-duration="1000"
    />
  ))}
</section>

  )
}

export default CoursesCard;