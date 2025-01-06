"use client";
import React from "react";
import Image from "next/image";
import { TiSocialFacebook } from "react-icons/ti";
import {
  TiSocialTwitter,
  TiSocialLinkedin,
  TiSocialInstagram,
} from "react-icons/ti";
import footerLinks from "./jsonData/footerLinks.json";
import Link from "next/link";
import { MapPin, Mail, Headset, Map, Contact, MailCheck } from "lucide-react";

const Footer = () => {
  return (
    <footer id='contactus' className=' bg-[#f6f9fc]'>

      <div className='container grid grid-cols-1 lg:grid-cols-4 md:grid-cols-4 py-16 px-4 lg:px-11 space-y-4 lg:text-sm md:text-sm text-[#646464]'>
      <div className='space-y-4'>
        <div className='relative w-36 aspect-[15/4]'>
          <Image
          src="/assets/flogo.png"
          alt="footer logo"
          fill
          className="object-cover"
           />
        </div>
        <p className='leading-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna <br/> aliqua. Ut enim ad minim veniam.</p>

        <ul className='flex space-x-2'>
          <li>
            <Link href='#'> <TiSocialFacebook
              className="text-white bg-gray-700 w-8 h-8 p-1 hover:bg-pink-500 duration-700  rounded-full text-xl" /></Link>
          </li>
          <li>
            <Link href='#'> <TiSocialTwitter
              className="text-white bg-gray-700 w-8 h-8 p-1 hover:bg-pink-500 duration-700 rounded-full text-xl" /></Link>
          </li>
          <li>
            <Link href='#'> <TiSocialLinkedin
              className="text-white bg-gray-700 w-8 h-8 p-1 hover:bg-pink-500 duration-700 rounded-full text-xl" /></Link>
          </li>

            <li>
              <Link href='#'>
              <TiSocialInstagram
              className="text-white bg-gray-700 w-8 h-8 p-2 hover:bg-pink-500 duration-700 rounded-full text-xl" /></Link>
          </li>
          </ul>
      </div>
     {footerLinks.map((item, index) => (
      <div className='space-y-4' key={index}>
        <div>
        <h3 className='font-saira font-bold text-xl text-[#181818]'>{item.title}</h3>
         <span className='block w-10 bg-pink-500 h-1'></span>
        </div>
        <ul className='space-y-3 w-fit'>
          {!item.icons ? item.links.map((link, ind) =>

            <li key={ind} className='group flex items-center gap-1' >
              <span className='block w-0 group-hover:w-3 h-[2px]  bg-pink-500 duration-1000 '></span>
              <Link href="#" className=' group-hover:text-pink-500'>{link}</Link>
            </li>)
          : item.icons.map((icon, ind) =>
             <li key={ind}>
              {icon.icon === 'MapPin' && (<div className='flex gap-2 items-center'><span className='p-2 bg-gradient-to-r from-pink-600 to-orange-500 rounded-full'><MapPin size={16} className='fill-white '/></span><span>{icon.info}</span></div>)}
              {icon.icon === 'Headset' && (<div className='flex gap-2 items-center'><span className='p-2 bg-gradient-to-r from-pink-600 to-orange-500 rounded-full'><Headset size={16} className='fill-white ' /></span><span>{icon.info}</span></div>)}
              {icon.icon === 'Mail' && (<div className='flex gap-2 items-center'><span className='p-2 bg-gradient-to-r from-pink-600 to-orange-500 rounded-full'><Mail size={16} className='fill-white' /></span><span >{icon.info}</span></div>)}
              </li>
          )
        }
        </ul>
      </div>
      ))}

    </div>
      {/* Footer Bottom */}
      <div className="bg-black text-white text-center py-5 text-sm">
        <p>
          Copyright &copy; 2025 -{" "}
          <span className="font-semibold">Shams U Rahman</span>. All Rights
          Reserved.
        </p>
        <p>
          Made with <span className="text-red-500">&hearts;</span> by Shams U
          Rahman
        </p>
      </div>
    </footer>
  );
};

export default Footer;
